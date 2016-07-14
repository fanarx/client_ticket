var React = require('react');


const InputField = React.createClass({

  getInitialState: function () {
    return {
      isFieldTouched: false,
      isFormEmpty: !(this.props.val),
      isFormValid: true,
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
        isFormValid: /^(?![\\s\\S]*?(&#|,\\\\\\\\n))(^[^\'\"]*$)[\\s\\S]*$/.test(trimmedVal)
      })
    }

  },

  render: function () {
    //var errorMessage = "";
    delete this.props.errors[this.props.label];
    var formClass = "form-group";
    var inputSizeClass = this.props.size === 'md' ? "col-md-12" : "col-xs-6";
    var inputType = this.props.type === 'textarea' ? (<textarea onBlur={this.handleInput} onChange={this.handleInput} className="form-control" id={this.props.label} name={this.props.name}></textarea>)
                                        : (<input onBlur={this.handleInput} onChange={this.handleInput} className="form-control" id={this.props.label} name={this.props.name} value={this.state.inputVal} />);
    var requiredSpan = (this.props.required == 1) ? (<span>*</span>) : "";

    if (this.state.isFieldTouched) {

      if (this.props.required && this.state.isFormEmpty) {
        formClass += "has-error";

        this.props.errors[this.props.label] = this.context.errors.required;
      } else if (!this.state.isFormEmpty && !this.state.isFormValid) {
        formClass += "has-error";
        this.props.errors[this.props.label] = this.context.errors.invalid_chars;
      } else {
       // delete this.props.errors[this.props.label];
      }

    }


    return (
      <div className={inputSizeClass} >
        <div className={formClass}>
          <label forName={this.props.label} >{this.props.label}</label>
          {requiredSpan}
          {inputType}
          <span style={{color: '#b94a48'}}>{this.props.errors[this.props.label]}</span>
        </div>
      </div>
    );
  }
});

module.exports = InputField;
