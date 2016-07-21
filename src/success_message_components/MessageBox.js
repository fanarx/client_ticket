var React = require('react');
const MessageHeader = require('./MessageHeader');
const MessageBody = require('./MessageBody');
const MessageFooter = require('./MessageFooter');


const MessageBox = React.createClass({

  propTypes: {
    message: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired
  },

  handleClose() {
    console.log('closing ...');
  },

  render() {
    return (
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="popup success-message">
            <MessageHeader title={this.props.title} onClose={this.handleClose} />
            <MessageBody message={this.props.message} />
            <MessageFooter onClose={this.handleClose} />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = MessageBox;
