'use strict';

var React = require('react-native');
var addNew = require('../../pages/addNew');
var CheckAndPlane = require('./CheckAndPlane');

var {
	StyleSheet,
	View,
	Text,
	TextInput,
	Image,
	TouchableHighlight
} = React;

var CreateOne = React.createClass({
	addOne (){
		this.props.toRoute({
			name:'create',
			component:addNew,
			rightCorner:CheckAndPlane
		})
	},

	render (){
		return (
			<TouchableHighlight 
				style={style.container}
				underlayColor = 'transparent'
				activeOpacity = {0.8}
				onPress = {this.addOne}
			>
				<Image style={style.icon} source={require('image!add_icon')}/>
			</TouchableHighlight>
		)
	}
})

var style = StyleSheet.create({
	container:{
		borderRadius:16,
	    backgroundColor:'#6fc6c0',
	    width:32,
	    height:32,
	    justifyContent:'space-around',
	    alignItems:'center',
	    right:10,
	    top:5,
	},
	icon:{
		width:18,
		height:18,
    	resizeMode: Image.resizeMode.contain,
	},
})


module.exports = CreateOne;