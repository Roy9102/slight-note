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

	getPhotos(){
		var images = []
		this.props.data.photos.forEach((ele) => {
			console.log(ele);
			images.push(
				<Image style={styles.image_card} source={ele} />
			)
		})
		return images;
	},

	render :function() {

		return (
			<View style={styles.detailContainer}>
				<ScrollView style={styles.scrollarea}>
					<Text style={styles.article}>{this.props.data.title}</Text>
					{this.getPhotos()}
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
		color:'#75675a',
		margin:12
	},
	image_card:{
		flex:1,
		backgroundColor:'#fff',
		height:160,
		margin:20,
		resizeMode: Image.resizeMode.cover,
		borderRadius:20,
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