const React = require('react');
const ReactDOM = require('react-dom');
const InputList = require('./InputList');
const newId = require('../../utils/newId');

const InputFileContainer = React.createClass({

  getInitialState: function () {
    return {
      inputs: [],
      inputLabels: {},
      filesSize: 0,
      message: ""
    }
  },

  propTypes: {
    errors: React.PropTypes.object.isRequired,
    errorMessage: React.PropTypes.string.isRequired
  },

  getIE8FileSize: function (inputId) {
    var objFSO = new ActiveXObject("Scripting.FileSystemObject");
    var filePath = $("#" + inputId)[0].value;

    var objFile = objFSO.getFile(filePath);
    var fileSize = objFile.size; //size in kb

    return fileSize;
  },

  onIE8Change: function (input) {
    var _this = this;
    input.attachEvent && input.attachEvent('onchange', function (e) {

      var inputId = $(e.srcElement).data('id');

      var splitted = e.srcElement.value.split('\\');
      var fileName = splitted[splitted.length - 1];
      var fileSize = _this.getIE8FileSize(inputId);

      if (_this.state.inputs.indexOf(inputId) > -1) {
        _this.processFile(fileName, inputId, fileSize);
      }

    });
  },

  addInput: function (e) {
    var newInput = `input-${newId()}`;
    this.setState({
      inputs: [...this.state.inputs, newInput]
    }, function () {

      var input = ReactDOM.findDOMNode(this.refs['input-list'].refs[newInput]);

      this.onIE8Change(input);

      input.click();

    });
  },

  handleFileRemove: function (inputID) {

    var newInputs = this.state.inputs.filter(input => input !== inputID);

    let removeInputSize = this.state.inputLabels[inputID].fileSize;

    this.setState({
      inputs: newInputs,
      filesSize: this.state.filesSize - removeInputSize,
      message: ""
    });
  },

  handleChange: function (e, inputId) {

    var input = ReactDOM.findDOMNode(this.refs['input-list'].refs[inputId]);

    var addedInputSize = 0;

    if (input.files) {
      var fileArray = [];
      for (let i = 0; i < input.files.length; ++i) {
        addedInputSize += input.files[i].size;
        fileArray.push(input.files[i].name);
      }

      this.processFile(fileArray, inputId, addedInputSize);

    } else {

      var splitted = e.target.value.split('\\');
      addedInputSize += e.target.files[0].size;
      var fileName = splitted[splitted.length - 1];

      if (this.state.inputs.indexOf(inputId) > -1) {
        this.processFile(fileName, inputId, addedInputSize);
      }

    }
  },

  processFile: function (inputName, inputId, inputSize) {
    if (this.state.filesSize + inputSize > 5 * 1024 * 1024) {
      this.setState({
        message: this.props.errorMessage,
        inputs: this.state.inputs.filter(input => input !== inputId)
      })
    } else {
      var newLabels = Object.assign({}, this.state.inputLabels, {[inputId]: {
        fileName: inputName,
        fileSize: inputSize
      }});

      this.setState({
        inputLabels: newLabels,
        filesSize: this.state.filesSize + inputSize,
        message: ""
      });
    }
  },

  render: function () {
    return (
      <div className="col-xs-12">
        <div className="row">
          <div className="attachment-button">
            <div className="reply-attachment" style={{paddingBottom: '15px', paddingTop: '10px'}}>
              <button type="button" onClick={this.addInput} className="btn btn-white btn-reply-attachment"></button>
            </div>
          </div>
          <div className="input-list">
            <InputList ref="input-list"
                       inputs={this.state.inputs}
                       inputLabels={this.state.inputLabels}
                       onFileRemove={this.handleFileRemove}
                       onChange={this.handleChange}
                       errors={this.props.errors}
            />
          </div>
        </div>
        <div><span style={{color: '#b94a48'}}>{this.state.message}</span></div>
      </div>
    );
  }

});

module.exports = InputFileContainer;
