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
            console.log(result);
            me.setState({
            	dataSource: me.state.dataSource.cloneWithRows(me.OBJtoARRAY(result.rows)),
            })
        })
	},

	OBJtoARRAY (obj){
		var arr = [];
		for(var key in obj){
			arr.push(obj[key]);
		}
		return arr;
	},

	componentDidMount (){
		this.fetchData();
	},

  	render_list : function(rowData){
  		console.log(rowData);
      	return (
	        <Business 
	        	{...rowData}
	        	literation = {rowData.title}
	        	date = {rowData.date}
	          	iconArray = {rowData.iconArray}
	          	goToDetail = {this.props.toRoute}
	        />
     	)
  	},

	
  	render: function() {
	    return (
		    <View style={styles.container}>
		        
		          <ListView
		            style={styles.listStyle}
		            dataSource={this.state.dataSource}
		            renderRow={this.render_list}
		          />
		        
		    </View>
	    );
	  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcf6dc',
  },
  scrollview:{
  	marginTop:-32,
  	backgroundColor:'green',
  	flex:1,
  },
  listStyle:{
  	flexDirection:'column',
  	backgroundColor:'red',
  }
});


module.exports = Homepage