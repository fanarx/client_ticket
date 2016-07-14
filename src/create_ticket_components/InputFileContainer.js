const React = require('react');
const ReactDOM = require('react-dom');
const InputList = require('./InputList');
const newId = require('../../utils/newId');

const InputFileContainer = React.createClass({

  getInitialState: function () {
    return {
      inputs: [],
      inputLabels: {}
    }
  },

  onIE8Change: function (input) {
    var _this = this;
    input.attachEvent && input.attachEvent('onchange', function (e) {

      var inputId = $(e.srcElement).data('id');

      var splitted = e.srcElement.value.split('\\');
      var fileName = splitted[splitted.length - 1];

      if (_this.state.inputs.indexOf(inputId) > -1) {
        var newState = Object.assign({}, _this.state.inputLabels, {[inputId]: fileName});
        _this.setState({
          inputLabels: newState
        });
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
    this.setState({
      inputs: newInputs
    });
  },

  handleChange: function (e, inputId) {

    var input = ReactDOM.findDOMNode(this.refs['input-list'].refs[inputId]);

    if (input.files) {
      var fileArray = [];
      for (let i = 0; i < input.files.length; ++i) {
        fileArray.push(input.files[i].name);
      }

      var newLabels = Object.assign({}, this.state.inputLabels, {[inputId]: fileArray});

      this.setState({
        inputLabels: newLabels
      });

    } else {

      var splitted = e.target.value.split('\\');
      var fileName = splitted[splitted.length - 1];

      if (this.state.inputs.indexOf(inputId) > -1) {
        var newState = Object.assign({}, this.state.inputLabels, {[inputId]: fileName});
        this.setState({
          inputLabels: newState
        });
      }

    }
  },

  render: function () {
    return (
      <div className="col-xs-12">
        <div className="reply-attachment" style={{paddingBottom: '15px', paddingTop: '10px'}}>
          <button type="button" onClick={this.addInput} className="btn btn-white btn-reply-attachment"></button>
        </div>
        <InputList ref="input-list"
                   inputs={this.state.inputs}
                   inputLabels={this.state.inputLabels}
                   onFileRemove={this.handleFileRemove}
                   onChange={this.handleChange} />
      </div>
    );
  }

});

module.exports = InputFileContainer;
