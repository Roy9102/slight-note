/**
 * 添加新记录页面
 */

'use strict';

var React = require('react-native');
var DB    = require('../db');
var DBEvents = require('react-native-db-models').DBEvents;
var SPRING_CONFIG = {tension: 1, friction: 3}; //Soft spring
var ImagePicker = require('../components/icon/imagePicker');
var MarkAddress = require('../components/mark_tip/MarkAddress');


var {
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  ScrollView,
  TouchableHighlight,
  TextInput,
  CameraRoll,
  AsyncStorage,
  Animated
} = React;




var FuncIcon = React.createClass({
   
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
                activeOpacity = {0.8}
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
    getInitialState (){
        return {
            literation:'',
            pan : new Animated.ValueXY({
                x:0,
                y:192
            }),
        }
    },

    onChangeText (text){
        this.setState({
            literation:text
        })
        
    },

    submitEdit(){
        var text = this.state.literation;
        DB.bussiness.add({
            date: this.props.data.date,
            iconArray: ["taxi","alarm","photo"],
            title: text,
            address:this.refs.address.state.address,
        })
    },


    getStyle (){
        return [
            {
                transform: this.state.pan.getTranslateTransform(),
            }
        ]
    },

    moreClick(){
        Animated.spring(this.state.pan, {
            ...SPRING_CONFIG,
            toValue: {x: 0, y: 0}                        // return to start
        }).start();
    },
    render (){
        return (
            <View style={styles.container}>
                <ScrollView style={styles.inputbox}>
                    <TextInput ref="textinput" 
                        style={styles.textarea} 
                        placeholder="Here is you notice" 
                        value = {this.state.literation} 
                        onChangeText = {this.onChangeText}
                        multiline={true}
                        onEndEditing = {this.submitEdit}
                    />
                </ScrollView>
                <Text style={styles.date}>{this.props.data.date}</Text>
                <MarkAddress ref="address" />

                <Animated.View style={this.getStyle()}>
                    <View style={styles.ele_list}>
                        <TouchableHighlight
                            underlayColor = 'rgba(0,0,0,0)'
                            activeOpacity = "0.8"
                        >
                            <Image style={styles.icon} source={require('image!smiley')} />
                        </TouchableHighlight>

                        <ImagePicker  ref = "photoPicker" />  

                
                        <TouchableHighlight
                            style={styles.right}
                            onPress={this.moreClick}
                            underlayColor = 'rgba(0,0,0,0)'
                            activeOpacity = "0.8"
                        >
                            <Image style={styles.icon} source={require('image!plus_gray')} />
                        </TouchableHighlight>                
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
                </Animated.View>
            </View>
        )
    }
});

var styles = StyleSheet.create({
  container:{
    backgroundColor:'#fcfaf0',
    flex:1
  },
  inputbox:{
    flex:1,
  },
  textarea:{
    height:200,
    color:'#75675a',
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
  itemType:{
    backgroundColor:'#f4f5f5',
  },
  typeRow:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    margin:16
  },
  moreList:{
    width:64,
    height:64,
    alignItems:'center',
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
  }, 
  date:{
    color:"#75675a",
    fontSize:13,
    alignSelf:'flex-end',
    marginRight:12,
    marginBottom:6,
  }
})
 




module.exports  = newPage;