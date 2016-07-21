var React = require('react');

function MessageFooter ({onClose}) {
  return (
    <div className="modal-footer">
      <button onClick={onClose} type="button" className="btn btn-default">Close</button>
    </div>
  );
}

MessageFooter.propTypes = {
  onClose: React.PropTypes.func.isRequired
};

module.exports = MessageFooter;
