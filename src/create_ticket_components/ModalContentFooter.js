var React = require('react');
const InputField = require('./InputField');
const InputFileContainer = require('./InputFileContainer');
const CheckBoxField = require('./CheckBoxField');

var ModalContentFooter = React.createClass({

  propTypes : {
    labels: React.PropTypes.object.isRequired,
    isSubmitting: React.PropTypes.bool.isRequired,
    errors: React.PropTypes.object.isRequired,
    subjectDefault: React.PropTypes.string,
    descriptionDefault: React.PropTypes.string,
    notifyCustomerDefault: React.PropTypes.any
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

        <InputFileContainer errors={this.props.errors} errorMessage={this.props.labels.uploadError}/>

        <CheckBoxField checked={this.props.notifyCustomerDefault} name="notifyCustomer" label={this.props.labels.notify} />

      </div>
    );
  }
});

module.exports = ModalContentFooter;
