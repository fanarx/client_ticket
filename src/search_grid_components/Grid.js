var React = require('react');
const GridColumn = require('./GridColumn');
const GridRow = require('./GridRow');

var Grid = React.createClass({

  componentDidMount: function () {
    jQuery('#scroll-wrapper').scrollbar();
  },

  isFilterFound: function (ticket, filter) {
    ticket += '';
    return ticket.toLowerCase().indexOf(filter.toLowerCase()) === -1;
  },

  filterTickets: function (tickets, filters, sort) {

    tickets = tickets.filter(function (ticket) {
      var found = true;
      var isTicketExistInFilter;

      for (var i in filters) {
        if (!filters[i]){
          continue;
        }

        ticket[i] = ticket[i] || '';

        //multiselect filter
        if (Array.isArray(filters[i])) {
          isTicketExistInFilter = filters[i].indexOf(parseInt(ticket[i])) === -1;

          if (filters[i].length && isTicketExistInFilter) {
            found = false;
            break;
          }

          //textbox filter
        } else if (filters[i] && this.isFilterFound(ticket[i], filters[i])) {
          found = false;
          break;
        }
      }

      return found;
    }.bind(this));

    var sortArray = Object.keys(sort);
    if (sortArray.length) {
      tickets.sort(function (ticket1, ticket2) {

        if (sort.orderType == true) {
          var object1 = ticket1;
          var object2 = ticket2;
        } else {
          var object1 = ticket2;
          var object2 = ticket1;
        }

        if(Number(object1[sort.field]) && Number(object2[sort.field])) {
          object1[sort.field] = Number(object1[sort.field]);
          object2[sort.field] = Number(object2[sort.field]);
        };

        if (object1[sort.field] > object2[sort.field]) {
          return 1;
        } else if (object1[sort.field] < object2[sort.field]) {
          return -1;
        }
        return 0;
      })
    }

    return tickets;
  },

  render: function () {
    var tickets = this.filterTickets(this.props.tickets, this.props.filters, this.props.sort);

    var rows = tickets.map(function (ticket, idx_row) {

      var columns = this.props.columns.map(function (column, idx) {
        var optionalProps = {};
        if (column.link && column.link == true) {
          optionalProps.link = 'https://' + ticket.instanceMessage + '/ticket/' + ticket.id;
        }

        return (<GridColumn key={ticket.id + "_"+ column.field + "_" + idx} id={ticket[column.field]} colSize={column.colSize} {...optionalProps}
                            field={column.field}> { ticket[column.contentField] } </GridColumn>);
      }.bind(this));


      return (
        <GridRow key={ ticket.id +'_'+  idx_row }>
          { columns }
        </GridRow>);

    }.bind(this));

    return (<div id="scroll-wrapper" className="staff-table clearfix">{ rows }</div>);
  }
});


module.exports = Grid;
