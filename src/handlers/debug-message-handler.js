var RTM_EVENTS = require('@slack/client').RTM_EVENTS;
var debug = process.env.DEBUG_MODE;

var debugFunc;

if(debug) {
    debugFunc = function(client) {
        client.on(RTM_EVENTS.MESSAGE, function handleRtmMessage(rawMessage) {
            console.log(rawMessage);
        });
    };
} else {
    debugFunc = function() {};
}

module.exports = debugFunc;