/**
 * Created by Sean on 4/13/2017.
 */
var CLIENT_EVENTS = require('@slack/client').CLIENT_EVENTS;

module.exports = function(client) {
    client.on(CLIENT_EVENTS.RTM.RTM_CONNECTION_OPENED, function() {
        // Get the user's name
        var user = client.dataStore.getUserById(client.activeUserId);

        // Get the team's name
        var team = client.dataStore.getTeamById(client.activeTeamId);

        // Log the slack team name and the bot's name
        console.log('Connected to ' + team.name + ' as ' + user.name);
    });
};