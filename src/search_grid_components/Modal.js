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


    function onResize(){
      var calculatedModalBodyHeight = $( window ).height() - 70;
      if(calculatedModalBodyHeight < 490){
        calculatedModalBodyHeight = 490;
      }
      $('#search-grid .modal-body').css( 'height',  calculatedModalBodyHeight+ 'px' );

      var gridSize = calculatedModalBodyHeight - $('#search-grid .filter-place').height() - $('#search-grid .staff-grid-header').height() - 30;

      $('#search-grid .staff-table').height(gridSize);
    }
    $( window ).resize(onResize);
    onResize();
  },

  render: function () {
    return (
      <div className="modal" id={this.props.id} role="dialog">
        <div className="modal-dialog modal-fluid">
          <div className="modal-content">
            <ModalHeader translations={this.props.translations} />

            <ModalBody columns={this.props.columns} dataSource={ this.props.dataSource } />
          </div>
        </div>
      </div>
    )
  }
});


module.exports = Modal;
