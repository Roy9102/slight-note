'use strict';


var React = require('react-native');
var Business = require('../components/business/business');
var DB    = require('../db');
var DBEvents = require('react-native-db-models').DBEvents;

var {
	StyleSheet,
	Text,
	View,
	Image,
	ListView,
	ScrollView,
	TouchableHighlight
} = React;

var {
  RefresherListView,
  LoadingActivityIndicatorIOS
} = require('react-native-refresher');


var Homepage = React.createClass({
	getInitialState: function() {
		var dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		return {
		  dataSource: dataSource
		};
	},

	fetchData(){
		var me = this;
		DB.bussiness.get_all(function(result){
            // console.log(result);
            me.setState({
            	dataSource: me.state.dataSource.cloneWithRows(me.ObjToArray(result.rows)),
            })
        })
  		
	},

	ObjToArray (obj){
		var arr = [];
		for(var key in obj){
			arr[key] = obj[key];
		}
		return arr;
	},

	componentDidMount (){
		this.fetchData()
	},

	onPress (){
		console.log(this)
	},

  	render_list : function(rowData){
  		var ref = 'item_' + rowData._id;
      	return (
	        <Business 
	        	{...rowData}
	        	literation = {rowData.title}
	        	date = {rowData.date}
	          	iconArray = {rowData.iconArray}
	          	goToDetail = {this.props.toRoute}
	          	reFresh = {this.fetchData}/>
     	)
  	},

	
  	render: function() {
	    return (
		    <TouchableHighlight 
			    style={styles.container}
				underlayColor = "#fcf6dc"
				activeOpacity = {1}
				onPress = {this.onPress}
			>
	        	<RefresherListView
		          	threshold = {30}
		          	style = {styles.listStyle}
		          	onRefresh = {this.fetchData}
	      			indicator = {<LoadingActivityIndicatorIOS />}
		            dataSource = {this.state.dataSource}
		            renderRow = {this.render_list}
		        />
		    </TouchableHighlight>
	    );
	  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcf6dc',
  },
  listStyle:{
  	flex:1,
  },
});


module.exports = Homepage