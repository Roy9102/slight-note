/**
 * DB.js 
 * @author Roychen
 */

'use strict';

var RNDBModel = require('react-native-db-models')

var DB = {
    "bussiness": new RNDBModel.create_db('bussiness'),
}

module.exports = DB;
