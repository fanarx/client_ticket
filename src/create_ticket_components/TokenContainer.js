var React = require('react');


var TokenContainer = React.createClass({

  propTypes : {
    token: React.PropTypes.string,
    name: React.PropTypes.string.isRequired
  },

  getInitialState: function() {
    return {
      token: this.props.token
    };
  },

  componentDidMount: function () {
    window.eventEmitter.addListener('tokenChange', this._eventEmitterHandler);
  },

  componentWillUnmount: function () {
    window.eventEmitter.removeListener('tokenChange', this._eventEmitterHandler);
  },

  _eventEmitterHandler: function (payload) {
    this.setState({
      token: payload[this.props.name]
    })
  },

  render: function () {
    return (
      <input type="hidden" value={this.state.token} name={this.props.name} />
    );
  }
});

module.exports = TokenContainer;
