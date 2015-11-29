/**
 * Author Roy
 * Description DateFormater
 */


export default  DateFormater = {


	/**
	 * [getFormatDate description] 获取格式化日期
	 * @param  {[string]} str [yyyy-MM-dd HH:mm:ss]
	 * @return {[string]}     [date]
	 */
	getFormatDate: (str,date) => {
	    var d = date ? date : new Date();
	    var o = {
	        'y+': d.getFullYear(),
	        'M+': (d.getMonth() + 1) > 9 ? (d.getMonth() + 1) : ('0' + (d.getMonth() + 1)),
	        'dd': d.getDate() > 9 ? (d.getDate()) : ('0' + (d.getDate())),
	        'H+': d.getHours() > 9 ? (d.getHours()) : ('0' + (d.getHours())),
	        'm+': d.getMinutes() > 9 ? (d.getMinutes()) : ('0' + (d.getMinutes())),
	        's+': d.getSeconds() > 9 ? (d.getSeconds()) : ('0' + (d.getSeconds())),
	    }

	    for (var i in o){
	        var reg = new RegExp( '(' + i + ')' );
	        if ( reg.test(str) ) str = str.replace(RegExp.$1, o[i] );
	    }
	    return str;
	}
}


