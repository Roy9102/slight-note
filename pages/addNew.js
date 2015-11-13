/**
 * 添加新记录页面
 */

'use strict';

var React         = require('react-native');
var DB            = require('../db');
var DBEvents      = require('../node_modules/react-native-db-models').DBEvents;
var EmojiPicker   = require('../components/icon/EmojiPicker');
var ImagePicker   = require('../components/icon/imagePicker');
var MarkAddress   = require('../components/mark_tip/MarkAddress');
var Modal         = require('react-native-modalbox'); //modal
var SPRING_CONFIG = {tension: 1, friction: 3}; //Soft spring
var {
    Emoji,
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
  LayoutAnimation
} = React;




var FuncIcon = React.createClass({
   
    componentDidMount(){
    },

    render_img (img){
        var res = null;
        switch(img){
            case 'alarm' : 
                res = (
                        <Image style={styles.typeIcon} source={require('../images/alarm.png')} /> 
                    )
                break;
            case 'photo' : 
                res = (
                        <Image style={styles.typeIcon} source={require('../images/photo.png')} /> 
                    )
                break;
            case 'taxi_150' : 
                res = (
                        <Image style={styles.typeIcon} source={require('../images/taxi_150.png')} /> 
                    )
                break;
            case 'record' : 
                res = (
                        <Image style={styles.typeIcon} source={require('../images/record.png')} /> 
                    )
                break;
            case 'package':
                res = (
                        <Image style={styles.typeIcon} source={require('../images/package.png')} /> 
                    )
                break;
            case 'shopping_cart':
                res = (
                        <Image style={styles.typeIcon} source={require('../images/shopping_cart.png')} /> 
                    )
                break;
            case 'video':
                res = (
                        <Image style={styles.typeIcon} source={require('../images/video.png')} /> 
                    )
                break;
        }
        return res;
    },

    onPress(){
        this.props.onClick();
    },

    render (){
        return(
            <TouchableHighlight
                style={styles.moreList}
                underlayColor = 'rgba(0,0,0,0)'
                activeOpacity = {0.8}
                onPress = {this.onPress}
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
            literation : 'hello',
            func_area_height:60,
            ImageCard_opacity:0,
            photos : [],
            Images:[],
            iconArray:[],
            isModalOpen:false
        }
    },

    //添加图片
    addImage (source){
        var arr = this.state.Images;
        var photos = this.state.photos;
        photos.push(source);
        arr.push(
            <Animated.View style={this.getImageCardStyle()}>
                <Image style={styles.photoPie} source={source} />           
            </Animated.View>
        )
        if (this.state.ImageCard_height){
            this.setState({
                Images:arr,
                photos:photos
            });
        }else{
            LayoutAnimation.spring();
            this.setState({
                Images:arr,
                photos:photos,
                ImageCard_opacity:1
            });
        }
        if (!this.state.iconArray.find((n) => {return n === 'photo'})){
            let iArr = this.state.iconArray;
            iArr.push('photo');
            this.setState({
                iconArray:iArr
            })
        }
    },

    getImageCardStyle(){
        return [
            {
                opacity: this.state.ImageCard_opacity
            }
        ]
    },

    // addEmoji 
    addEmoji (){
        this.refs.modal1.open()
    },

    //添加出行计划
    addTripPlan (){
        this.refs.modal1.open()
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
        var height = this.state.h === 256 ? 60 : 256;
        LayoutAnimation.spring();
        this.setState({func_area_height: height})
        // Animated.spring(this.state.pan, {
        //     ...SPRING_CONFIG,
        //     toValue: {x: 0, y: 0}                        // return to start
        // }).start();
    }, 

    onOpen(){
        this.refs.modal1.open()
    },
    onClose(){
        this.refs.modal1.close()
    },
    onClosingState(){
        this.refs.modal1.closingState()
    },

    componentDidMount(){
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
                    <View>
                        {this.state.Images}
                    </View>
                    
                </ScrollView>

                <View style={styles.footer}>
                    <Text style={styles.date}>{this.props.data.date}</Text>
                    <MarkAddress ref="address" />              
                </View>


                <Animated.View style={this.getFuncStyle()}>
                    <View style={styles.ele_list}>
                       
                        <EmojiPicker addEmoji = {this.addEmoji} />
                        <ImagePicker addImage = {this.addImage} ref = "photoPicker" />  

                        <TouchableHighlight
                            style={styles.right}
                            onPress={this.ToggleClick}
                            underlayColor = 'rgba(0,0,0,0)'
                            activeOpacity = "0.8"
                        >
                            <Image style={styles.icon} source={require('../images/plus_gray.png')} />
                        </TouchableHighlight>                
                    </View>
                    <View style={styles.itemType}>
                        <View style={styles.typeRow}>
                            <FuncIcon img='taxi_150' onClick={this.addTripPlan} text='出行计划' />
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


                <Modal 
                    style={[styles.modal]}
                    isOpen          = {this.state.isModalOpen} 
                    ref             = {"modal1"} onClosed={this.onClose} 
                    onOpened        = {this.onOpen} 
                    onClosingState  = {this.onClosingState}
                    position        = {"center"} 
                    backdropContent = {<Text>Hello</Text>}
                >
                  <EmojiList />
                </Modal>
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
  itemType:{
    backgroundColor: '#f4f5f5',
  },
  typeRow:{
    flexDirection:  'row',
    alignItems:     'center',
    justifyContent: 'space-around',
    margin:         16
  },
  moreList:{
    width:          64,
    height:         64,
    alignItems:     'center',
    justifyContent: 'space-around',
  },
  icon_text:{
    color:     '#4c4c4c',
    fontSize:  12,
    margin:    4,
    textAlign: 'center'
  },
  iconView:{
    backgroundColor: '#Fff',
    borderRadius:    5
  },
  typeIcon:{
    margin: 10,
    width:  36,
    height: 36,
  }, 
  photoPie:{
    flex:1,
    marginLeft:20,
    marginRight:20,
    height:160,
     borderRadius:10
  },
  date:{
    color:        "#75675a",
    fontSize:     13,
    alignSelf:    'flex-end',
    marginRight:  12,
    marginBottom: 6,
  },
  footer:{
    
  }
})
 

module.exports  = newPage;
