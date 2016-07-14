var React = require('react');
const SortableColumn = require('./SortableColumn');

var SortableRow = React.createClass({

  propTypes: {
    dataSource: React.PropTypes.object.isRequired,
    columns: React.PropTypes.array.isRequired,
    onSortChange: React.PropTypes.func.isRequired,
  },

  render: function () {
    var columns = this.props.columns.map(function (column) {
      return (
        <SortableColumn key={column.field} onSortChange={this.props.onSortChange} colSize={column.colSize} field={column.field} title={column.title}/>);
    }.bind(this));

    return (
      <div className="staff-grid-header clearfix">
        <div className="staff-grid-header-responsive">
          { columns }
        </div>
      </div>
    );
  }
});


module.exports = SortableRow;
