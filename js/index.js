$(function(){
	//轮播图
	var t;
	var index = 0;
	//自动播放
	t = setInterval(play, 3000)
	function play() {
	    index++;
	    if (index > 3) {
	        index = 0
	    }
	    // siblings  找到 兄弟节点(不包括自己）
	    $(".lb ul li ").eq(index).fadeIn(1000).siblings().fadeOut(1000);
	};
})
$(function(){
	//轮播图
	var t1;
	var momo = 0;
	//自动播放
	t1 = setInterval(play1, 3000)
	function play1() {
	    momo++;
	    if (momo > 2) {
	        momo = 0
	    }
	    // siblings  找到 兄弟节点(不包括自己）
	    $(".xlb3 ul li").eq(momo).fadeIn(1000).siblings().fadeOut(1000);
	};
})
//$(function(){
//	$(".top_ri_3").hide();
//	$("a").mouseover(function(){
//		 $(".nnn").css({"border":"1px red solid"});
//          $(this).next().show(1000);
//	})mouseout(function(){
//          $(".top_ri_3").css({"border":"0px red solid"});
//          $(this).next().hide(1000);
//      });
//})
