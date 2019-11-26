/*
 * http://love.hackerzhou.me
 */

// variables
var $win = $(window);
var clientWidth = $win.width();
var clientHeight = $win.height();

$(window).resize(function() {
    var newWidth = $win.width();
    var newHeight = $win.height();
    if (newWidth != clientWidth && newHeight != clientHeight) {
        location.replace(location);
    }
});

(function($) {
	$.fn.typewriter = function() {
		this.each(function() {
			var $ele = $(this), str = $ele.html(), progress = 0;
			$ele.html('');
			var timer = setInterval(function() {
				var current = str.substr(progress, 1);
				if (current == '<') {
					progress = str.indexOf('>', progress) + 1;
				} else {
					progress++;
				}
				$ele.html(str.substring(0, progress) + (progress & 1 ? '_' : ''));
				if (progress >= str.length) {
					clearInterval(timer);
				}
			}, 75);
		});
		return this;
	};
})(jQuery);

function timeElapse(date){
	var current = Date();
	var seconds = (Date.parse(current) - Date.parse(date)) / 1000;
	var days = Math.floor(seconds / (3600 * 24));
	seconds = seconds % (3600 * 24);
	var hours = Math.floor(seconds / 3600);
	if (hours < 10) {
		hours = "0" + hours;
	}
	seconds = seconds % 3600;
	var minutes = Math.floor(seconds / 60);
	if (minutes < 10) {
		minutes = "0" + minutes;
	}
	seconds = seconds % 60;
	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	var result = "第 <span class=\"digit\">" + days + "</span> 天 <span class=\"digit\">" + hours + "</span> 小时 <span class=\"digit\">" + minutes + "</span> 分钟 <span class=\"digit\">" + seconds + "</span> 秒"; 
	$("#clock").html(result);
}


//可以采纳这个方式
$(function(){
    //得到到前天早上7点的时间
    setInterval(count,1000)
});
function count(){
    var now=new Date()
    var old=new Date(new Date().getTime()-1000*3600*24*2).format("yyyy-MM-dd")+" 07:00:00";
    var subTime=now.getTime()-new Date(old).getTime()
    $('#time').html(transform(subTime))
}

function transform(time){
    var hour=Math.floor(time/(3600*1000))
    var minute=Math.floor((time-hour*3600*1000)/(60*1000))
    var second=Math.floor((time-hour*3600*1000-minute*1000*60)/1000)
    return hour+"小时"+minute+"分钟"+second+"秒"
}
//时间转换 很多工具类里有
Date.prototype.format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}




//function timeElapse(){ 
//	  var d=new Date(),str=''; 
//	  str+=d.getFullYear()+'年'; 
//	  str+=d.getMonth() + 1+'月'; 
//	  str+=d.getDate()+'日'; 
//	  str+=d.getHours()+'时'; 
//	  str+=d.getMinutes()+'分'; 
//	  str+= d.getSeconds()+'秒'; 
//	  return str; 
//	} 
//	setInterval(function(){$('#time').html(timeElapse)},1000); 