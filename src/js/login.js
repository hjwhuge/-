$(function(){
    //选项卡切换
    $('#jsSeltab h3').click(function(){
        $('#jsSeltab h3').removeClass('active');
        $(this).addClass('active');
        var ipn1 = $(this).attr('ltn');
        var ipn2 = $(this).attr('ltw');
        $('#ipn1').html(ipn1+'：');
        $('#ipn2').html(ipn2+'：');
    });

    // 表单聚焦显示内容,失去焦点隐藏内容
    $('.form_group .form_control').focus(function(){
        $(this).css('border-color','#ccc')
        $(this).next().css({
            'color':'#999',
            'display':'block'
        });

    });
    $('.form_group .form_control').blur(function(){
        $(this).next().css('display','none');
    });



    //验证码
    $('#code').html(code(4));
    $('#code,#next_code').click(function(){
        $('#code').html(code(4));
    });

    //保存用户名和自动登录
    //判断用户选择状态
    var save1 = false;
    var save2 = false;

    $('.chek1').click( function(){
        save1 = $(this).prop('checked');
        console.log(save1,save2);
    });
    $('.chek2').click( function(){
        save2 = $(this).prop('checked');
        console.log(save1,save2);
    });
    console.log(save1,save2);

    //刷新页面，获取cookie值,发送ajax的时候保存
    var name=Cookie.get('name');
    var pwdval=Cookie.get('psw');
    $('#username').val(name);
    $('#password').val(pwdval);


    //登录按钮
    $('#btn').click(function(){
        var valName = $.trim($('#username').val());
        var valPsd = $.trim($('#password').val());
        var valYzm = $.trim($('#yzm').val());
        var valCode = $.trim($('#code').html());
        //判断用户名是否为空
        if(valName){
            //判断密码是否为空
            if(valPsd){
                //判断验证码是否为空
                if(valYzm){
                    //判断验证码是否正确
                    if(valYzm.toLowerCase() == valCode.toLowerCase()){
                        $.ajax(
                            {
                                'data':{username:valName,password:valPsd},
                                'type':'post',
                                'url':'../api/login.php',
                                'success':function(str){
                                    login(str,valName);
                                }
                            }
                        );
                        var now=new Date();
                        now.setDate(now.getDate()+7);
                        if(save1){
                            Cookie.set('name',valName,{'expires':now});
                        }else if(save2){
                            Cookie.set('name',valName,{'expires':now,'path':'/'});
                            Cookie.set('psw',valPsd,{'expires':now,'path':'/'});
                        }else{
                            Cookie.set('name',valName,{'path':'/'});
                        }
                        
                        
                    }else{
                        $('#codeinf').css('display','block');
                        $('#codeinf').html('验证码有误');
                        $('#yzm').val('');
                        $('#code').html(code(4));
                    }
                    
                }else{
                    $('#yzm').css('border-color','red');
                    $('#codeinf').css({
                        'color':'red',
                        'display':'block'
                    });
                }
            }else{
                $('#password').css('border-color','red');
                $('#pswinf').css({
                    'color':'red',
                    'display':'block'
                });
            }
        }else{
            $('#username').css('border-color','red');
            $('#usninf').css({
                'color':'red',
                'display':'block'
            });
        }
    });

function login(data){
    if(data == 'yes'){
    //这里一般不用href传内容，通过存coolie，首页获取coolie
        location.href='../text.html';
    }else{
        $('#usninf').html('用户名或者密码错误！');
        $('#usninf').css({
            'color':'red',
            'display':'block'
        });
        $('#username').val('');
        $('#password').val('');
        $('#yzm').val('');
    }
}


});