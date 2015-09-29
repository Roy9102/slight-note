'use strict';

var React = require('react-native');

var {
	StyleSheet,
	View,
	Image,
	TouchableHighlight
} = React;

var XiaoWaBtn = React.createClass({
	onPress () {
	},

	render () {
		return (
			<TouchableHighlight onPress = {this.onPress} underlayColor = 'transparent' activeOpacity = "0.8" >
				<Image 
					source = {require('image!xiaowa')}
					style = {style.xiaowa}
				/>
			</TouchableHighlight>	
		)
	}
})

var style = StyleSheet.create({
	xiaowa:{
		position:'absolute',
		width:80,
		height:80,
		backgroundColor:'rgba(0,0,0,0)',
		left:0,
		top:0,
		resizeMode: Image.resizeMode.contain
	}
})


module.exports = XiaoWaBtn;