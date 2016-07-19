var React = require('react');
const CustomFieldsContainer = require('./CustomFieldsContainer');
const ModalContentFooter = require('./ModalContentFooter');
const ModalFooterButtons = require('./ModalFooterButtons');
const SelectField = require('./SelectField');
const ErrorMessage = require('./ErrorMessage');



const ModalContent = React.createClass({

  childContextTypes: {
    errors: React.PropTypes.object
  },

  getChildContext: function () {
    return {
      errors: {
        required: this.props.labels.required,
        invalid_chars: this.props.labels.invalid_chars,
        atLeast4Chars: this.props.labels.atLeast4Chars
      }
    }
  },

  propTypes : {
    labels: React.PropTypes.object.isRequired,
    instances: React.PropTypes.array.isRequired,
    requester: React.PropTypes.object.isRequired,
    priorities: React.PropTypes.array.isRequired,
    errorMessage: React.PropTypes.string,
    formAction: React.PropTypes.string.isRequired,
    formValues: React.PropTypes.any.isRequired
  },

  getInitialState: function () {
    var state = {
      errors: {},
      isSubmitting: false
    };

    if (this.props.formValues.instance_id) {
      let currInstance = this.props.instances.filter(instance => instance.instance_id == this.props.formValues.instance_id)[0];
      let currInbox = currInstance.inboxes.filter(inbox => inbox.id == this.props.formValues.inbox_id)[0];

      let currentCustomFields = currInbox.customFields.map((custField) => {
        if (this.props.formValues.customFields[custField.id] !== undefined) {
          custField.value = this.props.formValues.customFields[custField.id];
          return custField;
        }
      });

      currInbox.customFields = currentCustomFields;

      state.currentInstance = currInstance;
      state.currentInboxes = currInstance.inboxes;
      state.currentInbox = currInbox;
    } else {
      state.currentInstance = this.props.instances[0];
      state.currentInboxes = this.props.instances[0].inboxes;
      state.currentInbox = this.props.instances[0].inboxes[0];
    }

    return state;
  },

  selectInstance: function (instance_id) {
    var currentInstance = this.props.instances.filter((instance) => instance.instance_id == instance_id);
    return currentInstance[0];
  },

  selectInbox: function (inbox_id) {
    var currentInbox = this.state.currentInboxes.filter((inbox) => inbox.id == inbox_id);
    return currentInbox[0];
  },

  setCurrentInstance: function (e) {

    var currentInstance = this.selectInstance(e.target.value);
    this.setState({
      currentInstance : currentInstance,
      currentInboxes : currentInstance.inboxes,
      currentInbox: currentInstance.inboxes[0]
    })
  },

  setInbox: function (e) {
    this.setState({
      currentInbox: this.selectInbox(e.target.value)
    })
  },

  componentDidMount: function () {
    //console.log('MOUNTEDDDDDD', $.fn.jquery);
    jQuery(this.refs['modal-body']).scrollbar();
    jQuery(".btn").corner('15px');
  },

  onFormSubmit: function (e) {
    e.preventDefault();

    this.setState({
      isSubmitting: true
    }, function () {
      if (Object.keys(this.state.errors).length === 0) {
        this.refs['ticket-form'].submit();
      }
    });
  },

  render: function () {

    return (
      <div>
        {this.props.errorMessage && <ErrorMessage errors={this.props.errorMessage} />}
        <form action={this.props.formAction}  method="POST" ref="ticket-form" name="createTicket" onSubmit={this.onFormSubmit} encType="multipart/form-data">
          <div ref="modal-body" className="modal-body scrollbar-macosx scrollbar-popup">
            <div className="row nomargin">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-xs-6" >
                    <div className="form-group">
                      <label>Requester</label>
                      <p><b>{this.props.requester.name}</b></p>
                    </div>
                  </div>
                  <input type="hidden" value={this.state.currentInstance.staff_id} name="staff_id" />
                  <SelectField onChange={this.setCurrentInstance}
                               label={this.props.labels.instance}
                               options={this.props.instances}
                               name="instance_id"
                               optionValue="instance_id"
                               optionName="instance_url"
                               selectedDefault={this.props.formValues.instance_id && this.props.formValues.instance_id}
                  />
                </div>
                <div className="row">

                  <SelectField onChange={this.setInbox}
                               label={this.props.labels.inbox}
                               options={this.state.currentInboxes}
                               name="inbox_id"
                               selectedDefault={this.props.formValues.inbox_id && this.props.formValues.inbox_id}
                  />

                  <SelectField label={this.props.labels.assignee}
                               options={this.state.currentInbox.assigneeList}
                               name="assignee"
                               selectedDefault={this.props.formValues.assignee || this.state.currentInbox.defaultAssignee}
                  />

                  <SelectField label={this.props.labels.priority}
                               options={this.props.priorities}
                               name="priority_id"
                               selectedDefault={this.props.formValues.priority_id || this.state.currentInbox.priority_id}
                  />

                  <CustomFieldsContainer isSubmitting={this.state.isSubmitting}
                                         errors={this.state.errors}
                                         fields={this.state.currentInbox.customFields} />

                  <ModalContentFooter labels={this.props.labels}
                                      isSubmitting={this.state.isSubmitting}
                                      errors={this.state.errors}
                                      subjectDefault={this.props.formValues.subject}
                                      descriptionDefault={this.props.formValues.description}
                                      notifyCustomerDefault={this.props.formValues.notifyCustomer}
                  />

                </div>
              </div>
            </div>
          </div>
          <ModalFooterButtons />
        </form>
      </div>
    );
  }
});

module.exports = ModalContent;
