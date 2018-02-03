jQuery.fn.extend({

	//切换的类,每次切换调用的方法,切换的时间
	toggles: function(c, fn, ps) {
		var index = 0,
			len = this.length,
			elem = this,
			s = 1200;
		if (typeof ps == "number") {
			s = ps;
		}
		setInterval(function() {
			if (typeof c == "string") {
				elem.removeClass(c).eq(index).addClass(c);
			} else if (typeof c != "number") {
				elem.hide().eq(index).show();
			}
			if (typeof fn == "function") {
				fn(index);
			}
			index += 1;
			if (index > len - 1) {
				index = 0;
			}
		}, s);
	},
	draw3D: function(value) {
		this.setStyle('transform','matrix('+value+')');
	},
	setStyle: function(name, value) {
		for (var i=0;i<this.length;i++) {
			var obj = this.get(i);
			obj.style['webkit-' + name] = value;
			obj.style['moz-' + name] = value;
			obj.style['ms-' + name] = value;
			obj.style['o-' + name] = value;
			obj.style[name] = value;
		}
	},
	skew:function (x,y) {
		this.setStyle('transform','skew('+x+'deg,'+y+'deg)');
	},
	circles:function (s) {
		var i=0,elem=this;
		setInterval(function () {
			elem.setStyle('transform','rotatez('+i+'deg)');
			i++;
			if (i > 360) {
				i=0;
			}
		},s);
	}

});
/*

		var need = ['transform','animation'];
		for (var i = need.length - 1; i >= 0; i--) {
			if(elem == need[i]){
				alert(123);
			} 
		};
				alert(123);

*/