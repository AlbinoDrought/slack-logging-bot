/**
 * Created by Sean on 4/13/2017.
 */
var RTM_EVENTS = require('@slack/client').RTM_EVENTS;

var convertUser = function(client, userId) {
    var user = client.dataStore.getUserById(userId);

    var name = "",
        realName = "";

    if(user) {
        name = user.name;
        realName = user.real_name;
    }

    return {
        id: userId,
        name: name,
        realName: realName
    };
};

var convertChannel = function(client, channelId) {
    // if channel is private, channel will be `undefined`
    var channel = client.dataStore.getChannelById(channelId);

    var name = "";

    if(channel) {
        name = channel.name;
    }

    return {
        id: channelId,
        name: name
    };
};

var convertTeam = function(client, teamId) {
    var team = client.dataStore.getTeamById(teamId);

    var name = "";

    if(team) {
        name = team.name;
    }

    return {
        id: teamId,
        name: name
    };
};

var convertMessage = function(client, rawMessage) {
    return {
        user: convertUser(client, rawMessage.user),
        channel: convertChannel(client, rawMessage.channel),
        team: convertTeam(client, rawMessage.team),

        text: rawMessage.text,
        timestamp: rawMessage.ts
    };
};

module.exports = function(client, messageStore) {
    client.on(RTM_EVENTS.MESSAGE, function handleRtmMessage(rawMessage) {
        if(!rawMessage.text) return;

        var convertedMessage = convertMessage(client, rawMessage);

        messageStore.log(convertedMessage);
        console.log("Logged message from @" + convertedMessage.user.name + " to #" + convertedMessage.channel.name);
    });
};