var React = require('react');

var DropList = React.createClass({

  propTypes: {
    selecteds: React.PropTypes.array.isRequired,
    options: React.PropTypes.array.isRequired,
    opened: React.PropTypes.bool.isRequired,
    handleItemClick: React.PropTypes.func.isRequired
  },

  render: function () {
    var options = this.props.options;

    var isShown = this.props.opened ? 'opened' : 'closed';
    var selectedItems = this.props.selecteds;

    return (
      <ul className={'dropdown-menu ' + isShown}>
        { options.map(function (value) {
          var isActive = (selectedItems.indexOf(value.id) !== -1) ? 'glyphicon-ok' : 'empty';
          return (
            <li onClick={this.props.handleItemClick.bind(null, value.id)} key={value.id}>
              <a className="dropdown-element"> <i className={'glyphicon '+ isActive}></i> {value.name}
              </a>
            </li>
          )
        }, this) }
      </ul>
    );
  }
});


module.exports = DropList;
