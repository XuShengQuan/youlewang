$(document).ready(function(){
	
	$("form").submit(function(){
		var dh=$(".txt").val();
		var num=$(".zc1").val();
		var mm=$(".psw1").val();
		var mm1=$(".psw2").val();
		var mm2=$(".txt1").val();
		//登录验证手机号码
		if(dh.length != 11){
			alert("手机号码必须为11个字符!");
			return false;
		}
		//登录验证密码框
        if(mm2.length<6||mm2.length>20){
        	alert("请输入6-20位字符的密码");
			return false;
        }	
        //注册验证手机号码
		if(num.length != 11){
			alert("手机号码必须为11个字符！");
			return false;
		}
		//注册验证确认密码
		if(mm!=mm1){
			alert("两次输入密码不一致，请重新输入！");
			return false;
		}
		//注册确认密码字符长度
		if(mm1.length<6||mm1.length>20){
			alert("请设置6-20位字符的密码");
			return false;
		}
		//注册密码字符长度
		if(mm.length<6||mm.length>20){
			alert("请设置6-20位字符的密码");
			return false;
		}
	
		
		return  true;
	})
})

