var React = require('react');

const MessageFooter = React.createClass({

  propTypes: {
    onClose: React.PropTypes.func.isRequired
  },

  componentDidMount: function () {
    jQuery(".btn").corner('15px');
  },

  render(){

    var buttonStyle = {
      paddingLeft: '15px',
      paddingRight: '15px',
      paddingTop: '10px',
      paddingBottom: '10px'
    };

    return (
      <div className="modal-footer">
        <button style={buttonStyle} onClick={this.props.onClose} type="button" className="btn btn-blue">Close</button>
      </div>
    );
  }
});

module.exports = MessageFooter;
