var React = require('react');

var ModalFooter = React.createClass({

  propTypes: {
    translations: React.PropTypes.object.isRequired
  },

  render: function () {
    return (
      <div className="modal-footer">
        <button type="submit" className="btn btn-blue button-close"
                data-dismiss="modal">{this.props.translations.close}</button>
      </div>
    );
  }
});


module.exports = ModalFooter;
