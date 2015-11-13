'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} = React;


var NavButton = React.createClass({

  onPress: function() {
    this.props.onPress();
  },

  render() {

    var backButton;
    if (this.props.backButtonComponent) {
      var BackButton = this.props.backButtonComponent;
      backButton = <View><BackButton /></View>
    } else {
      backButton = <View style={styles.backBtn}><Image style={styles.backIcon} source={require('../../images/backIcon.png')} /></View>
    }

    return (
      <TouchableHighlight onPress={this.onPress} underlayColor="transparent">
        {backButton}
      </TouchableHighlight>
    )
  }
});


var styles = StyleSheet.create({
  navbarText: {
    color: 'white',
    fontSize: 16,
    margin: 10,
    fontWeight: '600',
    textAlign: 'center',
    alignItems: 'center',
  },
  backBtn:{
    borderRadius:16,
    backgroundColor:'#6fc6c0',
    width:32,
    height:32,
    justifyContent:'space-around',
    alignItems:'center',
    left:10,
    top:5,
  },
  backIcon:{
    width:21,
    height:18,
    resizeMode: Image.resizeMode.contain,
  }
});


module.exports = NavButton;
