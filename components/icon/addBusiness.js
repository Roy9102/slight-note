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

/**
 * [getFormatDate description] 获取格式化日期
 * @param  {[string]} str [yyyy-MM-dd HH:mm:ss]
 * @return {[string]}     [date]
 */
var getFormatDate = function(str){
    var d = new Date();
    var o = {
        'y+': d.getFullYear(),
        'M+': (d.getMonth() + 1) > 9 ? (d.getMonth() + 1) : ('0' + (d.getMonth() + 1)),
        'dd': d.getDate() > 9 ? (d.getDate()) : ('0' + (d.getDate())),
        'H+': d.getHours() > 9 ? (d.getHours()) : ('0' + (d.getHours())),
        'm+': d.getMinutes() > 9 ? (d.getMinutes()) : ('0' + (d.getMinutes())),
        's+': d.getSeconds() > 9 ? (d.getSeconds()) : ('0' + (d.getSeconds())),
    }

    for (var i in o){
        var reg = new RegExp( '(' + i + ')' );
        if ( reg.test(str) ) str = str.replace(RegExp.$1, o[i] );
    }
    return str;
}

var CreateOne = React.createClass({
	addOne (){
		this.props.toRoute({
			name:'create',
			component:addNew,
			rightCorner:CheckAndPlane,
			data:{
				date:getFormatDate('yyyy年MM月dd日 HH:mm')
			}
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