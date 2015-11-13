/**
 * xiaoWa
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');



//页面组件
var HomePage     = require('./pages/homePage');
var NavBar       = require('./components/NavBar/NavBar');
var Business     = require('./components/business/business');
var addBussiness = require('./components/icon/addBusiness');

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

var firstRoute = {
  name: '',
  component: HomePage,
  rightCorner : addBussiness
};

var xiaoWa = React.createClass({
  getInitialState: function() {
    return {};
  },
  render: function() {
    return (
      <NavBar
        firstRoute={firstRoute} 
        headerStyle={styles.header}/>
    );
  }
});





var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcf6dc',
  }
});


AppRegistry.registerComponent('xiaoWa', () => xiaoWa);



