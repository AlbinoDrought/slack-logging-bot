# slack-logging-bot

Connects to Slack using a custom bot token, and logs messages to disk.

## Usage

1. [Get a "custom bot" token](https://my.slack.com/apps/A0F7YS25R-bots)

2. Store your token in the environment variable `SLACK_BOT_TOKEN` (`set SLACK_BOT_TOKEN=token` for Windows)

3. For the first run, install required packages with `npm install`

4. Run the bot with `npm start`

## Logged Data

Logged data is stored in `messages.db` using [nedb](https://github.com/louischatriot/nedb). This application only logs the messages and does not provide other functionality.