/**
 * Created by Sean on 4/13/2017.
 */
var RtmClient = require('@slack/client').RtmClient;
var MemoryDataStore = require('@slack/client').MemoryDataStore;

var bot_token = process.env.SLACK_BOT_TOKEN || '';

module.exports = new RtmClient(bot_token, {
    dataStore: new MemoryDataStore()
});