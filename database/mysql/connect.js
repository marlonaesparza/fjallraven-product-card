const MySQL = require('mysql');
const config = require('./config.js');
const Promise = require('bluebird');

const connection = MySQL.createConnection(config.params);
const db = Promise.promisifyAll(connection, {multiArgs: true});

db.connectAsync()
  .then(() => { console.log('Connection Id:', db.threadId)})
  .then(() => { config.createDatabase(db) });

module.exports = db;
