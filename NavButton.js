
'use strict';

var React = require('react-native');

var {
	StyleSheet,
  	Text,
  	View,
  	Image,
} = React;


var style = StyleSheet.create({
	icon : {
		width:12,
		height:12
	},
	iconText : {
		color:'#fff',
		fontSize:16
	}
})


var NavBtn = React.createClass({
	onPress () {
		this.props.onPress();
	},

	render () {
		var res = null;
		
		return (
			<View>
				<Image onPress = {this.onPress}  source = {require('image!alarm')} style = {style.icon} />
			</View>
		);
	}
})


module.exports = NavBtn;