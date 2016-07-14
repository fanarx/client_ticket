var React = require('react');
const FilterRow = require('./FilterRow');
const SortableRow = require('./SortableRow');
const Grid = require('./Grid');

var ModalBody = React.createClass({

  propTypes: {
    dataSource: React.PropTypes.object.isRequired,
    columns: React.PropTypes.array.isRequired,
  },

  getInitialState: function () {
    return {
      filters: {},
      sort: {}
    }
  },

  onFilterChange: function (field, value) {
    var filters = this.state.filters;
    filters[field] = value;
    this.setState({filters: filters});
  },

  onSortChange: function (field, orderType) {
    var sort = this.state.sort;
    sort.field = field;
    sort.orderType = orderType;

    this.setState({sort: sort});
  },

  render: function () {

    return (
      <div className="modal-body">
        <div className="col-lg-12 grid grid-full-height">
          <FilterRow dataSource={ this.props.dataSource } columns={this.props.columns}
                     onFilterChange={ this.onFilterChange } />

          <SortableRow dataSource={ this.props.dataSource } columns={this.props.columns}
                       onSortChange={ this.onSortChange } />

          <Grid sort={this.state.sort} filters={this.state.filters} columns={this.props.columns}
                dataSource={ this.props.dataSource }
                tickets={this.props.dataSource.getTicketsFiltered()} />
        </div>
      </div>
    );
  }
});

module.exports = ModalBody;
