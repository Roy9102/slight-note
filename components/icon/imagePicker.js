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
	title: 'Select Photo',
	cancelButtonTitle: 'Cancel',
	takePhotoButtonTitle: 'Take Photo...',
	takePhotoButtonHidden: false,
	chooseFromLibraryButtonTitle: 'Choose from Library...',
	chooseFromLibraryButtonHidden: false,
	maxWidth: 100,
	maxHeight: 100,
	returnBase64Image: false,
	returnIsVertical: false,
	quality: 0.2,
	allowsEditing: true, // Built in iOS functionality to resize/reposition the image
	//storageOptions: {   // if provided, the image will get saved in the documents directory (rather than tmp directory)
	//  skipBackup: true, // will set attribute so the image is not backed up to iCloud
	//  path: "images",   // will save image at /Documents/images rather than the root
	//}
};

var ImagePicker = React.createClass({
	getInitialState (){
		return {
			source:null
		}
	},

	onPress(){
		UIImagePickerManager.showImagePicker(options, (responseType, response) => {
		
				if (responseType !== 'cancel') {
					let source;
				if (responseType === 'data') { // New photo taken OR passed returnBase64Image true -  response is the 64 bit encoded image data string
				  	source = {uri: 'data:image/jpeg;base64,' + response, isStatic: true};
				  	this.setState({
				  		source :source
				  	})
				}
				else if (responseType === 'uri') { // Selected from library - response is the URI to the local file asset
				  	source = {uri: response.replace('file://', ''), isStatic: true};
				  	this.setState({
				  		source :source
				  	})
				}
				this.props.addImage(source);
			}
		});
	},
	render (){
		return (
			<TouchableHighlight
                underlayColor = 'rgba(0,0,0,0)'
                activeOpacity = "0.8"
                onPress = {this.onPress}
            >
                <Image style={styles.icon} source={require('image!photo')} />
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