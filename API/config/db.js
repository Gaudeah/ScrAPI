/*
**
**	Project : ScrAPI
**	File : This is the database config file
**
*/

let mongoose = exports.mongoose = require('mongoose');

var opts = { db: { native_parser: true }}
const DB_C = exports.mongoose.connection = mongoose.createConnection('mongodb://dockerimages_db_1:27017/scrapi', opts);
