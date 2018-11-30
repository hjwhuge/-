$(function(){

    var isName = false;
    var isPsw = false;
    var isPswIg = false;
    var isCode = false;

    //用户名
    $('#username').blur(function(){
        var valName = $.trim($('#username').val());
        if(valName){
            if(checkReg.name(valName)){
                $.ajax({
                    'data':{username:valName},
                    'type':'post',
                    'url':'../api/reg.php',
                    'success':usname
                });
            }else{
                $('#usninf').html('用户名必须是4~20位字符');
                $('#usninf').css('color','red');
            }
        }else{
            $('#usninf').html('用户名不能为空');
            $('#usninf').css('color','red');
        }

    });
    function usname(data){
        // console.log(data);
        if(data == '0'){
            $('#usninf').html('该用户名可以使用');
            $('#usninf').css('color','green');
            isName = true;
        }else{
            $('#usninf').html('该用户名已经被注册');
            $('#usninf').css('color','red');
        }
    }


 
    //密码
    var valPsd = '';
    $('#password').blur(function(){
        valPsd = $.trim($('#password').val());
        if(valPsd){
            if(checkReg.psweasy(valPsd)){
                $('#pswinf').html('密码可以使用');
                isPsw = true;
            }else{
                $('#pswinf').html('密码必须是6~16位字符');
                isPsw = false;
            }
        }else{
            $('#pswinf').html('密码不能为空');
            isPsw = false;
        }

    });


    //确认密码
    
    $('#password1').blur(function(){
        if(isPsw){
            var valPsd1 = $.trim($('#password1').val());
            if(valPsd1 == valPsd){
                isPswIg = true;
                $('#pswinf1').html('两次密码输入一致');
            }else{
                $('#pswinf1').html('两次密码输入不一致');
                isPswIg = false;
            }
        }
        
    });


    //验证码
    $('#code').html(code(4));
    $('#code,#next_code').click(function(){
        $('#code').html(code(4));
    });
    
    $('#yzm').blur(function(){
        var valYzm = $.trim($('#yzm').val());
        var valCode = $.trim($('#code').text());
        console.log(valYzm,valCode);
        if(valYzm){
            if(valYzm.toLowerCase() == valCode.toLowerCase()){
                $('#s1').html('验证码正确');
                isCode = true;
            }else{
                $('#s1').html('验证码有误');
                isCode = false;
                $('#code').html(code(4));
            }
        }else{
            $('#s1').html('验证码不能为空');
            isCode = false;
        }
        
    });

    //注册，两个都满足要求，注册，插入到数据库
    
    $('#btn').click(function(){
        console.log(isName,isPsw,isPswIg,isCode);
        if(isName && isPsw && isPswIg && isCode){
            var valName = $.trim($('#username').val());
            var valPsd = $.trim($('#password').val());
            //记得重新获取表单值，否则会找不到节点
            $.ajax(
                {
                    'data':{username:valName,password:valPsd},
                    'type':'post',
                    'url':'../api/reg1.php',
                    'success':reg
                }
            );
        }else{
            alert('注册失败，请输入正确信息');
        }
    });

    function reg(data){
        if(data == 'yes'){
            location.href='login.html';
        }
    }


});