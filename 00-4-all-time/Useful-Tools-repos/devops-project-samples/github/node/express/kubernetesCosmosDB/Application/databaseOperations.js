var MongoClient = require("mongodb").MongoClient;
var fs = require('fs');
var obj = JSON.parse(fs.readFileSync('connectionData.json', 'utf8'));
var connectionString = obj.connectionString;
var databaseName = obj.databaseName;
var collectionName = obj.collectionName;

module.exports = {

    queryCount: function (callback, errorCallback) {
        console.log(`Querying container:\n${collectionName}`);
        MongoClient.connect(connectionString, { useNewUrlParser: true }, function (err, client) {
            if (err != null) {
                errorCallback(err);
                return;
            }
            console.log("Connected correctly to server");
            var db = client.db(databaseName);
            // Get the documents collection
            const collection = db.collection(collectionName);
            // Find some documents
            collection.count(function (err, count) {
                if (err != null) {
                    errorCallback(err)
                }
                console.log(`Found ${count} records`);
                callback(count);
                client.close();
            });
        });
    },

    addRecord: function (pageName, callback, errorCallback) {
        var milliseconds = (new Date).getTime().toString();
        var itemBody = {
            "id": milliseconds,
            "page": pageName
        };
        MongoClient.connect(connectionString, { useNewUrlParser: true }, function (err, client) {
            if (err != null) {
                errorCallback(err);
                return;
            }
            console.log("Connected correctly to server");
            var db = client.db(databaseName);
            // Get the documents collection
            const collection = db.collection(collectionName);
            // Insert some documents
            collection.insertMany([itemBody], function (err, result) {
                if (err != null) {
                    errorCallback(err)
                }
                callback();
                client.close();
            });
        });
    }
}
