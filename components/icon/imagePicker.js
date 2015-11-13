'use strict';


var React = require('react-native');
var UIImagePickerManager = require('NativeModules').UIImagePickerManager;

var {
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  ScrollView,
  TouchableHighlight,
  TextInput,
  CameraRoll,
  AsyncStorage,
  Animated,
  NativeModules: {
    UIImagePickerManager
  }
} = React;

var options = {
	title: 'Select your Moments', // specify null or empty string to remove the title
	cancelButtonTitle: 'Cancel',
	takePhotoButtonTitle: 'Take Photo...', // specify null or empty string to remove this button
	chooseFromLibraryButtonTitle: 'Choose from Library...', // specify null or empty string to remove this button
	// customButtons: {
	// 	'Choose Photo from Facebook': 'fb', // [Button Text] : [String returned upon selection]
	// },
	maxWidth: 100,
	maxHeight: 100,
	quality: 1,
	allowsEditing: false, // Built in iOS functionality to resize/reposition the image
	noData: false, // Disables the base64 `data` field from being generated (greatly improves performance on large photos)
	storageOptions: { // if this key is provided, the image will get saved in the documents directory (rather than a temporary directory)
		skipBackup: true, // image will NOT be backed up to icloud
		path: 'Xiaowa' // will save image at /Documents/images rather than the root
	}
};

var ImagePicker = React.createClass({
	onPress(){
		UIImagePickerManager.showImagePicker(options, (didCancel, response) => {
			console.log('Response = ', response);

		
			if (didCancel) {
				console.log('User cancelled image picker');
			}
			else {
				
				// You can display the image using either:
				const source = {uri: 'data:image/jpeg;base64,' + response.data, isStatic: true};
				// const source = {uri: response.uri.replace('file://', ''), isStatic: true};

				this.props.addImage(source)				
			}
		});
	},
	render (){
		return (
			<TouchableHighlight
                underlayColor = 'rgba(0,0,0,0)'
                activeOpacity = {0.8}
                onPress = {this.onPress}
            >
                <Image style={styles.icon} source={require('../../images/photo.png')} />
            </TouchableHighlight>	
		)
	}
})


var styles = StyleSheet.create({
	icon:{
	    width:30,
	    height:30,
	    margin:20
	}
})


module.exports = ImagePicker;