


'use strict';

var React    = require('react-native');
var DB       = require('../../db');
var DBEvents = require('react-native-db-models').DBEvents;

const BUSSINESS_CHANGE = 'bussiness_change';

class StoreEvent {

	construtor (){
		this.temporaryItem = null;
	};
	
	getAll(){
		var promise = new Promise(function(resolve,reject){
			DB.bussiness.get_all(function(result){
	           resolve(result.rows);
	        },function(){
	        	reject('获取数据失败')
	        });
		});
		return promise;
	};

	createTempItem(data){
		console.log(data);
		this.temporaryItem = data;
	};

	saveItem(){
		DB.bussiness.add(this.temporaryItem,function(result){
          DBEvents.emit(BUSSINESS_CHANGE);
        })
	};
	

	updateItem(data){
		
	};

	on(event_type,callback){
		console.log('fdsfdas');
		DBEvents.on(event_type,callback);
	};

	off(event_type,callback){
		DBEvents.off(event_type,callback);
	};
} 



module.exports = new StoreEvent();
