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
        invalid_chars: this.props.labels.invalid_chars
      }
    }
  },

  propTypes : {
    labels: React.PropTypes.object.isRequired,
    instances: React.PropTypes.array.isRequired,
    requester: React.PropTypes.object.isRequired,
    priorities: React.PropTypes.array.isRequired,
    errorMessage: React.PropTypes.string
  },

  getInitialState: function () {
    return {
      currentInstance: this.props.instances[0],
      currentInboxes: this.props.instances[0].inboxes,
      currentInbox: this.props.instances[0].inboxes[0],
      errors: {},
      isSubmitting: false
    }
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
        debugger;
        this.refs['ticket-form'].submit();
      }
    });
  },

  render: function () {

    return (
      <div>
        {this.props.errorMessage && <ErrorMessage errors={this.props.errorMessage} />}
        <form action="http://helpdesk/tvclient/ticket/create?token=4566&accountId=50975214&lang=en" method="POST" ref="ticket-form" name="createTicket" onSubmit={this.onFormSubmit} encType="multipart/form-data">
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
                               optionName="instance_url" />
                </div>
                <div className="row">

                  <SelectField onChange={this.setInbox}
                               label={this.props.labels.inbox}
                               options={this.state.currentInboxes}
                               name="inbox_id"
                  />

                  <SelectField label={this.props.labels.assignee}
                               options={this.state.currentInbox.assigneeList}
                               name="assignee"
                               selectedDefault={this.state.currentInbox.defaultAssignee}
                  />

                  <SelectField label={this.props.labels.priority}
                               options={this.props.priorities}
                               name="priority_id"
                  />

                  <CustomFieldsContainer isSubmitting={this.state.isSubmitting}
                                         errors={this.state.errors}
                                         fields={this.state.currentInbox.customFields} />

                  <ModalContentFooter labels={this.props.labels}
                                      isSubmitting={this.state.isSubmitting}
                                      errors={this.state.errors} />
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
