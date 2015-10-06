'use strict';

var React = require('react-native');

var {
	StyleSheet,
	Text,
	View,
	Image,
	ListView,
	ScrollView,
	TouchableHighlight
} = React;


var ItemDetails = React.createClass({
	render :function() {
		return (
			<View style={styles.detailContainer}>
				<ScrollView style={styles.scrollarea}>
					<Text style={styles.article}>{this.props.data.title}</Text>
				</ScrollView>
				
				<View style={styles.dateView}>
					<Text style={styles.date}>{this.props.data.date}</Text>
				</View>

				<View style={styles.locationView}>
					<Image style={styles.posIcon} source={require('image!posIcon')} />
					<Text style={styles.address}>{this.props.data.address}</Text>
				</View>
				
			</View>
		)
	}
});

var styles = StyleSheet.create({
	detailContainer:{
		flex:1,
		backgroundColor:'#fcfaf0',
	},
	scrollarea:{
		flex:1,
	},
	article:{
		fontSize:13,
		color:'#75675a'
	},
	dateView:{
		alignSelf:'flex-end',
		marginRight:12,
		marginBottom:6,
	},
	locationView:{
		flexDirection:'row',
		alignSelf:'flex-end',
		marginRight:12,
		marginBottom:6,
	},
	date:{
		fontSize:13,
		color:'#75675a'
	},

	posIcon:{
		width:16,
		height:16,
		resizeMode: Image.resizeMode.contain,
	},
	address:{
		fontSize:13,
		color:'#75675a'
	},
})

module.exports  = ItemDetails;