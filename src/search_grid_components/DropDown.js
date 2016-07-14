
var React = require('react');
const OpenerBtn = require('./OpenerBtn');
const DropList = require('./DropList');

var DropDown = React.createClass({

  propTypes: {
    options: React.PropTypes.array.isRequired,
    field: React.PropTypes.string.isRequired,
    onFilterChange: React.PropTypes.func.isRequired
  },

  componentDidMount: function () {
    $('body').on('click', this.resetDropdown);
  },

  resetDropdown: function (e) {

    var openerBtnNotClicked = !$(e.target).hasClass('dropdown-toggle') && !$(e.target).parent(".dropdown-toggle").length;
    var dropDwonElementNotClicked = !$(e.target).hasClass('dropdown-element') && !$(e.target).parent(".dropdown-element").length;

    if (openerBtnNotClicked && dropDwonElementNotClicked) {
      this.setState({opened: false});
    }
  },

  getInitialState: function () {
    var state = {
      opened: false,
    };
    state.selectedItems = [];
    return state;
  },
  toggleButton: function () {
    this.setState({opened: !this.state.opened})
  },
  itemClick: function (id) {
    var selecteds = this.state.selectedItems;
    var index = selecteds.indexOf(id);
    if (index === -1) {
      selecteds.push(id);
    } else {
      selecteds.splice(index, 1);
    }
    this.setState({selectedItems: selecteds});

    this.props.onFilterChange(this.props.field, selecteds);
  },

  render: function () {
    var options = this.props.options;

    return (
      <div className="filter-item">
        <div className="multiple-filter-select">
          <div className="btn-group">
            <OpenerBtn onClick={this.toggleButton} selecteds={this.state.selectedItems}> </OpenerBtn>
            <DropList handleItemClick={this.itemClick} selecteds={this.state.selectedItems}
                      options={this.props.options} opened={this.state.opened}></DropList>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = DropDown;
