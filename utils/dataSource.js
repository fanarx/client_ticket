function DataSource(){
  //this.rawData = searchGridData;

  // //ajax call or whatever
  // this.processData = function(){
  //     this.rawData =  searcGridData;
  // };

  this.getTickets = function(){
    return tickets;
  };

  this.getInstances = function(){
    return  instances;
  };

  this.getPriorities = function(){
    return priorities;
  };

  this.getStatuses = function(){
    return statuses;
  };
}

DataSource.prototype.getStatusById = function(id){
  var statuses = this.getStatuses();

  for(var i in statuses){
    if(statuses[i].id == id ){
      return statuses[i];
    }
  }

  return null;
};

DataSource.prototype.getPriorityById = function(id){
  var priors = this.getPriorities();

  for(var i in priors){
    if(priors[i].id == id ){
      return priors[i];
    }
  }

  return null;
};

DataSource.prototype.getInstanceById = function(id){
  var instances = this.getInstances();

  return (instances != null && instances[id] ) ?  instances[id] : null;
};

DataSource.prototype.getTicketsFiltered = function(){
  var tickets = this.getTickets();


  return tickets.map(function(ticket){
    var status = this.getStatusById(ticket.status);
    ticket.statusMessage = "";
    if(status)
      ticket.statusMessage = status.name;

    var priority = this.getPriorityById(ticket.priority);
    if(priority)
      ticket.priorityMessage = priority.name;
    else
      ticket.priorityMessage = "";

    ticket.instanceMessage = this.getInstanceById(ticket.instance_id );

    return ticket;
  }.bind(this));
};

DataSource.prototype.showInstances = function(){
  var instances = this.getInstances();
  var keys = Object.keys(instances);

  return keys.length > 1;
};

module.exports = new DataSource();
//dataSource.processData();
