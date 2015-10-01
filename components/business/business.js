/**
 * 事项标签
 * author Roy&Liz
 */

'use strict';

var React = require('react-native');
var detailPage = require('../../pages/detailPage');

var {
	View,
	Text,
	Image,
	StyleSheet,
	TouchableHighlight
} = React;


var Business = React.createClass({
	onPress () {
		this.props.goToDetail({
			name:'ItemDetail',
			component:detailPage,
			data:this.props
		})
	},

	getIconList (arr) {
		var res = [];
		for ( var i = 0 ; i < arr.length; i++ ){
			res.push(this.getIconImg(arr[i]));
		}
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
			case 'photo' : 
				res = (
						<Image 
							style = {styles.cIcon}
							source = {require('image!photo')}
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
			<View style={styles.itemContainer}>
				<TouchableHighlight style={styles.touchEffect}
					underlayColor = 'rgba(0,0,0,0)'
					activeOpacity = "0.8"
					onPress = {this.onPress}
				>
					<View style={styles.listItem}>
						<Image
							style={[styles.listicon,styles.line]}
							source={require('image!line')}
						/>
						<Image
							style={[styles.listicon,styles.ellipse]}
							source={require('image!ellipse')}
						/>
						<View>
							<Text style={styles.literation}>{literation}</Text>
							<Text style={styles.date}>{date}</Text>
							<View style={styles.iconArray}>
								{this.getIconList(iconArray)}
							</View>
						</View>
					</View>
				</TouchableHighlight>
				
					<View style={styles.deleteIcon}>
						<Image style={styles.trash} source={require('image!trash')} />
						<Text style={styles.trashText}>删除</Text>
					</View>
				
			</View>
		)
	}
});


var styles = StyleSheet.create({
	itemContainer:{
		position:'relative',
		flex:1,
		marginTop:0,
	},
	touchEffect:{
		backgroundColor:'rgba(0,0,0,0)',
	},
	listItem:{
		backgroundColor:'#FFFFFF',
		height:62,
		borderRadius:6,
		padding:12,
		margin:10,
	},
	literation : {
		color:'#ae6137',
		backgroundColor:'rgb(255,255,255)',
		paddingLeft:12,
		flex:1,
	},
	listicon:{
		position:'absolute',
		resizeMode: Image.resizeMode.contain,
		backgroundColor:'rgba(0,0,0,0)'
	},
	line:{
		width:16,
		left:-10,
		top:28,
	},
	ellipse:{
		height:12,
		left:0,
		top:25,
	},
	deleteIcon:{
		position:'absolute',
		backgroundColor:'#fc4859',
		flexDirection:'row',
		padding:8,
		left:13,
		top:25
	},
	trash:{
		height:14,
	},
	trashText:{
		color:'#fff',
		paddingLeft:8,
		fontSize:10,
		lineHeight:11
	},
	iconArray:{
		position:'absolute',
		backgroundColor:'rgba(0,0,0,0)',
		flexDirection:'row',
		bottom:-24,
		left:0,
	},
	cIcon:{
		flex:1,
		position:'relative',
		width:16,
		height:16,
		left:12,
		marginRight:12
	},
	date:{
		position:'absolute',
		color:'#ae6137',
		flex:1,
		fontSize:10,
		right:6,
		bottom:-24
	}
});

module.exports = Business;