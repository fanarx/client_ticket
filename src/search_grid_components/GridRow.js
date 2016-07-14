var React = require('react');


var GridRow = React.createClass({

  propTypes: {

  },

  render: function () {

    return (
      <div className="grid-row clearfix">
        <div className="grid-row-responsive grid-last-row">
          {this.props.children }
        </div>
      </div>
    );
  }
});

module.exports = GridRow;
