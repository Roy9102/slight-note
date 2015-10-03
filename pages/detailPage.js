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
        <Text>fdsafdsa</Text>
      </View>
    )
  }
});

var styles = StyleSheet.create({
  detailContainer:{
  	flex:1,
    backgroundColor:'#fff',
  }
})

module.exports  = ItemDetails;