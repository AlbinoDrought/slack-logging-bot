/**
 * Created by Sean on 4/13/2017.
 */
var bulk = require('bulk-require');
var client = require('./rtm-client');
var messageStore = require('./message-store');

var handlers = bulk(__dirname + '/handlers', ['*.js']);

for(var i in handlers) {
    handlers[i](client, messageStore);
}

client.start();