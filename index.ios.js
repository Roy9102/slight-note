/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
// var colorConfig = require('/ColorCoinfig');
// console.log(colorConfig)
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
} = React;

var xiaowa = React.createClass({
  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows(['这是一个晴朗的早晨。我在公司门口...', '这是一个晴朗的早晨。我在公司门口...']),
    };
  },
  render_list : function(rowData){
      return (
          <View style={styles.listItem}>
            <Image
              style={styles.listicon}
              source={require('image!listIcon')}

            />
            <Text style={styles.listItemText}>{rowData}</Text>
          </View>
      )
  },
  render: function() {
    return (
      <View style={styles.container}>
        <View style={styles.top_bar}>
          <Image
          style={styles.plus}
          source={require('image!add')}
        />
        </View>
        <Image
          style={styles.top_bar_wiaowa}
          source={require('image!xiaowa')}
        />
        <ListView
          style={styles.listStyle}
          dataSource={this.state.dataSource}
          renderRow={this.render_list}
        />
      </View>
    );
  }
});



var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcf6dc',
  },
  top_bar : {
    backgroundColor:'#82d6c6',
    height: 60,
    paddingTop:20,
    justifyContent:'center',
  },
  plus:{
    width:30,
    height:30,
    marginRight:12,
    alignSelf:'flex-end',
  },
  top_bar_wiaowa : {
    position:'absolute',
    width:48,
    height:50,
    left:0,
    top:30,
    backgroundColor:'rgba(0,0,0,0)'
  },
  listStyle:{
    marginTop:18
  },
  listItem:{
    height:50,
    backgroundColor:'#FFFFFF',
    borderRadius:6,
    margin:16,
    marginTop:0,
  },
  listItemText : {
    color:'#ae6137',
    backgroundColor:'rgba(0,0,0,0)',
    padding:12,
    paddingLeft:24
  },
  listicon:{
    position:'absolute',
    height:22,
    resizeMode: Image.resizeMode.contain,
    left:-50,
    top:14,
    backgroundColor:'rgba(0,0,0,0)'
  }

});

AppRegistry.registerComponent('xiaowa', () => xiaowa);
