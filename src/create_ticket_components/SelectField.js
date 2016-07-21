var React = require('react');

function SelectField ({label, options, onChange, optionValue, optionName, name, selectedDefault}) {

  const optionsData = options.map((option, idx) => {

      if (idx == 0 && selectedDefault === undefined) {
          return (<option selected key={option[optionValue]} value={option[optionValue]}>{option[optionName]}</option>);
      } else {
        return (selectedDefault == option[optionValue]) ? (<option selected key={option[optionValue]} value={option[optionValue]}>{option[optionName]}</option>)
                                                        : (<option key={option[optionValue]} value={option[optionValue]}>{option[optionName]}</option>);
      }
  });

  return (
    <div className="col-xs-6 custom-field" >
      <div className="form-group">
        <label htmlFor={name} >{label}</label>
        <select onChange={onChange} className="form-control" id={name} name={name}>
          {optionsData}
        </select>
      </div>
    </div>
  );
}

SelectField.propTypes = {
  onChange: React.PropTypes.func,
  label: React.PropTypes.string.isRequired,
  options: React.PropTypes.array.isRequired,
  name: React.PropTypes.string.isRequired,
  optionValue: React.PropTypes.string.isRequired,
  optionName: React.PropTypes.string.isRequired,
};

SelectField.defaultProps = {
  optionValue: 'id',
  optionName: 'name'
};


module.exports = SelectField;
