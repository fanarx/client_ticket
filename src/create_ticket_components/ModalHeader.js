var React = require('react');

function ModalHeader ({title}) {
  return (
    <div className="modal-header">
      <button type="button" className="close" data-dismiss="modal">&times;</button>
      <div className="title">
        <h4>{title}</h4>
      </div>
    </div>
  );
}

ModalHeader.propTypes = {
  title: React.PropTypes.string.isRequired
};

module.exports = ModalHeader;
