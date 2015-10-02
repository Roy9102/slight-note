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
	TouchableHighlight,
	Animated
} = React;

var Dimensions = require('Dimensions');
var {
  width,
  height
} = Dimensions.get('window');

var SPRING_CONFIG = {tension: 2, friction: 3}; //Soft spring
var Business = React.createClass({
	getInitialState (){
		return {
			dragStartX : null,
			didSwitchView : null,
			pan : new Animated.ValueXY()
		}
	},
	getStyle () {
	return [
			styles.listItem, 
			{
				transform: this.state.pan.getTranslateTransform()
			}
		];
	},

	moveItem (){
		 Animated.spring(this.state.pan, {
	        ...SPRING_CONFIG,
	        toValue: {x: 62, y: 0}                        // return to start
	    }).start();
	},

	didStartDrag (evt){
		var x = evt.nativeEvent.pageX;
		if (x > 16) {
		    this.setState({ 
		    	dragStartX: x, 
		      	didSwitchView: false
		    });
		    return true;
		}
	},

	didMoveFinger (evt){
		var draggedAway = ((evt.nativeEvent.pageX - this.state.dragStartX) > 30);
		if (!this.state.didSwitchView && draggedAway) {
			this.moveItem();
			this.setState({ didSwitchView: true });
		}else{
			return false;
			
		}

	},

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
			<View style={styles.itemContainer} >
				<View style={styles.deleteIcon}>
					<Image style={styles.trash} source={require('image!trash')} />
					<Text style={styles.trashText}>删除</Text>
				</View>
				<TouchableHighlight style={styles.touchEffect}
					underlayColor = 'rgba(0,0,0,0)'
					activeOpacity = "0.8"
					ref = "touchable"
					onPress = {this.onPress}
				>
					<Animated.View style={this.getStyle()}
						onStartShouldSetResponder={this.didStartDrag}
        				onResponderMove={this.didMoveFinger}

					>
						<Image
							style={[styles.listicon,styles.ellipse]}
							source={require('image!ellipse')}
						/>
						<Text style={styles.literation}>{literation}</Text>
						<Text style={styles.date}>{date}</Text>
						<View style={styles.iconArray}>
							{this.getIconList(iconArray)}
						</View>
					</Animated.View>
				</TouchableHighlight>
				<Image
					style={[styles.listicon,styles.line]}
					source={require('image!line')}
				/>
			</View>
		)
	}
});


var styles = StyleSheet.create({
	itemContainer:{
		position:'relative',
		flex:1,
		marginTop:0,
		left:0
	},
	touchEffect:{
		backgroundColor:'rgba(0,0,0,0)',
		margin:16,
	},
	listItem:{
		backgroundColor:'#FFFFFF',
		height:62,
		borderRadius:6,
		padding:12,
	},
	literation : {
		color:'#ae6137',
		backgroundColor:'rgb(255,255,255)',
		flex:1,
		marginLeft:12
	},
	listicon:{
		position:'absolute',
		backgroundColor:'rgba(0,0,0,0)',
		resizeMode: Image.resizeMode.contain,
		width:24,
	},
	line:{
		height:12,
		left:0,
		top:45,
	},
	ellipse:{
		width:16,
		left:3,
		top:25,
	},
	deleteIcon:{
		position:'absolute',
		backgroundColor:'#fc4859',
		flexDirection:'row',
		padding:8,
		left:21,
		top:34
	},
	trash:{
		height:14,
		resizeMode: Image.resizeMode.contain,
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
		bottom:6,
		left:12,
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
		bottom:6
	}
});

module.exports = Business;