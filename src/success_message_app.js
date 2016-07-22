require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');
require('core-js/fn/object/assign');

const React = require('react');
const ReactDOM = require('react-dom');
const MessageBox = require('./success_message_components/MessageBox');

ReactDOM.render(
  <MessageBox title={'ll'} message={'ll'} />, document.getElementById('success-message')
);
