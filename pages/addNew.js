/**
 * 添加新记录页面
 */

'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  ScrollView,
  TouchableHighlight,
  TextInput
} = React;


var newPage = React.createClass({
  render :function() {
    return (
        <View style={styles.container}>
            <View style={styles.inputbox}>
                <TextInput style={style.textarea} placeholder="Here is you notice" />
            </View>
            <View style={styles.ele_list}>
                <Image style={styles.icon} source={require('image!smile')} />
                <Image style={styles.icon} source={require('image!img_set')} />
                <Image style={styles.icon} source={require('image!camera')} />
                <Image style={[styles.icon,styles.right]} source={require('image!plus')} />                
            </View>
            <View style={styles.itemType}>
                <View style={styles.typeRow}>
                    <Image style={styles.typeIcon} source={require('image!smile')} />
                    <Image style={styles.typeIcon} source={require('image!img_set')} />
                    <Image style={styles.typeIcon} source={require('image!camera')} />        
                </View>
                <View style={styles.typeRow}>
                    <Image style={styles.typeIcon} source={require('image!smile')} />
                    <Image style={styles.typeIcon} source={require('image!img_set')} />
                    <Image style={styles.typeIcon} source={require('image!camera')} />
                <View>
            </View>
        </View>
    )
  }
});

var styles = StyleSheet.create({
  container:{
    backgroundColor:'#fcfaf0',
    color:'#75675a'
  },
  inputbox:{
    height:100,
    backgroundColor:'#fcfaf0',
  },
  ele_list:{
    flexDirection:'row',
    height:40,
    flex:1
  },
  icon:{
    width:30,
    height:30,
  },
  right:{
    itemAlign:'right'
  },
  textarea:{
    flex:1,
    height:100,
    color:'#75675a',
    backgroundColor:'#fcfaf0'
  },
  itemType:{
    backgroundColor:'#f4f5f5'
  },
  typeRow:{
    flex:1,
    flexDirection:'row'
  },
  typeIcon:{
    flex:1
  }
})

module.exports  = newPage;