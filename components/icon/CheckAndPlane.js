'use strict';

var React = require('react-native');
var DB    = require('../../db');
var DBEvents = require('react-native-db-models').DBEvents;
var {
	StyleSheet,
	View,
	TouchableHighlight,
	Image
} = React;


var CheckIcon = React.createClass({
	completeInput (){
	},

	render (){
		return (
			<TouchableHighlight
				style={style.check}
				underlayColor = 'transparent'
				activeOpacity = "0.8"
				onPress = {this.completeInput}
			>
				<Image style = {style.icon} source = {require('image!check')} />
			</TouchableHighlight>
		)
	}
})

var PlaneIcon = React.createClass({
	completeInput (){

	},

	render (){
		return (
			<TouchableHighlight
				style={style.plane}
				underlayColor = 'transparent'
				activeOpacity = "0.8"
				onPress = {this.completeInput}
			>
				<Image style = {style.icon} source = {require('image!plane')} />
			</TouchableHighlight>
		)
	}
})


var CheckAndPlane = React.createClass({
	render (){
		return (
			<View style = {style.iconContainer}>
				<CheckIcon />
				<PlaneIcon />
			</View>
		)
	}
})


var style = StyleSheet.create({
	iconContainer : {
		flexDirection:'row',
		right:15,
		top:5,
		justifyContent:'space-around',
		alignItems:'center',
		width:64
	},
	icon : {
		width:24,
		height:21,
	}

})


module.exports = CheckAndPlane;

