var React = require('react');

var SortableColumn = React.createClass({

  propTypes: {
    field: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    colSize: React.PropTypes.number.isRequired,
    onSortChange: React.PropTypes.func.isRequired
  },

  getInitialState: function () {
    return {
      orderType: this.props.orderType || false
    }
  },

  handleChange: function () {
    this.setState({orderType: !this.state.orderType});
    
    this.props.onSortChange(this.props.field, this.state.orderType);
  },

  render: function () {
    var colSize = this.props.colSize;
    var mainClassName = 'col-lg-' + colSize + ' col-md-' + colSize + ' col-sm-' + colSize + ' col-xs-' + colSize + ' nopadding';

    var orderIconClassName = this.state.orderType ? ' rotate-180' : '';
    orderIconClassName += orderIconClassName + ' grid-sort-ico';

    return (
      <div className={mainClassName}>
        <div className="grid-header grid-col-header" onClick={ this.handleChange }>
          <span className="grid-header-title">{this.props.title}</span>
          <div className={orderIconClassName}></div>
        </div>
      </div>
    );
  }
});


module.exports = SortableColumn;
