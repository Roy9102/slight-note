/**
 * Xiaowa
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var addNew = require('./addNew');
var NavBar = require('./components/NavBar/NavBar');
var Business = require('./components/business/business');

var XiaoWaBtn = require('./components/XiaoWaIcon/xiaowa');
var searchAndEdit = require('./components/searchAndEdit/searchAndEdit')



//页面组件
var HomePage = require('./homePage');

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
  component: HomePage
};

var xiaowa = React.createClass({
  getInitialState: function() {
    return {};
  },
  render: function() {
    return (
      <NavBar 
        firstRoute={firstRoute} 
        headerStyle={styles.header}
        backButtonComponent={XiaoWaBtn}
        rightCorner={searchAndEdit}
      />
    );
  }
});





var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcf6dc',
  }
});

AppRegistry.registerComponent('xiaowa', () => xiaowa);



