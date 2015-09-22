'use strict';


var React = require('react-native');
var Business = require('./components/business/business');

var {
	StyleSheet,
	Text,
	View,
	Image,
	ListView,
	ScrollView,
	TouchableHighlight
} = React;


var Homepage = React.createClass({
  getInitialState: function() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
      dataSource: ds.cloneWithRows([
        {
            title:'这是一个晴朗的在公司门口吃了...',
            date : '上午 11：06   2014-08-08',
            iconArray:['taxi','alarm','img_set','record'],
        },
        {
            title:'这是一个晴朗的在公司门口吃了...',
            date : '上午 11：06   2014-08-08',
            iconArray:['alarm','img_set','record'],
        },
        {
            title:'这是一个晴朗的在公司门口吃了...',
            date : '上午 11：06   2014-08-08',
            iconArray:['taxi','alarm','img_set'],
        },
        {
            title:'这是一个晴朗的在公司门口吃了...',
            date : '上午 11：06   2014-08-08',
            iconArray:['taxi','alarm','img_set','record'],
        },
        {
            title:'这是一个晴朗的在公司门口吃了...',
            date : '上午 11：06   2014-08-08',
            iconArray:['alarm','img_set','record'],
        },
        {
            title:'这是一个晴朗的在公司门口吃了...',
            date : '上午 11：06   2014-08-08',
            iconArray:['taxi','alarm','img_set'],
        },
        {
            title:'这是一个晴朗的在公司门口吃了...',
            date : '上午 11：06   2014-08-08',
            iconArray:['taxi','alarm','img_set','record'],
        },
        {
            title:'这是一个晴朗的在公司门口吃了...',
            date : '上午 11：06   2014-08-08',
            iconArray:['alarm','img_set','record'],
        },
        {
            title:'这是一个晴朗的在公司门口吃了...',
            date : '上午 11：06   2014-08-08',
            iconArray:['taxi','alarm','img_set'],
        }
      ]),
    };
  },
  render_list : function(rowData){
      return (
        <Business 
          literation = {rowData.title}
          date = {rowData.date}
          iconArray = {rowData.iconArray}
        />
      )
  },
  render: function() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollview}>
          <ListView
            style={styles.listStyle}
            dataSource={this.state.dataSource}
            renderRow={this.render_list}
          />
        </ScrollView>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcf6dc',
  }
});


module.exports = Homepage