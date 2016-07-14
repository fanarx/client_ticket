var React = require('react');
const ModalHeader = require('./ModalHeader');
const ModalContent = require('./ModalContent');


function ModalBox ({title, instances, requester, priorities, labels, errorMessage}) {
  return (
    <div className="modal-dialog modal-450">
      <div className="modal-content">
        <div id="ticket-create" className="popup ticket-create">
          <ModalHeader title={title} />
          <ModalContent labels={labels} instances={instances} requester={requester} priorities={priorities} errorMessage={errorMessage} />
        </div>
      </div>
    </div>
  );
}

ModalBox.propTypes = {
  title: React.PropTypes.string.isRequired,
  instances: React.PropTypes.array.isRequired,
  requester: React.PropTypes.object.isRequired,
  priorities: React.PropTypes.array.isRequired,
  labels: React.PropTypes.object.isRequired,
  errorMessage: React.PropTypes.string
};

module.exports = ModalBox;