'use strict';

var React = require('react-native');
// var RCTDeviceEventEmitter = require('RCTDeviceEventEmitter');

var {
	StyleSheet,
	View,
	TouchableHighlight,
	Image
} = React;


var CheckIcon = React.createClass({
	completeInput (){

	},
	componentDidMount(){
		
	},

	render (){
		return (
			<TouchableHighlight
				style={style.check}
				underlayColor = '#6fc6c0'
				activeOpacity = {0.8}
				onPress = {this.props.customAction}
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
				underlayColor = '#6fc6c0'
				activeOpacity = {0.8}
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
		right:12,
		top:5,
		justifyContent:'space-around',
		alignItems:'center',
		width:64
	},
	check:{
		backgroundColor:'#6fc6c0',
		borderRadius:16,
		width:32,
		height:32,
		justifyContent:'space-around',
		alignItems:'center',
		marginRight:24
	},
	plane:{
		backgroundColor:'#6fc6c0',
		borderRadius:16,
		width:32,
		height:32,
		justifyContent:'space-around',
		alignItems:'center',
	},
	icon : {
		width:18,
		height:15,
		resizeMode: Image.resizeMode.contain,
		backgroundColor:'transparent',
	}

})


module.exports = CheckAndPlane;

