
jQuery.fn.extend({
	
	//切换的类,每次切换调用的方法,切换的时间
	toggles:function (c,fn,ps) {
		var index=0,len = this.length,elem = this,s=1200;
		if (typeof ps == "number") {
			s=ps; 
		} 
		setInterval(function () {
			if (typeof c == "string") {
				elem.removeClass(c).eq(index).addClass(c);
			}else if(typeof c != "number"){
				elem.hide().eq(index).show();
			}
			if (typeof fn == "function") {
				fn(index);
			}
			index+=1;
			if (index > len - 1) {
				index=0;
			}
		},s); 
	}
	
});
