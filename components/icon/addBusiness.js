'use strict';

var React = require('react-native');
var addNew = require('../../pages/addNew');

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
			rightCorner:''
		})
	},

	render (){
		return (
			<TouchableHighlight 
				style={style.container}
				underlayColor = 'transparent'
				activeOpacity = "0.8"
				onPress = {this.addOne}
			>
				<Image style={style.icon} source={require('image!add_icon')}/>
			</TouchableHighlight>
		)
	}
})

var style = StyleSheet.create({
	container:{
		flexDirection:'row',
	},
	icon:{
		width:21,
		height:21,
		marginTop: 4,
    	marginRight: 15
	},
})


module.exports = CreateOne;