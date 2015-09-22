/**
 * 事项标签
 * author Roy&Liz
 */

'use strict';

var React = require('react-native');

var {
	View,
	Text,
	Image,
	StyleSheet,
	TouchableHighlight
} = React;


var Business = React.createClass({
	onPress () {

	},

	getIconList (arr) {
		var res = [];
		for ( var i = 0 ; i < arr.length; i++ ){
			res.push(this.getIconImg(arr[i]));
		}
		console.log(res);
		return res;
	},

	getIconImg (icon) {
		var res = null;
		switch(icon){
			case 'alarm' : 
				res = (
						<Image 
							style = {styles.cIcon}
							source = {require('image!alarm')}
						/>
					)
				break;
			case 'img_set' : 
				res = (
						<Image 
							style = {styles.cIcon}
							source = {require('image!img_set')}
						/>
					)
				break;
			case 'taxi' : 
				res = (
						<Image 
							style = {styles.cIcon}
							source = {require('image!taxi')}
						/>
					)
				break;
			case 'record' : 
				res = (
						<Image 
							style = {styles.cIcon}
							source = {require('image!record')}
						/>
					)
				break;

		}
		return res
	},

	render () {
		var {
			literation,
			date,
			iconArray,
		} = this.props;
		return (
			<TouchableHighlight style={styles.touchEffect}
				underlayColor = 'rgba(0,0,0,0)'
				activeOpacity = "0.8"
			>
				<View style={styles.listItem}>
					<Image
						style={styles.listicon}
						source={require('image!listIcon')}
					/>
					<Text style={styles.literation}>{literation}</Text>
					<Text style={styles.date}>{date}</Text>
					<View style={styles.iconArray}>
						{this.getIconList(iconArray)}
					</View>
				</View>
			</TouchableHighlight>
		)
	}
});


var styles = StyleSheet.create({
	touchEffect:{
		backgroundColor:'rgba(0,0,0,0)',
	},
	listItem:{
		height:62,
		backgroundColor:'#FFFFFF',
		borderRadius:6,
		margin:16,
		marginTop:0,
	},
	literation : {
		color:'#ae6137',
		backgroundColor:'rgba(0,0,0,0)',
		padding:12,
		paddingLeft:24,
		flex:1,
	},
	listicon:{
		position:'absolute',
		height:22,
		resizeMode: Image.resizeMode.contain,
		left:-50,
		top:14,
		backgroundColor:'rgba(0,0,0,0)'
	},
	iconArray:{
		position:'absolute',
		backgroundColor:'rgba(0,0,0,0)',
		flexDirection:'row',
		bottom:6,
		left:12,
	},
	cIcon:{
		flex:1,
		position:'relative',
		width:21,
		height:21,
		left:12
	},
	date:{
		position:'absolute',
		color:'#ae6137',
		flex:1,
		fontSize:10,
		right:6,
		bottom:6
	}
});

module.exports = Business;