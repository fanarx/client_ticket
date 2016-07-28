var React = require('react');

var OpenerBtn = React.createClass({

  contextTypes: {
    translations: React.PropTypes.object
  },

  propTypes: {
    selecteds: React.PropTypes.array.isRequired,
    onClick: React.PropTypes.func.isRequired
  },

  render: function () {
    var selectedItems = this.props.selecteds;

    var buttonText = this.context.translations.all;
    if(selectedItems.length ){
      if(selectedItems.length == this.props.options.length){
        buttonText = this.context.translations.all;
      }else{
        buttonText = selectedItems.length + (' ' + this.context.translations.selected);
      }
    }

    return (
      <button type="button" onClick={this.props.onClick} className="btn btn-default dropdown-toggle">
        {buttonText} <span className="caret"></span>
      </button>
    );
  }
});

module.exports = OpenerBtn;
