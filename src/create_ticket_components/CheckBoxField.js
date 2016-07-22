var React = require('react');

const CheckBoxField = React.createClass({

  getInitialState() {
    if (this.props.checked === undefined) {
      return {
        isChecked: false
      }
    }
    return {
      isChecked: true
    }
  },

  propTypes: {
    name: React.PropTypes.string.isRequired,
    label: React.PropTypes.string.isRequired,
    checked: React.PropTypes.any
  },

  handleClick() {
    this._checkbox.click();
  },

  handleChange() {
    this.setState({
      isChecked: !this.state.isChecked
    });
  },

  render(){
    var checkBoxClass = "checkbox-icon " + ((this.state.isChecked) ? 'checked' : 'unchecked');

    return (
      <div className="col-md-12">
        <div id="check-tick" onClick={this.handleClick} className={checkBoxClass}></div>
        <input onChange={this.handleChange} name={this.props.name} ref={(c) => this._checkbox = c} className="checkbox-input" type="checkbox" checked={this.state.isChecked} />
        <label onClick={this.handleClick}>Send Email Notification to Client</label>
      </div>
    );
  }
});

module.exports = CheckBoxField;
