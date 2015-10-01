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
  TextInput,
  CameraRoll
} = React;


var FuncIcon = React.createClass({
    onPress (){
        CameraRoll.saveImageWithTag()
    },

    render_img (img){
        var res = null;
        switch(img){
            case 'alarm' : 
                res = (
                        <Image style={styles.typeIcon} source={require('image!alarm')} /> 
                    )
                break;
            case 'photo' : 
                res = (
                        <Image style={styles.typeIcon} source={require('image!photo')} /> 
                    )
                break;
            case 'taxi_150' : 
                res = (
                        <Image style={styles.typeIcon} source={require('image!taxi_150')} /> 
                    )
                break;
            case 'record' : 
                res = (
                        <Image style={styles.typeIcon} source={require('image!record')} /> 
                    )
                break;
            case 'package':
                res = (
                        <Image style={styles.typeIcon} source={require('image!package')} /> 
                    )
                break;
            case 'shopping_cart':
                res = (
                        <Image style={styles.typeIcon} source={require('image!shopping_cart')} /> 
                    )
                break;
            case 'video':
                res = (
                        <Image style={styles.typeIcon} source={require('image!video')} /> 
                    )
                break;
        }
        return res;
    },

    render (){
        return(
             <TouchableHighlight
                style={styles.moreList}
                underlayColor = 'rgba(0,0,0,0)'
                activeOpacity = "0.8"
            >
                <View>
                    <View style={styles.iconView}>
                        {this.render_img(this.props.img)}      
                    </View>
                    <Text style={styles.icon_text}>{this.props.text}</Text>
                </View>
            </TouchableHighlight>
        )
    }
})


var newPage = React.createClass({


  render (){
    return (
        <View style={styles.container}>
            <ScrollView style={styles.inputbox}>
                <TextInput style={styles.textarea} placeholder="Here is you notice" />
            </ScrollView>
            <View style={styles.ele_list}>
                <Image style={styles.icon} source={require('image!smiley')} />
                <Image style={styles.icon} source={require('image!photo')} />
                <Image style={styles.icon} source={require('image!camera')} />
                <Image style={[styles.icon,styles.right]} source={require('image!plus_gray')} />                
            </View>
            <View style={styles.itemType}>
                <View style={styles.typeRow}>
                    <FuncIcon img='taxi_150' text='出行计划' />
                    <FuncIcon img='alarm' text='闹钟提醒' />
                    <FuncIcon img='record' text='语音录制' />
                </View>
                <View style={styles.typeRow}>
                    <FuncIcon img='package' text='行李清单' />
                    <FuncIcon img='shopping_cart' text='购物清单' />
                    <FuncIcon img='video' text='视频录制' />
                </View>
            </View>
        </View>
    )
  }
});

var styles = StyleSheet.create({
  container:{
    backgroundColor:'#fcfaf0',
    color:'#75675a',
    flex:1
  },
  inputbox:{
    height:100,
    backgroundColor:'#fcfaf0'
  },
  ele_list:{
    flexDirection:'row',
    height:60,
    alignItems:'center',
    backgroundColor:'#fff'
  },
  icon:{
    width:30,
    height:30,
    margin:20
  },
  right:{
    position:'absolute',
    alignSelf:'flex-end',
    right:20,
    top:-6
  },
  textarea:{
    flex:1,
    height:100,
    color:'#75675a',
    backgroundColor:'#fcfaf0'
  },
  itemType:{
    backgroundColor:'#f4f5f5',
    paddingTop:24,
    translateX:100000
  },
  typeRow:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around'
  },
  moreList:{
    width:64,
    height:64,
    alignItems:'center',
    marginBottom:24,
    justifyContent:'space-around',
  },
  icon_text:{
    color:'#4c4c4c',
    fontSize:12,
    margin:4,
    textAlign:'center'
  },
  iconView:{
    backgroundColor:'#Fff',
    borderRadius:5
  },
  typeIcon:{
    margin:10,
    width:36,
    height:36,
  }
})




module.exports  = newPage;