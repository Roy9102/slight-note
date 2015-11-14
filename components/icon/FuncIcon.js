
'use strict';

var React = require('react-native');

var {
    StyleSheet,
    View,
    Image,
    Text,
    TouchableHighlight
} = React;

const FuncIcon = React.createClass({
   
    componentDidMount(){
    },

    render_img (img){
        var res = null;
        switch(img){
            case 'alarm' : 
                res = (
                        <Image style={styles.typeIcon} source={require('../../images/alarm_128.png')} /> 
                    )
                break;
            case 'photo' : 
                res = (
                        <Image style={styles.typeIcon} source={require('../../images/photo.png')} /> 
                    )
                break;
            case 'taxi_150' : 
                res = (
                        <Image style={styles.typeIcon} source={require('../../images/taxi_150.png')} /> 
                    )
                break;
            case 'record' : 
                res = (
                        <Image style={styles.typeIcon} source={require('../../images/record.png')} /> 
                    )
                break;
            case 'package':
                res = (
                        <Image style={styles.typeIcon} source={require('../../images/package.png')} /> 
                    )
                break;
            case 'shopping_cart':
                res = (
                        <Image style={styles.typeIcon} source={require('../../images/shopping_cart.png')} /> 
                    )
                break;
            case 'video':
                res = (
                        <Image style={styles.typeIcon} source={require('../../images/video.png')} /> 
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
});



var styles = StyleSheet.create({
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
})

module.exports = FuncIcon;