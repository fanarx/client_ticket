require('es5-shim');
require('es5-shim/es5-sham');
require('console-polyfill');
require('core-js/fn/object/assign');

const React = require('react');
const ReactDOM = require('react-dom');
const ModalBox = require('./create_ticket_components/ModalBox');
window.eventEmitter = new (require('events').EventEmitter);
const Constant = require('./constants/create_ticket');




/*
var instances = [
  {
    "instance_id": "19",
    "instance_url": "feedback.monhelpdesk.com",
    "staff_id": "35",
    "inboxes": [{
      "id": 42,
      "name": "Support",
      "assigneeList": [{ "id": 35, "name": "Mir zugewiesen" }, { "id": 0, "name": "Nicht zugewiesen" }],
      "customFields": [{ "id": 86, "name": "feedback", "value": "", "type": "1", "options": "", "required": 1 }],
      "defaultAssignee": 0
    }, {
        "id": 51,
        "name": "feedback",
        "assigneeList": [{ "id": 35, "name": "Mir zugewiesen" }, { "id": 0, "name": "Nicht zugewiesen" }],
        "customFields": [{ "id": 86, "name": "feedback", "value": "", "type": "1", "options": "", "required": 1 }],
        "defaultAssignee": 0
      }]
  }, {
    "instance_id": "51",
    "instance_url": "anush.monhelpdesk.com",
    "staff_id": "212",
    "inboxes": [{
      "id": 85,
      "name": "Support",
      "assigneeList": [{ "id": 0, "name": "Nicht zugewiesen" }, { "id": 97, "name": "Anush" }, {
        "id": 75,
        "name": "anush\""
      }, { "id": 444, "name": "armen@monitis123.onmicrosoft.com" }, { "id": 105, "name": "Arthur" }, {
          "id": 129,
          "name": "Hayk monitis"
        }],
      "customFields": [{
        "id": 3,
        "name": "for internal",
        "value": "",
        "type": "1",
        "options": "",
        "required": 1
      }, { "id": 30, "name": "for support", "value": "", "type": "1", "options": "", "required": 0 }],
      "defaultAssignee": 0
    }, {
        "id": 143,
        "name": "Internal",
        "assigneeList": [{ "id": 212, "name": "Mir zugewiesen" }, { "id": 0, "name": "Nicht zugewiesen" }, {
          "id": 97,
          "name": "Anush"
        }, { "id": 75, "name": "anush\"" }, { "id": 444, "name": "armen@monitis123.onmicrosoft.com" }, {
            "id": 105,
            "name": "Arthur"
          }, { "id": 170, "name": "Harutyun" }, { "id": 149, "name": "M.Marina" }],
        "customFields": [{
          "id": 3,
          "name": "for internal",
          "value": "",
          "type": "1",
          "options": "",
          "required": 1
        }, { "id": 30, "name": "for support", "value": "", "type": "1", "options": "", "required": 0 }],
        "defaultAssignee": 0
      }]
  }, {
    "instance_id": "155",
    "instance_url": "dev.monhelpdesk.com",
    "staff_id": "326",
    "inboxes": [{
      "id": 202,
      "name": "support",
      "assigneeList": [{ "id": 326, "name": "Mir zugewiesen" }, { "id": 0, "name": "Nicht zugewiesen" }, {
        "id": 324,
        "name": "Armen Grigoryan"
      }, { "id": 394, "name": "armengrigoryan84" }, { "id": 321, "name": "Arthur" }, { "id": 426, "name": "Artur" }, {
          "id": 642,
          "name": "Christian"
        }, { "id": 686, "name": "developer@tvservicecamp.onmicrosoft.com" }, { "id": 322, "name": "Harutyun" }, {
          "id": 505,
          "name": "hayk.g.grigoryan@gmail.com"
        }, { "id": 327, "name": "Hayk monitis" }, { "id": 556, "name": "Lilit Davtyan" }, {
          "id": 323,
          "name": "M.Marina"
        }, { "id": 411, "name": "meeting@teamviewer.com" }, { "id": 325, "name": "narek.gyurjinyan" }, {
          "id": 328,
          "name": "Narek"
        }, { "id": 441, "name": "outlook_F98AC39FB9F971A3@outlook.com" }, { "id": 624, "name": "qatest6" }, {
          "id": 425,
          "name": "Christian Reiser"
        }, { "id": 224, "name": "Ruzanna" }, { "id": 333, "name": "Ruzan" }, {
          "id": 432,
          "name": "Servicecamp Dev Account"
        }, { "id": 518, "name": "Shushan.Kareyan" }, { "id": 713, "name": "Suren Avetisyan" }, {
          "id": 570,
          "name": "Dkmsmidhk"
        }, { "id": 436, "name": "testo" }],
      "customFields": [{
        "id": 16,
        "name": "Normal name",
        "value": "",
        "type": "1",
        "options": "",
        "required": 0
      }, { "id": 23, "name": "testikik", "value": "", "type": "1", "options": "", "required": 1 }, {
          "id": 90,
          "name": "testikik",
          "value": "",
          "type": "1",
          "options": "",
          "required": 1
        }, {
          "id": 115,
          "name": "Test_Drop_down_field",
          "value": "123",
          "type": "2",
          "options": "123,456,1,546546,1,2,3,4,5,6,7,7,8,9,0,14,14,15,26,3,73,7,37,347,347,4,45,58,485,548,54",
          "required": 1
        }, {
          "id": 118,
          "name": "Test_0704",
          "value": "test2",
          "type": "2",
          "options": "test1,test2,test3",
          "required": 1
        }, {
          "id": 119,
          "name": "Test_04_07",
          "value": "test454646",
          "type": "2",
          "options": "test454646, test2, test3, Lilit_test",
          "required": 1
        }, {
          "id": 120,
          "name": "Test_1000",
          "value": "aaaa",
          "type": "2",
          "options": "aaaa,bbbb,cccc",
          "required": 1
        }, {
          "id": 121,
          "name": "Test12",
          "value": "aaaa",
          "type": "2",
          "options": "aaaa,bbbb,cccc,dddd",
          "required": 1
        }, { "id": 161, "name": "newapril", "value": "", "type": "1", "options": "", "required": 0 }],
      "defaultAssignee": 0
    }, {
        "id": 405,
        "name": "Ruzik",
        "assigneeList": [{ "id": 326, "name": "Mir zugewiesen" }, { "id": 0, "name": "Nicht zugewiesen" }, {
          "id": 506,
          "name": "anush@monitis.com"
        }, { "id": 324, "name": "Armen Grigoryan" }, { "id": 394, "name": "armengrigoryan84" }, {
            "id": 321,
            "name": "Arthur"
          }, { "id": 642, "name": "Christian" }, { "id": 686, "name": "developer@tvservicecamp.onmicrosoft.com" }, {
            "id": 322,
            "name": "Harutyun"
          }, { "id": 505, "name": "hayk.g.grigoryan@gmail.com" }, { "id": 327, "name": "Hayk monitis" }, {
            "id": 556,
            "name": "Lilit Davtyan"
          }, { "id": 411, "name": "meeting@teamviewer.com" }, { "id": 325, "name": "narek.gyurjinyan" }, {
            "id": 328,
            "name": "Narek"
          }, { "id": 441, "name": "outlook_F98AC39FB9F971A3@outlook.com" }, { "id": 624, "name": "qatest6" }, {
            "id": 425,
            "name": "Christian Reiser"
          }, { "id": 224, "name": "Ruzanna" }, { "id": 333, "name": "Ruzan" }, {
            "id": 432,
            "name": "Servicecamp Dev Account"
          }, { "id": 518, "name": "Shushan.Kareyan" }, { "id": 713, "name": "Suren Avetisyan" }, {
            "id": 570,
            "name": "Dkmsmidhk"
          }, { "id": 436, "name": "testo" }],
        "customFields": [{
          "id": 16,
          "name": "Normal name",
          "value": "",
          "type": "1",
          "options": "",
          "required": 0
        }, { "id": 23, "name": "testikik", "value": "", "type": "1", "options": "", "required": 1 }, {
            "id": 90,
            "name": "testikik",
            "value": "",
            "type": "1",
            "options": "",
            "required": 1
          }, {
            "id": 115,
            "name": "Test_Drop_down_field",
            "value": "123",
            "type": "2",
            "options": "123,456,1,546546,1,2,3,4,5,6,7,7,8,9,0,14,14,15,26,3,73,7,37,347,347,4,45,58,485,548,54",
            "required": 1
          }, {
            "id": 118,
            "name": "Test_0704",
            "value": "test2",
            "type": "2",
            "options": "test1,test2,test3",
            "required": 1
          }, {
            "id": 119,
            "name": "Test_04_07",
            "value": "test454646",
            "type": "2",
            "options": "test454646, test2, test3, Lilit_test",
            "required": 1
          }, {
            "id": 120,
            "name": "Test_1000",
            "value": "aaaa",
            "type": "2",
            "options": "aaaa,bbbb,cccc",
            "required": 1
          }, {
            "id": 121,
            "name": "Test12",
            "value": "aaaa",
            "type": "2",
            "options": "aaaa,bbbb,cccc,dddd",
            "required": 1
          }, { "id": 161, "name": "newapril", "value": "", "type": "1", "options": "", "required": 0 }],
        "defaultAssignee": 0
      }, {
        "id": 595,
        "name": "external",
        "assigneeList": [{ "id": 326, "name": "Mir zugewiesen" }, { "id": 0, "name": "Nicht zugewiesen" }, {
          "id": 324,
          "name": "Armen Grigoryan"
        }, { "id": 394, "name": "armengrigoryan84" }, { "id": 321, "name": "Arthur" }, {
            "id": 642,
            "name": "Christian"
          }, { "id": 686, "name": "developer@tvservicecamp.onmicrosoft.com" }, { "id": 322, "name": "Harutyun" }, {
            "id": 327,
            "name": "Hayk monitis"
          }, { "id": 556, "name": "Lilit Davtyan" }, { "id": 411, "name": "meeting@teamviewer.com" }, {
            "id": 325,
            "name": "narek.gyurjinyan"
          }, { "id": 328, "name": "Narek" }, { "id": 441, "name": "outlook_F98AC39FB9F971A3@outlook.com" }, {
            "id": 624,
            "name": "qatest6"
          }, { "id": 425, "name": "Christian Reiser" }, { "id": 224, "name": "Ruzanna" }, {
            "id": 333,
            "name": "Ruzan"
          }, { "id": 432, "name": "Servicecamp Dev Account" }, { "id": 518, "name": "Shushan.Kareyan" }, {
            "id": 713,
            "name": "Suren Avetisyan"
          }, { "id": 570, "name": "Dkmsmidhk" }, { "id": 436, "name": "testo" }],
        "customFields": [{
          "id": 16,
          "name": "Normal name",
          "value": "",
          "type": "1",
          "options": "",
          "required": 0
        }, { "id": 23, "name": "testikik", "value": "", "type": "1", "options": "", "required": 1 }, {
            "id": 90,
            "name": "testikik",
            "value": "",
            "type": "1",
            "options": "",
            "required": 1
          }, {
            "id": 115,
            "name": "Test_Drop_down_field",
            "value": "123",
            "type": "2",
            "options": "123,456,1,546546,1,2,3,4,5,6,7,7,8,9,0,14,14,15,26,3,73,7,37,347,347,4,45,58,485,548,54",
            "required": 1
          }, {
            "id": 118,
            "name": "Test_0704",
            "value": "test2",
            "type": "2",
            "options": "test1,test2,test3",
            "required": 1
          }, {
            "id": 119,
            "name": "Test_04_07",
            "value": "test454646",
            "type": "2",
            "options": "test454646, test2, test3, Lilit_test",
            "required": 1
          }, {
            "id": 120,
            "name": "Test_1000",
            "value": "aaaa",
            "type": "2",
            "options": "aaaa,bbbb,cccc",
            "required": 1
          }, {
            "id": 121,
            "name": "Test12",
            "value": "aaaa",
            "type": "2",
            "options": "aaaa,bbbb,cccc,dddd",
            "required": 1
          }, { "id": 161, "name": "newapril", "value": "", "type": "1", "options": "", "required": 0 }],
        "defaultAssignee": 0
      }, {
        "id": 596,
        "name": "Haruti",
        "assigneeList": [{ "id": 326, "name": "Mir zugewiesen" }, { "id": 0, "name": "Nicht zugewiesen" }, {
          "id": 324,
          "name": "Armen Grigoryan"
        }, { "id": 394, "name": "armengrigoryan84" }, { "id": 321, "name": "Arthur" }, {
            "id": 642,
            "name": "Christian"
          }, { "id": 686, "name": "developer@tvservicecamp.onmicrosoft.com" }, { "id": 322, "name": "Harutyun" }, {
            "id": 327,
            "name": "Hayk monitis"
          }, { "id": 556, "name": "Lilit Davtyan" }, { "id": 411, "name": "meeting@teamviewer.com" }, {
            "id": 325,
            "name": "narek.gyurjinyan"
          }, { "id": 328, "name": "Narek" }, { "id": 441, "name": "outlook_F98AC39FB9F971A3@outlook.com" }, {
            "id": 624,
            "name": "qatest6"
          }, { "id": 425, "name": "Christian Reiser" }, { "id": 224, "name": "Ruzanna" }, {
            "id": 333,
            "name": "Ruzan"
          }, { "id": 432, "name": "Servicecamp Dev Account" }, { "id": 518, "name": "Shushan.Kareyan" }, {
            "id": 713,
            "name": "Suren Avetisyan"
          }, { "id": 570, "name": "Dkmsmidhk" }, { "id": 436, "name": "testo" }],
        "customFields": [{
          "id": 16,
          "name": "Normal name",
          "value": "",
          "type": "1",
          "options": "",
          "required": 0
        }, { "id": 23, "name": "testikik", "value": "", "type": "1", "options": "", "required": 1 }, {
            "id": 90,
            "name": "testikik",
            "value": "",
            "type": "1",
            "options": "",
            "required": 1
          }, {
            "id": 115,
            "name": "Test_Drop_down_field",
            "value": "123",
            "type": "2",
            "options": "123,456,1,546546,1,2,3,4,5,6,7,7,8,9,0,14,14,15,26,3,73,7,37,347,347,4,45,58,485,548,54",
            "required": 1
          }, {
            "id": 118,
            "name": "Test_0704",
            "value": "test2",
            "type": "2",
            "options": "test1,test2,test3",
            "required": 1
          }, {
            "id": 119,
            "name": "Test_04_07",
            "value": "test454646",
            "type": "2",
            "options": "test454646, test2, test3, Lilit_test",
            "required": 1
          }, {
            "id": 120,
            "name": "Test_1000",
            "value": "aaaa",
            "type": "2",
            "options": "aaaa,bbbb,cccc",
            "required": 1
          }, {
            "id": 121,
            "name": "Test12",
            "value": "aaaa",
            "type": "2",
            "options": "aaaa,bbbb,cccc,dddd",
            "required": 1
          }, { "id": 161, "name": "newapril", "value": "", "type": "1", "options": "", "required": 0 }],
        "defaultAssignee": 322
      }, {
        "id": 597,
        "name": "Narek",
        "assigneeList": [{ "id": 326, "name": "Mir zugewiesen" }, { "id": 0, "name": "Nicht zugewiesen" }, {
          "id": 324,
          "name": "Armen Grigoryan"
        }, { "id": 394, "name": "armengrigoryan84" }, { "id": 321, "name": "Arthur" }, {
            "id": 642,
            "name": "Christian"
          }, { "id": 686, "name": "developer@tvservicecamp.onmicrosoft.com" }, { "id": 322, "name": "Harutyun" }, {
            "id": 327,
            "name": "Hayk monitis"
          }, { "id": 556, "name": "Lilit Davtyan" }, { "id": 411, "name": "meeting@teamviewer.com" }, {
            "id": 325,
            "name": "narek.gyurjinyan"
          }, { "id": 328, "name": "Narek" }, { "id": 441, "name": "outlook_F98AC39FB9F971A3@outlook.com" }, {
            "id": 624,
            "name": "qatest6"
          }, { "id": 425, "name": "Christian Reiser" }, { "id": 224, "name": "Ruzanna" }, {
            "id": 333,
            "name": "Ruzan"
          }, { "id": 432, "name": "Servicecamp Dev Account" }, { "id": 518, "name": "Shushan.Kareyan" }, {
            "id": 713,
            "name": "Suren Avetisyan"
          }, { "id": 570, "name": "Dkmsmidhk" }, { "id": 436, "name": "testo" }],
        "customFields": [{
          "id": 16,
          "name": "Normal name",
          "value": "",
          "type": "1",
          "options": "",
          "required": 0
        }, { "id": 23, "name": "testikik", "value": "", "type": "1", "options": "", "required": 1 }, {
            "id": 90,
            "name": "testikik",
            "value": "",
            "type": "1",
            "options": "",
            "required": 1
          }, {
            "id": 115,
            "name": "Test_Drop_down_field",
            "value": "123",
            "type": "2",
            "options": "123,456,1,546546,1,2,3,4,5,6,7,7,8,9,0,14,14,15,26,3,73,7,37,347,347,4,45,58,485,548,54",
            "required": 1
          }, {
            "id": 118,
            "name": "Test_0704",
            "value": "test2",
            "type": "2",
            "options": "test1,test2,test3",
            "required": 1
          }, {
            "id": 119,
            "name": "Test_04_07",
            "value": "test454646",
            "type": "2",
            "options": "test454646, test2, test3, Lilit_test",
            "required": 1
          }, {
            "id": 120,
            "name": "Test_1000",
            "value": "aaaa",
            "type": "2",
            "options": "aaaa,bbbb,cccc",
            "required": 1
          }, {
            "id": 121,
            "name": "Test12",
            "value": "aaaa",
            "type": "2",
            "options": "aaaa,bbbb,cccc,dddd",
            "required": 1
          }, { "id": 161, "name": "newapril", "value": "", "type": "1", "options": "", "required": 0 }],
        "defaultAssignee": 0
      }, {
        "id": 598,
        "name": "delete",
        "assigneeList": [{ "id": 326, "name": "Mir zugewiesen" }, { "id": 0, "name": "Nicht zugewiesen" }, {
          "id": 324,
          "name": "Armen Grigoryan"
        }, { "id": 394, "name": "armengrigoryan84" }, { "id": 321, "name": "Arthur" }, {
            "id": 642,
            "name": "Christian"
          }, { "id": 686, "name": "developer@tvservicecamp.onmicrosoft.com" }, { "id": 322, "name": "Harutyun" }, {
            "id": 327,
            "name": "Hayk monitis"
          }, { "id": 556, "name": "Lilit Davtyan" }, { "id": 411, "name": "meeting@teamviewer.com" }, {
            "id": 325,
            "name": "narek.gyurjinyan"
          }, { "id": 328, "name": "Narek" }, { "id": 441, "name": "outlook_F98AC39FB9F971A3@outlook.com" }, {
            "id": 624,
            "name": "qatest6"
          }, { "id": 425, "name": "Christian Reiser" }, { "id": 224, "name": "Ruzanna" }, {
            "id": 333,
            "name": "Ruzan"
          }, { "id": 432, "name": "Servicecamp Dev Account" }, { "id": 518, "name": "Shushan.Kareyan" }, {
            "id": 713,
            "name": "Suren Avetisyan"
          }, { "id": 570, "name": "Dkmsmidhk" }, { "id": 436, "name": "testo" }],
        "customFields": [{
          "id": 16,
          "name": "Normal name",
          "value": "",
          "type": "1",
          "options": "",
          "required": 0
        }, { "id": 23, "name": "testikik", "value": "", "type": "1", "options": "", "required": 1 }, {
            "id": 90,
            "name": "testikik",
            "value": "",
            "type": "1",
            "options": "",
            "required": 1
          }, {
            "id": 115,
            "name": "Test_Drop_down_field",
            "value": "123",
            "type": "2",
            "options": "123,456,1,546546,1,2,3,4,5,6,7,7,8,9,0,14,14,15,26,3,73,7,37,347,347,4,45,58,485,548,54",
            "required": 1
          }, {
            "id": 118,
            "name": "Test_0704",
            "value": "test2",
            "type": "2",
            "options": "test1,test2,test3",
            "required": 1
          }, {
            "id": 119,
            "name": "Test_04_07",
            "value": "test454646",
            "type": "2",
            "options": "test454646, test2, test3, Lilit_test",
            "required": 1
          }, {
            "id": 120,
            "name": "Test_1000",
            "value": "aaaa",
            "type": "2",
            "options": "aaaa,bbbb,cccc",
            "required": 1
          }, {
            "id": 121,
            "name": "Test12",
            "value": "aaaa",
            "type": "2",
            "options": "aaaa,bbbb,cccc,dddd",
            "required": 1
          }, { "id": 161, "name": "newapril", "value": "", "type": "1", "options": "", "required": 0 }],
        "defaultAssignee": 0
      }, {
        "id": 618,
        "name": "for_delete",
        "assigneeList": [{ "id": 326, "name": "Mir zugewiesen" }, { "id": 0, "name": "Nicht zugewiesen" }, {
          "id": 324,
          "name": "Armen Grigoryan"
        }, { "id": 394, "name": "armengrigoryan84" }, { "id": 321, "name": "Arthur" }, {
            "id": 642,
            "name": "Christian"
          }, { "id": 686, "name": "developer@tvservicecamp.onmicrosoft.com" }, { "id": 322, "name": "Harutyun" }, {
            "id": 327,
            "name": "Hayk monitis"
          }, { "id": 556, "name": "Lilit Davtyan" }, { "id": 411, "name": "meeting@teamviewer.com" }, {
            "id": 325,
            "name": "narek.gyurjinyan"
          }, { "id": 328, "name": "Narek" }, { "id": 441, "name": "outlook_F98AC39FB9F971A3@outlook.com" }, {
            "id": 624,
            "name": "qatest6"
          }, { "id": 425, "name": "Christian Reiser" }, { "id": 224, "name": "Ruzanna" }, {
            "id": 432,
            "name": "Servicecamp Dev Account"
          }, { "id": 518, "name": "Shushan.Kareyan" }, { "id": 713, "name": "Suren Avetisyan" }, {
            "id": 570,
            "name": "Dkmsmidhk"
          }, { "id": 436, "name": "testo" }],
        "customFields": [{
          "id": 16,
          "name": "Normal name",
          "value": "",
          "type": "1",
          "options": "",
          "required": 0
        }, { "id": 23, "name": "testikik", "value": "", "type": "1", "options": "", "required": 1 }, {
            "id": 90,
            "name": "testikik",
            "value": "",
            "type": "1",
            "options": "",
            "required": 1
          }, {
            "id": 115,
            "name": "Test_Drop_down_field",
            "value": "123",
            "type": "2",
            "options": "123,456,1,546546,1,2,3,4,5,6,7,7,8,9,0,14,14,15,26,3,73,7,37,347,347,4,45,58,485,548,54",
            "required": 1
          }, {
            "id": 118,
            "name": "Test_0704",
            "value": "test2",
            "type": "2",
            "options": "test1,test2,test3",
            "required": 1
          }, {
            "id": 119,
            "name": "Test_04_07",
            "value": "test454646",
            "type": "2",
            "options": "test454646, test2, test3, Lilit_test",
            "required": 1
          }, {
            "id": 120,
            "name": "Test_1000",
            "value": "aaaa",
            "type": "2",
            "options": "aaaa,bbbb,cccc",
            "required": 1
          }, {
            "id": 121,
            "name": "Test12",
            "value": "aaaa",
            "type": "2",
            "options": "aaaa,bbbb,cccc,dddd",
            "required": 1
          }, { "id": 161, "name": "newapril", "value": "", "type": "1", "options": "", "required": 0 }],
        "defaultAssignee": 0
      }]
  }, {
    "instance_id": "318",
    "instance_url": "local.monhelpdesk.com",
    "staff_id": "420",
    "inboxes": [{
      "id": 383,
      "name": "external",
      "assigneeList": [{ "id": 420, "name": "Mir zugewiesen" }, { "id": 0, "name": "Nicht zugewiesen" }, {
        "id": 501,
        "name": "%^%^%^test@ed.com"
      }, { "id": 499, "name": "Anush" }, { "id": 435, "name": "anush\"" }, { "id": 445, "name": "Armen Grigoryan" }, {
          "id": 469,
          "name": "armengrigoryan84"
        }, { "id": 652, "name": "art.kirakosyan@mail.ru" }, { "id": 424, "name": "Arthur" }, {
          "id": 423,
          "name": "Harutyun"
        }, { "id": 442, "name": "Hayk Grigoryan" }, { "id": 422, "name": "Hayk monitis" }, {
          "id": 438,
          "name": "marina.melkonyan@gmail.com"
        }, { "id": 427, "name": "M.Marina" }, { "id": 712, "name": "marina@arminco.com" }, {
          "id": 428,
          "name": "narek.gyurjinyan"
        }, { "id": 446, "name": "Narek" }, { "id": 677, "name": "ruzan1@test.com" }, {
          "id": 678,
          "name": "ruzan2@test.com"
        }, { "id": 679, "name": "ruzan3@test.com" }, { "id": 440, "name": "Ruzanna" }, { "id": 517, "name": "Ruzan" }, {
          "id": 680,
          "name": "saas@tes.com"
        }, { "id": 681, "name": "sdsdsds@tes.com" }, { "id": 421, "name": "Servicecamp Dev Account" }, {
          "id": 716,
          "name": "Suren Avetisyan"
        }, { "id": 585, "name": "syuzanna@yahoo.com" }, { "id": 682, "name": "wdwdwdwd@test.com" }],
      "customFields": [{
        "id": 155,
        "name": "Ruzik111",
        "value": "number 1",
        "type": "2",
        "options": "number 1,number 2",
        "required": 0
      }, { "id": 185, "name": "test55", "value": "", "type": "1", "options": "", "required": 0 }, {
          "id": 189,
          "name": "multi select",
          "value": "",
          "type": "1",
          "options": "",
          "required": 0
        }, { "id": 227, "name": "dropdown", "value": "", "type": "1", "options": "", "required": 0 }, {
          "id": 237,
          "name": "uuuuuuuuuuuuu",
          "value": "oooooooooooooooooooo",
          "type": "1",
          "options": "",
          "required": 1
        }, { "id": 238, "name": "ppppppppppp", "value": "", "type": "1", "options": "", "required": 1 }, {
          "id": 239,
          "name": "tttttttttttttttttt",
          "value": "",
          "type": "1",
          "options": "",
          "required": 1
        }],
      "defaultAssignee": 0
    }, {
        "id": 599,
        "name": "Harut tets",
        "assigneeList": [{ "id": 420, "name": "Mir zugewiesen" }, { "id": 0, "name": "Nicht zugewiesen" }, {
          "id": 501,
          "name": "%^%^%^test@ed.com"
        }, { "id": 499, "name": "Anush" }, { "id": 445, "name": "Armen Grigoryan" }, {
            "id": 469,
            "name": "armengrigoryan84"
          }, { "id": 424, "name": "Arthur" }, { "id": 423, "name": "Harutyun" }, { "id": 422, "name": "Hayk monitis" }, {
            "id": 438,
            "name": "marina.melkonyan@gmail.com"
          }, { "id": 427, "name": "M.Marina" }, { "id": 712, "name": "marina@arminco.com" }, {
            "id": 428,
            "name": "narek.gyurjinyan"
          }, { "id": 446, "name": "Narek" }, { "id": 677, "name": "ruzan1@test.com" }, {
            "id": 678,
            "name": "ruzan2@test.com"
          }, { "id": 679, "name": "ruzan3@test.com" }, { "id": 440, "name": "Ruzanna" }, { "id": 517, "name": "Ruzan" }, {
            "id": 680,
            "name": "saas@tes.com"
          }, { "id": 681, "name": "sdsdsds@tes.com" }, { "id": 421, "name": "Servicecamp Dev Account" }, {
            "id": 716,
            "name": "Suren Avetisyan"
          }, { "id": 682, "name": "wdwdwdwd@test.com" }],
        "customFields": [{ "id": 185, "name": "test55", "value": "", "type": "1", "options": "", "required": 0 }, {
          "id": 189,
          "name": "multi select",
          "value": "",
          "type": "1",
          "options": "",
          "required": 0
        }, { "id": 227, "name": "dropdown", "value": "", "type": "1", "options": "", "required": 0 }, {
            "id": 237,
            "name": "uuuuuuuuuuuuu",
            "value": "oooooooooooooooooooo",
            "type": "1",
            "options": "",
            "required": 1
          }, { "id": 238, "name": "ppppppppppp", "value": "", "type": "1", "options": "", "required": 1 }, {
            "id": 239,
            "name": "tttttttttttttttttt",
            "value": "",
            "type": "1",
            "options": "",
            "required": 1
          }],
        "defaultAssignee": 0
      }, {
        "id": 601,
        "name": "\u0549\u057b\u0576\u057b\u0565\u056c",
        "assigneeList": [{ "id": 420, "name": "Mir zugewiesen" }, { "id": 0, "name": "Nicht zugewiesen" }, {
          "id": 501,
          "name": "%^%^%^test@ed.com"
        }, { "id": 499, "name": "Anush" }, { "id": 445, "name": "Armen Grigoryan" }, {
            "id": 469,
            "name": "armengrigoryan84"
          }, { "id": 652, "name": "art.kirakosyan@mail.ru" }, { "id": 424, "name": "Arthur" }, {
            "id": 423,
            "name": "Harutyun"
          }, { "id": 422, "name": "Hayk monitis" }, { "id": 438, "name": "marina.melkonyan@gmail.com" }, {
            "id": 427,
            "name": "M.Marina"
          }, { "id": 712, "name": "marina@arminco.com" }, { "id": 428, "name": "narek.gyurjinyan" }, {
            "id": 446,
            "name": "Narek"
          }, { "id": 677, "name": "ruzan1@test.com" }, { "id": 678, "name": "ruzan2@test.com" }, {
            "id": 679,
            "name": "ruzan3@test.com"
          }, { "id": 440, "name": "Ruzanna" }, { "id": 517, "name": "Ruzan" }, { "id": 680, "name": "saas@tes.com" }, {
            "id": 681,
            "name": "sdsdsds@tes.com"
          }, { "id": 421, "name": "Servicecamp Dev Account" }, { "id": 716, "name": "Suren Avetisyan" }, {
            "id": 682,
            "name": "wdwdwdwd@test.com"
          }],
        "customFields": [{ "id": 185, "name": "test55", "value": "", "type": "1", "options": "", "required": 0 }, {
          "id": 189,
          "name": "multi select",
          "value": "",
          "type": "1",
          "options": "",
          "required": 0
        }, { "id": 227, "name": "dropdown", "value": "", "type": "1", "options": "", "required": 0 }, {
            "id": 237,
            "name": "uuuuuuuuuuuuu",
            "value": "oooooooooooooooooooo",
            "type": "1",
            "options": "",
            "required": 1
          }, { "id": 238, "name": "ppppppppppp", "value": "", "type": "1", "options": "", "required": 1 }, {
            "id": 239,
            "name": "tttttttttttttttttt",
            "value": "",
            "type": "1",
            "options": "",
            "required": 1
          }],
        "defaultAssignee": 0
      }, {
        "id": 604,
        "name": "\u0422\u043e\u043b\u044c\u043a\u043e \u043c\u043e\u0438",
        "assigneeList": [{ "id": 420, "name": "Mir zugewiesen" }, { "id": 0, "name": "Nicht zugewiesen" }, {
          "id": 501,
          "name": "%^%^%^test@ed.com"
        }, { "id": 499, "name": "Anush" }, { "id": 445, "name": "Armen Grigoryan" }, {
            "id": 469,
            "name": "armengrigoryan84"
          }, { "id": 652, "name": "art.kirakosyan@mail.ru" }, { "id": 424, "name": "Arthur" }, {
            "id": 423,
            "name": "Harutyun"
          }, { "id": 422, "name": "Hayk monitis" }, { "id": 438, "name": "marina.melkonyan@gmail.com" }, {
            "id": 427,
            "name": "M.Marina"
          }, { "id": 428, "name": "narek.gyurjinyan" }, { "id": 446, "name": "Narek" }, {
            "id": 677,
            "name": "ruzan1@test.com"
          }, { "id": 678, "name": "ruzan2@test.com" }, { "id": 679, "name": "ruzan3@test.com" }, {
            "id": 440,
            "name": "Ruzanna"
          }, { "id": 517, "name": "Ruzan" }, { "id": 680, "name": "saas@tes.com" }, {
            "id": 681,
            "name": "sdsdsds@tes.com"
          }, { "id": 421, "name": "Servicecamp Dev Account" }, { "id": 716, "name": "Suren Avetisyan" }, {
            "id": 682,
            "name": "wdwdwdwd@test.com"
          }],
        "customFields": [{ "id": 185, "name": "test55", "value": "", "type": "1", "options": "", "required": 0 }, {
          "id": 189,
          "name": "multi select",
          "value": "",
          "type": "1",
          "options": "",
          "required": 0
        }, { "id": 227, "name": "dropdown", "value": "", "type": "1", "options": "", "required": 0 }, {
            "id": 237,
            "name": "uuuuuuuuuuuuu",
            "value": "oooooooooooooooooooo",
            "type": "1",
            "options": "",
            "required": 1
          }, { "id": 238, "name": "ppppppppppp", "value": "", "type": "1", "options": "", "required": 1 }, {
            "id": 239,
            "name": "tttttttttttttttttt",
            "value": "",
            "type": "1",
            "options": "",
            "required": 1
          }],
        "defaultAssignee": 0
      }, {
        "id": 682,
        "name": "hayk test 4",
        "assigneeList": [{ "id": 420, "name": "Mir zugewiesen" }, { "id": 0, "name": "Nicht zugewiesen" }, {
          "id": 501,
          "name": "%^%^%^test@ed.com"
        }, { "id": 499, "name": "Anush" }, { "id": 445, "name": "Armen Grigoryan" }, {
            "id": 469,
            "name": "armengrigoryan84"
          }, { "id": 652, "name": "art.kirakosyan@mail.ru" }, { "id": 424, "name": "Arthur" }, {
            "id": 423,
            "name": "Harutyun"
          }, { "id": 442, "name": "Hayk Grigoryan" }, { "id": 422, "name": "Hayk monitis" }, {
            "id": 438,
            "name": "marina.melkonyan@gmail.com"
          }, { "id": 427, "name": "M.Marina" }, { "id": 712, "name": "marina@arminco.com" }, {
            "id": 428,
            "name": "narek.gyurjinyan"
          }, { "id": 446, "name": "Narek" }, { "id": 677, "name": "ruzan1@test.com" }, {
            "id": 678,
            "name": "ruzan2@test.com"
          }, { "id": 679, "name": "ruzan3@test.com" }, { "id": 440, "name": "Ruzanna" }, { "id": 517, "name": "Ruzan" }, {
            "id": 680,
            "name": "saas@tes.com"
          }, { "id": 681, "name": "sdsdsds@tes.com" }, { "id": 421, "name": "Servicecamp Dev Account" }, {
            "id": 716,
            "name": "Suren Avetisyan"
          }, { "id": 682, "name": "wdwdwdwd@test.com" }],
        "customFields": [{ "id": 185, "name": "test55", "value": "", "type": "1", "options": "", "required": 0 }, {
          "id": 189,
          "name": "multi select",
          "value": "",
          "type": "1",
          "options": "",
          "required": 0
        }, { "id": 227, "name": "dropdown", "value": "", "type": "1", "options": "", "required": 0 }, {
            "id": 237,
            "name": "uuuuuuuuuuuuu",
            "value": "oooooooooooooooooooo",
            "type": "1",
            "options": "",
            "required": 1
          }, { "id": 238, "name": "ppppppppppp", "value": "", "type": "1", "options": "", "required": 1 }, {
            "id": 239,
            "name": "tttttttttttttttttt",
            "value": "",
            "type": "1",
            "options": "",
            "required": 1
          }],
        "defaultAssignee": 0
      }]
  }, {
    "instance_id": "502",
    "instance_url": "monitis108.monhelpdesk.com",
    "staff_id": "640",
    "inboxes": [{
      "id": 666,
      "name": "Support",
      "assigneeList": [{ "id": 640, "name": "Mir zugewiesen" }, { "id": 0, "name": "Nicht zugewiesen" }],
      "customFields": [],
      "defaultAssignee": 640
    }]
  }, {
    "instance_id": "519",
    "instance_url": "monitis125.monhelpdesk.com",
    "staff_id": "658",
    "inboxes": [{
      "id": 683,
      "name": "Support",
      "assigneeList": [{ "id": 658, "name": "Mir zugewiesen" }, { "id": 0, "name": "Nicht zugewiesen" }, {
        "id": 697,
        "name": "saff3@testik.com"
      }],
      "customFields": [],
      "defaultAssignee": 658
    }]
  }, {
    "instance_id": "536",
    "instance_url": "monitis127.monhelpdesk.com",
    "staff_id": "687",
    "inboxes": [{
      "id": 701,
      "name": "Support",
      "assigneeList": [{ "id": 687, "name": "Mir zugewiesen" }, { "id": 0, "name": "Nicht zugewiesen" }],
      "customFields": [],
      "defaultAssignee": 687
    }]
  }, {
    "instance_id": "542",
    "instance_url": "monitis128.monhelpdesk.com",
    "staff_id": "693",
    "inboxes": [{
      "id": 707,
      "name": "Support",
      "assigneeList": [{ "id": 693, "name": "Mir zugewiesen" }, { "id": 0, "name": "Nicht zugewiesen" }],
      "customFields": [],
      "defaultAssignee": 693
    }]
  }];
var priorities = [{ "id": 1, "name": "Urgent" }, { "id": 2, "name": "High" }, { "id": 3, "name": "Medium" }, {
  "id": 4,
  "name": "Low"
}];
var name = '2Requester';
 */
// var translations = {
//   newTicketTitle: "?Create New Ticket",
//   requester: "?Requester",
//   instance: "?Select your servicecamp",
//   inbox: "?Inboxes",
//   assignee: "?Assignee",
//   priority: "?Priority",
//   subject: "?Subject",
//   description: "?Description",
//   required: "?This field is required",
//   invalid_chars: "?This field contains invalid characters",
//   atLeast4Chars: "?This field must contain at least 4 characters"
// };



 window.setToken = function setToken(token, tokenData) {
   var tokenDetails = {
     [Constant.token]: token,
     [Constant.tokenData]: tokenData
   };

   eventEmitter.emit('tokenChange', tokenDetails);
 };

ReactDOM.render(
  <ModalBox title={translations.newTicketTitle}
            instances={instances}
            requester={{name: name}}
            labels={translations}
            priorities={priorities}
            errorMessage={errorMessage}
            formAction = {formAction}
            formValues={values} />, document.getElementById('app')
);
