function DataSource(){
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

    if(!ticket.assignee){
      ticket.assignee = translations.unassigned;
    }

    return ticket;
  }.bind(this));
};

DataSource.prototype.showInstances = function(){
  var instances = this.getInstances();
  var keys = Object.keys(instances);

  return keys.length > 1;
};

Array.prototype.getUnique = function(){
  var u = {}, a = [];
  for(var i = 0, l = this.length; i < l; ++i){
    if(u.hasOwnProperty(this[i]) || (typeof this[i] == 'string' && u.hasOwnProperty(this[i].toLowerCase()) )) {
      continue;
    }
    a.push(this[i]);
    u[this[i]] = 1;
  }
  return a;
};

DataSource.prototype.getListByField = function(field){
  var tickets = this.getTicketsFiltered();

  tickets = tickets.filter(function(ticket){
    return ticket[field]? true : false;
  });

  var list = tickets.map(function(ticket){
    return ticket[field] ? ticket[field] : null;
  });

  if(list.length){
    return list.getUnique();
  }


  return [];
};

module.exports = new DataSource();
