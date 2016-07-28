var React = require('react');

function ModalFooterButtons ({isDisabled, labels}) {
  return (
    <div className="modal-footer">
      <button disabled={isDisabled} type="submit" className="btn btn-blue button-save">{labels.create}</button>
    </div>
  );
}

ModalFooterButtons.propTypes = {
  labels: React.PropTypes.object.isRequired,
  isDisabled: React.PropTypes.bool.isRequired
};

module.exports = ModalFooterButtons;
