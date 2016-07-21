var React = require('react');

function MessageBody ({message}) {
  return (
    <div className="modal-body">
      <div dangerouslySetInnerHTML={{__html: message}}></div>
    </div>
  );
}

MessageBody.propTypes = {
  message: React.PropTypes.string.isRequired
};

module.exports = MessageBody;
