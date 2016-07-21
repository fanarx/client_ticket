var React = require('react');


var TokenContainer = React.createClass({

  propTypes : {
    token: React.PropTypes.string
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
      token: payload
    })
  },

  render: function () {
    return (
      <input type="hidden" value={this.state.token} name="token" />
    );
  }
});

module.exports = TokenContainer;
