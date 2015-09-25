/**
 * 添加新记录页面
 */

'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  ScrollView,
  TouchableHighlight
} = React;


var newPage = React.createClass({
  render :function() {
    return (
      <View>
        <Text>create one here</Text>
      </View>
    )
  }
});

var styles = StyleSheet.create({
  container:{
    backgroundColor:'#fff',
  }
})

module.exports  = newPage;