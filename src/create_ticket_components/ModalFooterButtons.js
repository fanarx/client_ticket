var React = require('react');

function ModalFooterButtons ({labels}) {
  return (
    <div className="modal-footer">
      <button type="submit" className="btn btn-blue button-save">{labels.create}</button>
    </div>
  );
}

ModalFooterButtons.propTypes = {
  labels: React.PropTypes.object.isRequired,
};

module.exports = ModalFooterButtons;
