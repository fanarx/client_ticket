var React = require('react');

function MessageHeader ({title, onClose}) {
  return (
    <div className="modal-header">
      <button onClick={onClose} type="button" className="close">&times;</button>
      <div className="title">
        <h4>{title}</h4>
      </div>
    </div>
  );
}

MessageHeader.propTypes = {
  title: React.PropTypes.string.isRequired,
  onClose: React.PropTypes.func.isRequired
};

module.exports = MessageHeader;
