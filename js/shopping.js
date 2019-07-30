$(function(){
	//全选
	$("#allCheckBox").click(function(){
		if(this.checked){
			$(".go li input[type=checkbox]").prop("checked",true);
		}else{
			$(".go li input[type=checkbox]").prop("checked",false);
		}
	})
	//单选
	$(".go li input[type=checkbox]").click(function(){
		var check = $(".go li input[type=checkbox]").length;
		var checked = $(".go li input:checked").length;
		if (check == checked){
			$("#allCheckBox").prop("checked",true);
		}else {
			$("#allCheckBox").prop("checked",false);
		}
	})
	$("[name=del]").click(function(){
		var sc = confirm("您确定要删除吗？");
		if(sc == true){
			$(this).parent().parent().parent().remove();
		}else {
			alert("您取消了删除^_^");
		}
	})
	//收藏
	$("[name=sc]").click(function(){
		var cc=confirm("要加入收藏吗？");
		if(cc == true){
			$(this).parent().parent().parent().remove();
			alert("移入收藏成功！！！")
		  }else{
		  	alert("您取消了收藏-.-")
		  }
	})
	$("[name=qk]").click(function(){
	   var qk=confirm("您确定要清空购物车吗？");
	   if(qk==true){ 
	   	  $(this).parent().parent().parent().parent().remove();
	   	  alert("清空成功！")
	   }
	})
})

