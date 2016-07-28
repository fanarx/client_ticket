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
        <FilterColumn dataSource={ this.props.dataSource }
                      key={column.field}
                      onFilterChange={this.props.onFilterChange}
                      options={column.options ? column.options : this.props.dataSource.getListByField(column.field) }
                      colSize={column.colSize}
                      field={column.field}
                      disableAutocomplete={column.disableAutocomplete}
                      type={column.filterType}/>);
    }.bind(this));

    return (
      <div className="filter-place clearfix">
        { columns }
      </div>
    );
  }
});


module.exports = FilterRow;
