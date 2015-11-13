/**
 * 事项标签
 * author Roy&Liz
 */

'use strict';

var React = require('react-native');
var detailPage = require('../../pages/detailPage');
var DB    = require('../../db');
var DBEvents = require('react-native-db-models').DBEvents;
var SPRING_CONFIG = {tension: 6, friction: 2}; //Soft spring


var {
	View,
	Text,
	Image,
	StyleSheet,
	TouchableHighlight,
	Animated
} = React;



var Business = React.createClass({
	getInitialState (){
		return {
			dragStartX : null,
			didSlideItem : null,
			pan : new Animated.ValueXY()
		}
	},
	getStyle () {
	return [
			styles.listItem, 
			{
				transform: this.state.pan.getTranslateTransform(),
			}
		];
	},

	ToggleItem (x){
		Animated.spring(this.state.pan, {
	        ...SPRING_CONFIG,
	        toValue: {x: x, y: 0}                        // return to start
	    }).start();
	},

	didStartDrag (evt){
		var x = evt.nativeEvent.pageX;
		if (x > 16) {
		    this.setState({ 
		    	dragStartX: x, 
		      	didSlideItem: false
		    });
		    return true;
		}
	},

	didMoveFinger (evt){
		var draggedAway = evt.nativeEvent.pageX - this.state.dragStartX;
		if (!this.state.didSlideItem && draggedAway > 20 && this.state.pan.x._value === 0 ) {
			this.ToggleItem(62);
			this.setState({ didSlideItem: true });
		}else if (!this.state.didSlideItem && draggedAway < -20 && this.state.pan.x._value === 62 ) {
			this.ToggleItem(0);
		}else{
			this.ToggleItem(0);
			this.onPress();
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
							source = {require('../../images/alarm.png')}
						/>
					)
				break;
			case 'photo' : 
				res = (
						<Image 
							style = {styles.cIcon}
							source = {require('../../images/photo.png')}
						/>
					)
				break;
			case 'taxi' : 
				res = (
						<Image 
							style = {styles.cIcon}
							source = {require('../../images/taxi.png')}
						/>
					)
				break;
			case 'record' : 
				res = (
						<Image 
							style = {styles.cIcon}
							source = {require('../../images/record.png')}
						/>
					)
				break;

		}
		return res
	},

	deleteItem (){
		DB.bussiness.remove_id(this.props._id,this.props.reFresh);
	},

	render () {
		var {
			literation,
			date,
			iconArray,
		} = this.props;
		return (
			<View style={styles.itemContainer} >
				<TouchableHighlight
					underlayColor = 'transparent'
					activeOpacity = {0.8}
					onPress={this.deleteItem}
				>
					<View style={styles.deleteIcon}>
						<Image style={styles.trash} source={require('../../images/trash.png')} />
						<Text style={styles.trashText}>删除</Text>
					</View>
				</TouchableHighlight>
				<Animated.View ref={'item_'+this.props._id} style={this.getStyle()}
					onStartShouldSetResponder={this.didStartDrag}
    				onResponderRelease={this.didMoveFinger}
				>
					<Image
						style={[styles.listicon,styles.ellipse]}
						source={require('../../images/ellipse.png')}
					/>
					<Text style={styles.literation}>{literation}</Text>
					<Text style={styles.date}>{date}</Text>
					<View style={styles.iconArray}>
						{this.getIconList(iconArray)}
					</View>
				</Animated.View>
				<Image
					style={[styles.listicon,styles.line]}
					source={require('../../images/line.png')}
				/>
			</View>
		)
	}
});


var styles = StyleSheet.create({
	itemContainer:{
		flex:1,
	},
	listItem:{
		backgroundColor:'#FFFFFF',
		height:72,
		borderRadius:6,
		padding:12,
		marginBottom:16,
		marginLeft:16,
		marginRight:16,
	},
	literation : {
		color:'#ae6137',
		backgroundColor:'rgb(255,255,255)',
		flex:1,
		marginLeft:20
	},
	listicon:{
		position:'absolute',
		backgroundColor:'rgba(0,0,0,0)',
		resizeMode: Image.resizeMode.contain,
	},
	line:{
		left:-10,
		top:37,
	},
	ellipse:{
		width:16,
		left:3,
		top:30,
	},
	deleteIcon:{
		position:'absolute',
		backgroundColor:'#fc4859',
		flexDirection:'row',
		padding:8,
		left:21,
		top:24
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
		left:20,
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