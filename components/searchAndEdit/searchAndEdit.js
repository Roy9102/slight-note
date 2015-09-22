'use strict';

var React = require('react-native');

var {
	StyleSheet,
	View,
	Text,
	TextInput,
	Image,
	TouchableHighlight
} = React;

var SearchInput = React.createClass({
	render () {
		return (
			<TextInput style={style.input} placeholder="Search Twitter" />
		)
	}
})


var searchAndEdit = React.createClass({
	render (){
		return (
			<View style={style.container}>
			
				<Image style={style.icon} source={require('image!add_icon')}/>
			</View>
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
	input: {
	    backgroundColor: '#3f88bf',
	    width: 220,
	    height: 32,
	    marginTop: 6,
	    paddingLeft: 10,
	    color: 'white',
	    borderRadius: 4
	  }
})


module.exports = searchAndEdit;