var React = require('react');
const InputField = require('./InputField');
const InputFileContainer = require('./InputFileContainer');

var ModalContentFooter = React.createClass({

  propTypes : {
    labels: React.PropTypes.object.isRequired,
    isSubmitting: React.PropTypes.bool.isRequired,
    errors: React.PropTypes.object.isRequired,
    subjectDefault: React.PropTypes.string,
    descriptionDefault: React.PropTypes.string,
    notifyCustomerDefault: React.PropTypes.string
  },

  getInitialState: function() {
    if (this.props.notifyCustomerDefault) {
      return {
        isSendEmailChecked: true
      };
    }
    return {
      isSendEmailChecked: false
    };
  },

  handleCheckClick: function (e) {
      this.refs['checkbox-input'].click();

      this.setState({
        isSendEmailChecked: !this.state.isSendEmailChecked
      });
  },

  render: function () {

    var checkBoxClass = "checkbox-icon " + ((this.state.isSendEmailChecked) ? 'checked' : 'unchecked');



    return (
      <div>

        <InputField name="subject"
                    size="md"
                    isSubmitting={this.props.isSubmitting}
                    errors={this.props.errors}
                    label={this.props.labels.subject}
                    required={1}
                    val={this.props.subjectDefault}
        />

        <InputField name="description"
                    size="md"
                    type="textarea"
                    isSubmitting={this.props.isSubmitting}
                    errors={this.props.errors}
                    label={this.props.labels.description}
                    required={1}
                    val={this.props.descriptionDefault}
        />

        <InputFileContainer errors={this.props.errors} />

        <div className="col-md-12">
            <div id="check-tick" onClick={this.handleCheckClick} className={checkBoxClass}></div>
            <input name="notifyCustomer" ref="checkbox-input" className="checkbox-input" type="checkbox" defaultChecked={this.state.isSendEmailChecked} />
            <label onClick={this.handleCheckClick}>Send Email Notification to Client</label>
        </div>

      </div>
    );
  }
});

module.exports = ModalContentFooter;
