/**
 * Created by Sean on 4/13/2017.
 */
var Datastore = require('nedb');

var db = new Datastore({ filename: 'messages.db' });

db.loadDatabase();

module.exports = {
    log: function(message) {
        db.insert(message); // wew lad
    }
};