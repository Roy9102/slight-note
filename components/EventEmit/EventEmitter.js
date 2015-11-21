


'use strict';

var React    = require('react-native');
var DB       = require('../db');
var DBEvents = require('react-native-db-models').DBEvents;


var Create = function(data){
	console.log(data);

}

var StoreEvent = {
	getAll : function(){
		var promise = new Promise(function(resolve,reject){
			DB.bussiness.get_all(function(result){
	            // console.log(result);
	           reslove(result.rows);
	        })
		});
	}
} 



module.exports = SotreEvent;
