// Hook in to constellation UI

var Constellation = Package["constellation:console"].API;
    
Constellation.addTab({
  name: 'Connection',
  headerContentTemplate: 'Constellation_connection',
  noOpen:true,
  onClick: "toggleConnection"
});

Constellation.registerCallbacks({
  toggleConnection : function () {
	if (Meteor.status().connected) {
	  Meteor.disconnect();	
	}
	else {
	  Meteor.reconnect();	
	}
  }
});

Template.Constellation_connection.helpers({
  connection: function () {
    return Meteor.status().connected;  
  }
});
	