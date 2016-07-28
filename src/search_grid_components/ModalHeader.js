var React = require('react');


var ModalHeader = React.createClass({

  propTypes: {
    translations: React.PropTypes.object.isRequired
  },

  render: function () {
    return (
      <div className="modal-header">
        {/*<button type="button" className="close" data-dismiss="modal">×</button>*/}
        <div className="title">
          <h4>{this.props.translations.modal_title}</h4>
        </div>
      </div>
    );
  }
});


module.exports = ModalHeader;
