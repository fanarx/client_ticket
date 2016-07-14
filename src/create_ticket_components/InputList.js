var React = require('react');

const InputList = React.createClass({
  propTypes: {
    inputs: React.PropTypes.array.isRequired,
    inputLabels: React.PropTypes.object.isRequired,
    onFileRemove: React.PropTypes.func.isRequired,
    onChange: React.PropTypes.func.isRequired
  },

  render: function () {
    var _this = this;
    let inputs = this.props.inputs.map(input =>
      <input className="invisible-input" name={"multiFilesUpload["+ input +"]"} ref={input} onChange={(evt) => this.props.onChange(evt, input)} type="file" data-id={input} key={input} multiple />
    );

    let inputLabels = _this.props.inputs.map(input => {
      var labelNames = _this.props.inputLabels[input];
        if (labelNames) {
          if ($.isArray(labelNames)) {
            return <span key={input} className="label label-default">{labelNames.join(' | ')} <i data-item={input} style={{cursor: 'pointer'}} onClick={_this.props.onFileRemove.bind(null, input)}> X </i></span>;
          } else {
            return  <span key={input} className="label label-default">{this.props.inputLabels[input]} <i data-item={input} style={{cursor: 'pointer'}} onClick={_this.props.onFileRemove.bind(null, input)}> X </i></span>;
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
      </div>
    );
  }

});

module.exports = InputList;
