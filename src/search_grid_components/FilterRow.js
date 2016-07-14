var React = require('react');
const FilterColumn = require('./FilterColumn');


var FilterRow = React.createClass({

  propTypes: {
    columns: React.PropTypes.array.isRequired,
    onFilterChange: React.PropTypes.func.isRequired
  },

  render: function () {

    var columns = this.props.columns.map(function (column) {
      return (
        <FilterColumn key={column.field} onFilterChange={this.props.onFilterChange} options={column.options ? column.options : []}
                      colSize={column.colSize} field={column.field} type={column.filterType}/>);
    }.bind(this));

    return (
      <div className="filter-place clearfix">
        { columns }
      </div>
    );
  }
});


module.exports = FilterRow;
