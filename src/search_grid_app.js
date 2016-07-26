require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');
require('core-js/fn/object/assign');


const React = require('react');
const ReactDOM = require('react-dom');
const Modal = require('./search_grid_components/Modal');


var dataSource = require('../utils/dataSource');

var columns = [
  {
    field: 'id',
    filterType: 'empty',
    colSize: 1,
    contentField: 'id',
    title: translations.ticket_id,
    link : true
  },
  {
    field: 'inbox',
    filterType: 'textbox',
    colSize: 1,
    contentField: 'inbox',
    title: translations.inbox
  },
  {
    field: 'priority',
    filterType: 'multiselect',
    options: dataSource.getPriorities(),
    colSize: 1,
    contentField: 'priorityMessage',
    title: translations.priority
  },
  {
    field: 'status',
    filterType: 'multiselect',
    options: dataSource.getStatuses(),
    colSize: 1,
    contentField: 'statusMessage',
    title: translations.status
  },
  {
    field: 'topic',
    filterType: 'textbox',
    colSize: 2,
    contentField: 'topic',
    title: translations.topic
  },
  {
    field: 'assignee',
    filterType: 'textbox',
    colSize: dataSource.showInstances() ? 2 : 3,
    contentField: 'assignee',
    title: translations.assignee
  },
  {
    field: 'subject',
    filterType: 'textbox',
    colSize: dataSource.showInstances() ? 2 : 3,
    contentField: 'subject',
    title: translations.subject,
    disableAutocomplete: true
  }
];
if(dataSource.showInstances()){
  columns.splice(1, 0, {
    field: 'instanceMessage',
    filterType: 'textbox',
    colSize: 2,
    contentField: 'instanceMessage',
    title: translations.servicecamp
  });
}

ReactDOM.render(
  <Modal dataSource={dataSource} translations={translations} columns={columns} id="search-grid" />,
  document.getElementById('search-grid-component')
);
