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
				<SearchInput />
				<Image style={style.icon} source={require('../../images/add_icon.png')}/>
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
	    backgroundColor: 'transparent',
	    width: 200,
	    height: 32,
	    marginTop: 6,
	    color: 'white',
	    borderRadius: 4,
	    borderWidth:1,
	    borderColor:'#ffffff'
	  }
})


module.exports = searchAndEdit;