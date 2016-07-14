var React = require('react');

function ModalFooterButtons () {
  return (
    <div className="modal-footer">
      <button type="submit" className="btn btn-blue button-save">Create</button>
      <button type="button" className="btn btn-default button-close">Cancel</button>
    </div>
  );
}

ModalFooterButtons.propTypes = {

};

module.exports = ModalFooterButtons;
