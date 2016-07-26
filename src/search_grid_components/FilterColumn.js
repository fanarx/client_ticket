var React = require('react');
const DropDown = require('./DropDown');
const InputAutocomplete = require('./InputAutocomplete');

var FilterColumn = React.createClass({

  propTypes: {
    options: React.PropTypes.array.isRequired,
    colSize: React.PropTypes.number.isRequired,
    type: React.PropTypes.string.isRequired,
    field: React.PropTypes.string.isRequired,
    onFilterChange: React.PropTypes.func.isRequired,
  },

  contextTypes: {
    translations: React.PropTypes.object
  },

  handleChange: function () {
    var value = this.refs.filterInput.value;
    this.props.onFilterChange(this.props.field, value);
  },

  render: function () {
    var colSize = this.props.colSize;
    var mainClassName = 'col-lg-' + colSize + ' col-md-' + colSize + ' col-sm-' + colSize + ' col-xs-' + colSize + ' nopadding';

    var html = (<div className={mainClassName}></div>);
    switch (this.props.type) {
      case 'empty': {  break; }
      case 'textbox':
      {
        if(this.props.disableAutocomplete ){
          html = (
              <div className={mainClassName}>
                <div className="filter-item">
                  <input ref="filterInput"
                       onChange={ this.handleChange }
                       type="text" className="form-control filter-input"
                       placeholder={this.context.translations.all}
                  />
                </div>
              </div>);
        }else{
          html = (
              <div className={mainClassName}>
                <InputAutocomplete options={this.props.options} field={this.props.field} onFilterChange={this.props.onFilterChange} ></InputAutocomplete>
              </div>
          );
        }
        break;
      }
      case 'multiselect':
      {
        html = (
          <div className={mainClassName}>
            <DropDown options={this.props.options} field={this.props.field} onFilterChange={this.props.onFilterChange}/>
          </div>
        );
        break;
      }
      default: { break; }
    }

    return html;
  }
});


module.exports = FilterColumn;
