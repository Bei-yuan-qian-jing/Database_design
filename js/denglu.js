function denglu1() {
    var btn_dl=document.getElementById('denglubtn').innerHTML;
    var uname=document.getElementById('uname').valueOf().value;
    var psw=document.getElementById('psw').valueOf().value;
    var is_u=document.getElementById('User').valueOf().value;
    var is_a=document.getElementById('Administrator').valueOf().value;

    if(false){//密码错误
        alert("密码错误");
        return;
    }
    else if(uname===""){
        alert("未填写ID");
        return;
    }
    else if(psw===""){
        alert("未填写密码");
        return;
    }
    else if(!(is_a||is_u)){
        alert("未填写身份");
        return;
    }
    else{
        if(is_u==='true'){

            window.open("zhuye.html");
        }
        if(is_a==='true'){

            window.open("guanliyuan.html");
        }
    }

}
