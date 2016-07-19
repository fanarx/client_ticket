var React = require('react');


const InputField = React.createClass({

  getInitialState: function () {
    return {
      isFieldTouched: false,
      isFormEmpty: !(this.props.val),
      isFormValid: true,
      isLessThan4: this.props.val.length < 4,
      inputVal: this.props.val
    }
  },

  propTypes: {
    val: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func,
    name: React.PropTypes.string.isRequired,
    isSubmitting: React.PropTypes.bool.isRequired,
    errors: React.PropTypes.object.isRequired,
    label: React.PropTypes.string.isRequired,
    required: React.PropTypes.number.isRequired,
    type: React.PropTypes.string.isRequired,
    size: React.PropTypes.string.isRequired
  },

  getDefaultProps: function () {
    return {
      size: "xs",
      type: "input",
      val: ""
    }
  },

  contextTypes: {
    errors: React.PropTypes.object
  },

  componentWillReceiveProps: function(nextProps) {
    this.setState({
      isFieldTouched: nextProps.isSubmitting
    });
  },

  validate: function () {
    var errors = {};

    if (this.state.inputVal.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '') === "") {
      errors[this.props.label] = this.context.errors.required
    }

    if (/^(?![\\s\\S]*?(&#|,\\\\\\\\n))(^[^\'\"]*$)[\\s\\S]*$/.test(this.state.inputVal)) {
      errors[this.props.label] = this.context.errors.invalid_chars;
    }

    return errors;
  },

  handleInput: function (e) {
    //this.props.onChange(e);
    var inputVal = e.target.value;
    //console.log('inputVal', inputVal);
    var trimmedVal = inputVal.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');

    this.setState({
      isFieldTouched: true,
      inputVal: inputVal
    });

    if (trimmedVal === "") {
      this.setState({
        isFormEmpty: true
      })
    } else {

      this.setState({
        isFormEmpty: false,
        isFormValid: /^(?![\\s\\S]*?(&#|,\\\\\\\\n))(^[^\'\"]*$)[\\s\\S]*$/.test(trimmedVal),
        isLessThan4: trimmedVal.length < 4
      })
    }

  },

  isSubjectORDescription: function () {
    return this.props.name === 'subject' || this.props.name === 'description';
  },

  render: function () {
    //var errorMessage = "";
    delete this.props.errors[this.props.label];
    var formClass = "form-group ";
    var inputSizeClass = this.props.size === 'md' ? "col-md-12" : "col-xs-6";
    var inputType = this.props.type === 'textarea' ? (<textarea onBlur={this.handleInput} onChange={this.handleInput} className="form-control" id={this.props.label} name={this.props.name} value={this.state.inputVal}></textarea>)
                                        : (<input onBlur={this.handleInput} onChange={this.handleInput} className="form-control" id={this.props.label} name={this.props.name} value={this.state.inputVal} />);
    var requiredSpan = (this.props.required == 1) ? (<span>*</span>) : "";

    if (this.state.isFieldTouched) {

      if (this.props.required && this.state.isFormEmpty) {

        formClass += "has-error";
        this.props.errors[this.props.label] = this.context.errors.required;

      } else if (!this.state.isFormEmpty && !this.state.isFormValid) {

        formClass += "has-error";
        this.props.errors[this.props.label] = this.context.errors.invalid_chars;

      } else if (!this.state.isFormEmpty && this.state.isLessThan4 && this.isSubjectORDescription()) {

        formClass += "has-error";
        this.props.errors[this.props.label] = this.context.errors.atLeast4Chars;
      }

    }

    return (
      <div className={inputSizeClass} >
        <div className={formClass}>
          <label htmlFor={this.props.label} >{this.props.label}</label>
          {requiredSpan}
          {inputType}
          <span style={{color: '#b94a48'}}>{this.props.errors[this.props.label]}</span>
        </div>
      </div>
    );
  }
});

module.exports = InputField;
