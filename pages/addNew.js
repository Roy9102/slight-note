/**
 * 添加新记录页面
 */

'use strict';

var React       = require('react-native');
var DB          = require('../db');
var EmojiPicker = require('../components/icon/EmojiPicker');
var ImagePicker = require('../components/icon/imagePicker');
var FuncIcon    = require('../components/icon/FuncIcon');
var MarkAddress = require('../components/mark_tip/MarkAddress');
var Swiper      = require('react-native-swiper');
var Modal       = require('react-native-modalbox'); //modal
var SotreDB     = require('../components/EventEmit/SotreEvent');

var DateFormater = require('../components/Mixins/DateFormater');

var {
    Emoji,
    nodeEmoji,
    EmojiList
} = require('react-native-emoji');

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
  Animated,
  LayoutAnimation,
  Dimensions,
  PushNotificationIOS
} = React;

const { width, height } = Dimensions.get('window');

LayoutAnimation.configureNext({
    duration:1000
});

var newPage = React.createClass({
    mixins:[ DateFormater ],
    getInitialState (){
        return {
            literation:        '',
            func_area_height:  60,
            ImageCard_opacity: 0,
            isEmojiShow:       0,
            photos:            [],
            Images:            [],
            iconArray:         [],
            date:              DateFormater.getFormatDate('yyyy年MM月dd日 HH:mm')
        }
    },

    //添加图片
    addImage (source){
        var arr = this.state.Images;
        var photos = this.state.photos;
        photos.push(source);
        arr.push(
            <Animated.View style={this.getImageCardStyle()}>
                <Image style={styles.photoPie} source={source}></Image>           
            </Animated.View>
        )

        LayoutAnimation.linear();
        this.setState({
            Images:arr,
            photos:photos,
            ImageCard_opacity:1
        });
        
        if (!this.state.iconArray.find((n) => {return n === 'photo'})){
            let iArr = this.state.iconArray;
            iArr.push('photo');
            this.setState({
                iconArray:iArr
            })
        };

        this.handleChange();
    },

    getImageCardStyle(){
        return [
            {
                opacity: this.state.ImageCard_opacity
            }
        ]
    },

    // ShowEmojiList
    showEmoji (){
        LayoutAnimation.easeInEaseOut();
        this.setState({
            func_area_height : 256,
            isEmojiShow : -196
        })
    },

    // addEmoji 
    addEmoji(emoji){
        var text = [this.state.literation,emoji];
        this.setState({
            literation: text.join('')
        })
    },

    //添加出行计划
    addTripPlan (){
        this.refs.modal1.open()
    },

    onChangeText (text){
        this.setState({
            literation:text
        })
        this.handleChange();
    },

    alertMessage(){
        PushNotificationIOS.requestPermissions();
    },

    handleChange(){
        var text = this.state.literation;
        SotreDB.createTempItem({
            key: new Date() * 1,
            date: this.state.date,
            iconArray: this.state.iconArray,
            photos:this.state.photos,
            title: text,
            address:this.refs.address.state.address,
        })
    },


    getFuncStyle (){
        return [
            {
                height: this.state.func_area_height
            }
        ]
    },

    ToggleClick(){
        var height = this.state.func_area_height === 256 ? 60 : 256;
        LayoutAnimation.easeInEaseOut();
        this.setState({
            func_area_height: height,
            isEmojiShow:0
        });
    }, 

    render (){
        return (
            <View style={styles.container}>
                <ScrollView style={styles.inputbox}>
                    <TextInput ref="textinput" 
                        style={styles.textarea} 
                        placeholder="在这里写下你的点滴......" 
                        value = {this.state.literation} 
                        onChangeText = {this.onChangeText}
                        multiline={true}
                        onEndEditing = {this.submitEdit}/>
                    
                    <View style={{backgroundColor:'green'}}>
                        {this.state.Images}
                    </View> 
                </ScrollView>

                <View style={styles.footer}>
                    <Text style={styles.date}>{this.state.date}</Text>
                    <MarkAddress ref="address" />              
                </View>


                <Animated.View style={this.getFuncStyle()}>
                    <View style={styles.ele_list}>
                       
                        <EmojiPicker showEmoji = {this.showEmoji} />
                        <ImagePicker addImage = {this.addImage} ref = "photoPicker" />  

                        <TouchableHighlight
                            style={styles.right}
                            onPress={this.ToggleClick}
                            underlayColor = 'rgba(0,0,0,0)'
                            activeOpacity = {0.8}
                        >
                            <Image style={styles.icon} source={require('../images/plus_gray.png')} />
                        </TouchableHighlight>                
                    </View>
                    <View style={styles.func_area}>
                        <View style={styles.typeRow}>
                            <FuncIcon img='taxi_150' onClick={this.addTripPlan} text='出行计划' />
                            <FuncIcon img='alarm' onClick={this.alertMessage} text='闹钟提醒' />
                            <FuncIcon img='record' text='语音录制' />
                        </View>
                        <View style={styles.typeRow}>
                            <FuncIcon img='package' text='行李清单' />
                            <FuncIcon img='shopping_cart' text='购物清单' />
                            <FuncIcon img='video' text='视频录制' />
                        </View>
                    </View>

                    <Animated.View style = {[styles.func_area,{top:this.state.isEmojiShow,paddingTop:6}]} ref="emojilist">
                        <Swiper
                            loop            = {true}
                            index           = {0}
                            bounces         = {true}
                            paginationStyle = {{bottom:10}}
                            height          = {196}
                            dragable ={false}
                        >
                            <View>
                                <EmojiList addEmoji={this.addEmoji} page={0} />
                            </View>
                            <View>
                                <EmojiList addEmoji={this.addEmoji} page={1} />
                            </View>
                            <View>
                                <EmojiList addEmoji={this.addEmoji} page={2} />
                            </View>
                        </Swiper>
                    </Animated.View>
                </Animated.View>    
            </View>
        )
    }
});

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#fcfaf0',
    flex:            1
  },
  modal:{
    width:300,
    height:300
  },
  inputbox:{
    flex:1,
  },
  textarea:{
    color:  '#75675a',
    height:80,
    fontSize:16,
  },
  ele_list:{
    flexDirection:   'row',
    height:          60,
    alignItems:      'center',
    backgroundColor: '#fff'
  },
  icon:{
    width:  30,
    height: 30,
    margin: 20
  },
  right:{
    position:  'absolute',
    alignSelf: 'flex-end',
    right:     20,
    top:       -6
  },
  func_area:{
    position:'relative',
    backgroundColor: '#f4f5f5',
    top:0,
    left:0,
    height:196,
  },
  typeRow:{
    flexDirection:  'row',
    alignItems:     'center',
    justifyContent: 'space-around',
    margin:         16
  },
  photoPie:{
    flex:1,
    marginLeft:20,
    marginRight:20,
    height:160,
    borderRadius:10,
    opacity:1,
  },
  date:{
    color:        "#75675a",
    fontSize:     13,
    alignSelf:    'flex-end',
    marginRight:  12,
    marginBottom: 6,
  },
  footer:{
    
  },
  Emoji_Area:{
    height:196,
  }
})
 

module.exports  = newPage;
