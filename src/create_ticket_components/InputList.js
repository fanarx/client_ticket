var React = require('react');

const InputList = React.createClass({
  propTypes: {
    inputs: React.PropTypes.array.isRequired,
    inputLabels: React.PropTypes.object.isRequired,
    onFileRemove: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired,
    errors: React.PropTypes.object.isRequired
  },

  render: function () {
    var _this = this;
    let inputs = this.props.inputs.map(input =>
      <input id={input} className="invisible-input" name={"multiFilesUpload[]"} ref={input} onChange={(evt) => this.props.onChange(evt, input)} type="file" data-id={input} key={input} multiple />
    );

    let inputLabels = _this.props.inputs.map(input => {
      var labelNames = _this.props.inputLabels[input] && _this.props.inputLabels[input].fileName;
        if (labelNames) {
          if ($.isArray(labelNames)) {
            return <span key={input} className="label label-default">{labelNames.join(' | ')} <i data-item={input} style={{cursor: 'pointer'}} onClick={_this.props.onFileRemove.bind(null, input)}> X </i></span>;
          } else {
            return  <span key={input} className="label label-default">{this.props.inputLabels[input].fileName} <i data-item={input} style={{cursor: 'pointer'}} onClick={_this.props.onFileRemove.bind(null, input)}> X </i></span>;
          }

        }
      }
    );

    if (inputs.length > 0) {
      var labelBox = <div className="well">
        {inputLabels}
      </div>;
    }

    return (
      <div>
        {inputs}
        {labelBox}
        <span style={{color: '#b94a48'}}>{this.props.errors.filesSize}</span>
      </div>
    );
  }

});

module.exports = InputList;
