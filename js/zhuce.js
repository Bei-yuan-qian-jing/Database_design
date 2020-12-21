function zhuce() {
    var uid=document.getElementById('uid').valueOf().value;
    var uname=document.getElementById('uname').valueOf().value;
    var psw=document.getElementById('psw').valueOf().value;
    var cpsw=document.getElementById('cpsw').valueOf().value;
    var is_u=document.getElementById('User').valueOf().value;
    var is_a=document.getElementById('Administrator').valueOf().value;
    if(true){//ID重复
        alert("ID重复");
        return;
    }
    else if(uid.empty()){
        alert("未填写ID");
        return;
    }
    else if(uname.empty()){
        alert("未填写名字");
        return;
    }
    else if(psw.empty()){
        alert("未填写密码");
        return;
    }
    else if(psw.empty()){
        alert("两次密码不同");
        return;
    }
    else if(!(is_a||is_u)){
        alert("未填写身份");
        return;
    }
    else{
        //添加数据库
    }
}