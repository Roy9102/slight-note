'use strict';

var React = require('react-native');
var LocationMinix = require('../Mixins/Amap_API');

var {
	StyleSheet,
	Text,
	View,
	Image,
	TouchableHighlight,
	ActivityIndicatorIOS
} = React;

var MarkAddress = React.createClass({
	mixins:[LocationMinix],
	getInitialState (){
		return {
			address:'正在获取当前的地理位置',
			isLoading:true
		}
	},

	getLocated (){
        var me = this;
        var options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };        
        navigator.geolocation.getCurrentPosition((pos) => {

            me.getAddress(pos)
            .then((response) => response.text())
            .then((res) => {
            	me.setState({
	                address:res.address,
	                isLoading:false,
	            })
            }).catch((err) => {
            	console.warn(err);
            	me.setState({
	                address:'获取地址失败,点击此处重新获取',
	                isLoading:false,
	            })
            })
        },(err) => {
        	me.setState({
                address:'获取地址失败,请允许软件获取你的定位信息',
                isLoading:false,
            })
        },options)
        
    },
	
	componentDidMount(){
		this.getLocated();
		this.getDirectionByType()
		.then((response) => response.text())
		.done((res) => {
			const resObj = JSON.parse(res);
			if (!resObj.status && resObj.info !== 'ok'){
				console.log(resObj.info);
				return;
			}

			console.log(`一共为您推荐${resObj.count}条路线,耗时${resObj.route.paths[0].duration}秒`);

		});
	},

	reGetAddress(){
		this.setState({
            address:'正在获取当前的地理位置...',
            isLoading:true
        });
        this.getLocated();
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
            		<Image style={styles.posIcon} source={require('../../images/posIcon.png')} />
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
