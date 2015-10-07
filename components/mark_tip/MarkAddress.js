'use strict';

var React = require('react-native');
var AMAP_URL = 'http://restapi.amap.com/v3/geocode/regeo?key=d169ff232ccab96b8fa19e7e25303844&';

var {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableHighlight,
	ActivityIndicatorIOS
} = React;

var MarkAddress = React.createClass({

	getInitialState (){
		return {
			address:'正在获取当前的地理位置',
			isLoading:true
		}
	},

	getAddress (){
        var me = this;
        var options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };        
        navigator.geolocation.getCurrentPosition(function(pos){
            var coords = pos.coords;
            var lnglat = [coords.longitude,coords.latitude];
            var url = AMAP_URL + 'location='+lnglat.join(',');

            fetch(url).then((response) => response.text())
                .then((responseText) => {
                    var res = JSON.parse(responseText);
                    // console.log(me.refs);
                    me.setState({
                        address:res.regeocode.formatted_address,
                        isLoading:false
                    })
                    console.log(res);
                })
                .catch((error) => {
                    console.warn(error);
                });
        },function(){
        	me.setState({
                address:'获取地址失败,点击此处重新获取',
                isLoading:false,
            })
        },options)
        
    },
	
	componentDidMount(){
		this.getAddress();
	},

	reGetAddress(){
		this.setState({
            address:'正在获取当前的地理位置',
            isLoading:true
        });
        this.getAddress();
	},


	render (){
		return (
			
            <TouchableHighlight
            	underlayColor='transparent'
            	activeOpacity={0.8}
            	onPress = {this.reGetAddress}
            	style={styles.markView}
            >
            	<View style={styles.addressBox}>
            		<ActivityIndicatorIOS animating={this.state.isLoading} style={styles.loading} color='#918a84' />
            		<Image style={styles.posIcon} source={require('image!posIcon')} />
                	<Text style={styles.address} ref={'address'}>{this.state.address}</Text>
                </View>
            </TouchableHighlight>
          
		)
	}



});


var styles = StyleSheet.create({
	markView:{
		alignSelf:'flex-end',
		marginRight:12,
		marginBottom:6
	},
	addressBox:{
		flexDirection:'row',
	},
	loading:{
		
		height:12,
	},
	posIcon:{
		width:16,
		height:16,
		resizeMode: Image.resizeMode.contain,
	},
	address:{
		fontSize:13,
		color:'#75675a',
	}
})

module.exports = MarkAddress;
