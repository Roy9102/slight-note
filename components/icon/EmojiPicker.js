'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  ListView,
  ScrollView,
  Image,
  TouchableHighlight
} = React;


var EmojiPicker = React.createClass({

	onClick(){
		this.props.addEmoji()
	},

	render (){

		return(
			<TouchableHighlight
        underlayColor = "rgba(0,0,0,0)"
        activeOpacity = {0.8}
        onPress       = {this.onClick}
      >
          <Image style={styles.icon} source={require('../../images/smiley.png')} />
      </TouchableHighlight>
		)

	}
})

var styles = StyleSheet.create({
	icon:{
    	width:  30,
	    height: 30,
	    margin: 20
	},
})

module.exports = EmojiPicker;