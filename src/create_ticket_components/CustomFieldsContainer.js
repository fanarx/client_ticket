var React = require('react');
const SelectField = require('./SelectField');
const InputField = require('./InputField');

const CustomFieldsContainer = React.createClass({

  propTypes: {
    isSubmitting: React.PropTypes.bool.isRequired,
    errors: React.PropTypes.object.isRequired,
    fields: React.PropTypes.array.isRequired
  },

  render: function () {

    var fields = this.props.fields.map((field) => {
      if (field.type == 1) {
          return(
            <InputField val={field.value}
                        onChange={this.props.onChange}
                        name={"customFields["+field.id+"]"}
                        isSubmitting={this.props.isSubmitting}
                        errors={this.props.errors}
                        key={field.id}
                        label={field.name}
                        required={field.required}
            />
          );
      } else if (field.type == 2) {
        var options = field.options.split(',');
        var selectOptions = options.map((option) => {
          return {
            id: option,
            name: option
          }
        });
        return <SelectField onChange={this.props.onChange} name={"customFields["+field.id+"]"} key={field.id} label={field.name}  options={selectOptions} />;
      }
    });

    return (
      <div>
        {fields}
      </div>
    );
  }
});

module.exports = CustomFieldsContainer;
