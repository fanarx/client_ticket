var React = require('react');
const ModalHeader = require('./ModalHeader');
const ModalBody = require('./ModalBody');
const ModalFooter = require('./ModalFooter');

var Modal = React.createClass({

  childContextTypes: {
    translations: React.PropTypes.object
  },

  getChildContext: function () {
    return {translations: this.props.translations}
  },

  propTypes: {
    dataSource: React.PropTypes.object.isRequired,
    translations: React.PropTypes.object.isRequired,
    columns: React.PropTypes.array.isRequired,
  },

  componentDidMount: function () {
    jQuery(".btn-blue").corner('15px');
  },

  render: function () {
    return (
      <div className="modal" id={this.props.id} role="dialog">
        <div className="modal-dialog modal-fluid">
          <div className="modal-content">
            <ModalHeader translations={this.props.translations} />

            <ModalBody columns={this.props.columns} dataSource={ this.props.dataSource } />

            <ModalFooter translations={this.props.translations} />
          </div>
        </div>
      </div>
    )
  }
});


module.exports = Modal;
