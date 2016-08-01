var React = require('react');
const ReactDOM = require('react-dom');
const CustomFieldsContainer = require('./CustomFieldsContainer');
const ModalContentFooter = require('./ModalContentFooter');
const ModalFooterButtons = require('./ModalFooterButtons');
const SelectField = require('./SelectField');
const TokenContainer = require('./TokenContainer');
const ErrorMessage = require('./ErrorMessage');
const Constant = require('../constants/create_ticket');



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
      state.currentInbox.defaultAssignee = this.props.formValues.assignee;
      //state.currentInbox.priority_id = this.props.formValues.priority_id;
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

  onTicketCreate: function () {

    var url = this.props.formAction;

    function getFilesFromInputs(inputs, cb) {
      let fileArray = [];

      inputs.forEach((input, idx) => {
        for (let i = 0; i < input.files.length; ++i) {

          let file = input.files[0];


          let reader = new FileReader();

          reader.readAsDataURL(file);


          reader.onloadend = () => {
              fileArray.push({
                data: reader.result,
                name: file.name,
                size: file.size,
                type: file.type
              });

            if (idx === inputs.length - 1 && i === input.files.length - 1) {
              cb(fileArray);
            }
          };
        }

      });
    }

    function extractCustomFieldKey(customField) {
      return customField.match(/\[(.*?)\]/)[1];
    }

    function sendData(data, url) {

      return (
        $.ajax({
          url: url + '&ajax=true',
          //contentType: 'application/json',
          data: data,
          type: 'POST'
      })
      )
    }


    function closeWindow(data, url){
      return (
          $.ajax({
            url: url,
            contentType: 'application/json',
            data: JSON.stringify(data),
            type: 'POST'
          })
      )
    }

    function handleSend(data, url) {
      sendData(data, url)
           .done((data) => {
             console.log('success');
             if (data.errorMessage) {
               $(".scroll-content").scrollTop(0);
               ReactDOM.render(<ErrorMessage errors={data.errorMessage} />, document.getElementById('error-message-block'));
             } else {
               closeWindow(data.data, data.closeWindowURL);
             }
           })
           .fail((data) => {
             console.log('error data', data);
           })
    }

    let formData = $(this._form).serializeArray();

    let inputValues = formData
                        .filter(data => data.name.indexOf('multiFilesUpload') > -1)
                        .filter(file => file.value !== "")
                        .map(file => file.value);

    let customFields = formData
                        .filter(data => data.name.indexOf('customFields') > -1)
                        .reduce((prev, curr) => {
                          prev[extractCustomFieldKey(curr.name)] = curr.value;
                          return prev;
                        }, {});

    let mainFields = formData
                       .filter(data => data.name.indexOf('multiFilesUpload') === -1)
                       .filter(data => data.name.indexOf('customFields') === -1)
                       .reduce((prev, curr) => {
                              prev[curr.name] = curr.value;
                              return prev;
                        }, {});




    let inputs = $('input[type="file"]').filter((idx, file) => inputValues[file.value] !== "");


    if (inputs.length > 0) {
      if (window.File && window.FileList && window.FileReader) {
        getFilesFromInputs(inputs.toArray(), (files) => {
          let data = Object.assign({}, mainFields, {
            multiFilesUpload: files,
            customFields: customFields
          });
          handleSend(data, url);
        });
      } else {
        this._form.submit();
      }

    } else {
      let data = Object.assign({}, mainFields, {
        customFields: customFields
      });

      handleSend(data, url);

    }


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
        //this.refs['ticket-form'].submit();
        this.onTicketCreate();
      }
    });
  },

  render: function () {
    return (
      <div>
        <form id="create-ticket-form" ref={(c) => this._form = c} action={this.props.formAction}  method="POST" name="createTicket" onSubmit={this.onFormSubmit} encType="multipart/form-data">
          <div ref="modal-body" className="modal-body scrollbar-macosx scrollbar-popup">
            <div id="error-message-block">
              {this.props.errorMessage && <ErrorMessage errors={this.props.errorMessage} />}
            </div>
            <div className="row nomargin">
              <div className="col-xs-12">
                <div className="row">
                  <div className="col-xs-6" >
                    <div className="form-group">
                      <label>{this.props.labels.requester}</label>
                      <p><b>{this.props.requester.name}</b></p>
                    </div>
                  </div>
                  <input type="hidden" value={this.state.currentInstance.staff_id} name="staff_id" />
                  <TokenContainer name={Constant.token} token={this.props.formValues[Constant.token]} />
                  <TokenContainer name={Constant.tokenData} token={this.props.formValues[Constant.tokenData]} />
                  <SelectField onChange={this.setCurrentInstance}
                               label={this.props.labels.instance}
                               options={this.props.instances}
                               name="instance_id"
                               optionValue="instance_id"
                               optionName="instance_url"
                               selectedDefault={this.state.currentInstance.instance_id}
                  />
                </div>
                <div className="row">

                  <SelectField onChange={this.setInbox}
                               label={this.props.labels.inbox}
                               options={this.state.currentInboxes}
                               name="inbox_id"
                               selectedDefault={this.state.currentInbox.id}
                  />

                  <SelectField label={this.props.labels.assignee}
                               options={this.state.currentInbox.assigneeList}
                               name="assignee"
                               selectedDefault={this.state.currentInbox.defaultAssignee}
                  />

                  <SelectField label={this.props.labels.priority}
                               options={this.props.priorities}
                               name="priority_id"
                               selectedDefault={Object.keys(this.props.formValues).length === 0 ? "3" : this.props.formValues.priority_id}
                  />

                  <CustomFieldsContainer isSubmitting={this.state.isSubmitting}
                                         errors={this.state.errors}
                                         fields={this.state.currentInbox.customFields} />

                  <ModalContentFooter labels={this.props.labels}
                                      isSubmitting={this.state.isSubmitting}
                                      errors={this.state.errors}
                                      subjectDefault={this.props.formValues.subject}
                                      descriptionDefault={this.props.formValues.description}
                                      notifyCustomerDefault={Object.keys(this.props.formValues).length === 0 ? true : this.props.formValues.notifyCustomer}
                  />

                </div>
              </div>
            </div>
          </div>
          <ModalFooterButtons labels={this.props.labels} />
        </form>
      </div>
    );
  }
});

module.exports = ModalContent;
