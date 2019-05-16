"use strict";


// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // POST request to Mongo
    saveTweet: function(newTweet, callback) {
      db.collection("tweets").insertOne(newTweet, (err, res) => {
        callback(err, true);
     });
    },

    // Get all tweets in `db`, sorted by newest first
    getTweets: function(callback) {
      //passing mongo into factory function
      db.collection("tweets").find().toArray(callback);
    }

  };
}
