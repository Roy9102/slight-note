"use strict";


var React               = require('react-native');
var RefreshableListView = require('react-native-refreshable-listview');
var Business            = require('../components/business/business');
var SotreDB             = require('../components/EventEmit/SotreEvent');


var {
	StyleSheet,
	Text,
	View,
	Image,
	ListView,
	ScrollView,
	TouchableHighlight
} = React;



var Homepage = React.createClass({
	getInitialState: function() {

		var dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		return {
		  dataSource: dataSource
		};
	},

	fetchData(){
		var me = this;
		SotreDB.getAll().then(function(result){
			console.log(result);
			me.setState({
            	dataSource: me.state.dataSource.cloneWithRows(me.ObjToArray(result)),
            })
		});
  		
	},

	ObjToArray (obj){
		var arr = [];
		for(var key in obj){
			arr[key] = obj[key];
		}
		return arr;
	},

	componentDidMount (){
		var self = this;
		this.fetchData();
		SotreDB.on('bussiness_change',this.fetchData);
	},

	componentWillUnmount(){
		SotreDB.off('bussiness_change');
	},

	onClick (){
		console.log(this)

	},

  	render_list : function(rowData){
      	return (
	        <Business 
	        	key = {rowData.key}
	          	goToDetail = {this.props.toRoute}
	          	reFresh = {this.fetchData}
	        	{...rowData}
	        />
     	)
  	},

	
  	render: function() {
	    return (
		    <TouchableHighlight 
			    style={styles.container}
				underlayColor = "#fcf6dc"
				activeOpacity = {1}
				onPress = {this.onClick}
			>
	        	<RefreshableListView
		          	style              = {styles.listStyle}
		          	refreshDescription = "Pull to Refresh"
		          	loadData           = {this.fetchData}
		            dataSource 		   = {this.state.dataSource}
		            renderRow          = {this.render_list}
		        >
		        </RefreshableListView>
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
  	marginTop:12,
  	flex:1,
  },
});


module.exports = Homepage;