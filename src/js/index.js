$(function(){

    //通过cookie获取登录页面传过来的用户名
    var username=Cookie.get('name');
    if(username){
       $('.reg_r li:first').html(
        `<a href="JavaScript:;">
            ${username}
        </a>`) ;
       $('.reg_r li:first a').css({
            'padding':'0px',
            'line-height':'25px',
            'border':'none',
            'box-shadow':' 0 0 0'
       });
       $('.reg_r li:eq(1)').html(
        `<a href="JavaScript:;" id="outLogin">
            [退出]
        </a>`) ;

    }
    //点击退出,删除cookie
    $('#outLogin').click(function(){
        var now=new Date();
        now.setDate(now.getDate()-7);
        Cookie.set('name','',{'expires':now,'path':'/'});
        //刷新页面
         location.reload();
    });

    //发送ajax查询购物车数量
    $.ajax({
        type:'get',
        url:'api/shop_car.php',
        async:true,
        data:{way:'sum'},
        success:function(data){
            // console.log(data);
            $('.logo_r a b').html(data);
        }
    });


    // 所有图片透明度变换
    $('body').find('img').hover(function(){
        $(this).animate({opacity:'0.8'},350);
    },function(){
        $(this).animate({opacity:'1'},350);
    });

    $('.main .goods').on('mouseover','img',function(){
            $(this).animate({opacity:'0.8'},350);
    });
    $('.main .goods').on('mouseleave','img',function(){
            $(this).animate({opacity:'1'},350);
    });

    // top_reg下拉菜单
    $('.reg_r li').hover(function(){
        $(this).find('ul').css({
            'display':'block'
        });
    },function(){
        $(this).find('ul').css('display','none');
    });


    // top_nav下拉菜单
    $('.nav_l').find('li').hover(function(){
        $(this).find('.classify').css('display','block');
        $(this).find('.classify').animate({
            'opacity':1
        },500);
    },function(){
        $(this).find('.classify').css('display','none');
        $(this).find('.classify').animate({
            'opacity':0
        },500);
    });


    // 轮播图
    var timer=null;
    clearInterval(timer);
    var now=0;

    timer=setInterval(next,2000);

    function next(){
        //旧的隐藏
        $('#imglist li').eq(now).css({
            'display':'none',
            'opacity':0
        });
        now=++now>=$('#imglist li').size()?0:now;
        //新的显示出来
        $('#imglist li').eq(now).css('display','block');
        $('#imglist li').eq(now).animate({'opacity':1},800);
        light(now);
    }

    //焦点跟随
    function light(now){
        $('#light li').removeClass('active');
        $('#light li').eq(now).addClass('active');
    }

    //鼠标经过停止，鼠标离开继续运动
    $('#imglist').hover(function(){
        clearInterval(timer);
    },function(){
        clearInterval(timer);
        timer=setInterval(next,2000);
    });

    //鼠标进过小图跳转
    $('#light li img').hover(function(){
            var index=$(this).parent().index();
            // console.log(index);
            //旧的隐藏
            $('#imglist li').eq(now).css({
                'display':'none',
                'opacity':0
            });
            light(index);
            //新的显示出来
            $('#imglist li').eq(index).css({
                'display':'block',
                'opacity':1
            });
            // $('#imglist li').eq(index).css('display','block');
            // $('#imglist li').eq(index).animate({'opacity':1},400,'linear');
            now=index;
            clearInterval(timer);
    },function(){
        clearInterval(timer);
        timer=setInterval(next,2000);
    });

    // main区域
    // a和img透明度变换
    $('.brand,.sift').find('a,img').hover(function(){
        $(this).animate({opacity:'0.8'},350);
    },function(){
        $(this).animate({opacity:'1'},350);
    });
    //ajax渲染main区域内容
    $.ajax({
        type:"get",//请求方式
        url:"api/home.php",//接口路径
        async:true,//异步
        success:init
    });
    function init(data){
        // console.log(data);
        var arr = JSON.parse(data);
        // console.log(arr);
        $('.sale .goods').append(vray(0,10,arr));
        $('.tries .goods').append(vray(10,18,arr));
        $('.dress .goods').append(vray(18,26,arr));
        $('.child .goods').append(vray(26,34,arr));
        $('.shoe .goods').append(vray(34,42,arr));
    }
    function vray(n,m,arr){
        var html='';
        for(var i=n;i<m;i++){
            html+=`<li data-id=${arr[i].id}>
                    <div class="goods_img_box">
                        <a class="btn_good" href="JavaScript:;"><img src="${arr[i].imgs}" alt="" /></a>
                        <div class="product_tag">
                            <img src="${arr[i].product_tag}" alt="" />
                        </div>
                    </div>
                    <div class="good_name">
                        <a href="JavaScript:;" class="brand_name">${arr[i].brand_name}</a>
                        <span><a href="JavaScript:;" class="_name">${arr[i].good_name}</a></span>
                        <i>${arr[i].zk}折</i>
                    </div>
                    <div class="good_price">
                        <b>￥${arr[i].pricenow}</b>
                        <i><del>￥${arr[i].price}</del></i>
                    </div>
                </li>`;
        }
        return html;
    }


    //回到顶部
    blk();
    function blk(){
        var het = window.scrollY;
        if(het>=600){
            $('#toTop').css('display','block');
        }else{
            $('#toTop').css('display','none');
        }
    }
    window.onscroll=function(){
        blk();
    }
    $('#toTop').click(function(){
        var scrY = window.scrollY;
        clearInterval(timer);
        var timer = setInterval(function(){
            scrY -= 32;
            if(scrY<0){
                clearInterval(timer);
            }else{
                window.scrollTo(0,scrY);
            }
        });
    });


    // 绑定事件跳转到详情页
    $('.sale').on('click','.goods .btn_good',function(){
        var goods_id = $(this).parent().parent().attr('data-id');
        window.open('html/goods.html?id='+goods_id);
    });
    $('.tries').on('click','.goods .btn_good',function(){
        var goods_id = $(this).parent().parent().attr('data-id');
        window.open('html/goods.html?id='+goods_id);
    });
    $('.dress').on('click','.goods .btn_good',function(){
        var goods_id = $(this).parent().parent().attr('data-id');
        window.open('html/goods.html?id='+goods_id);
    });
    $('.child').on('click','.goods .btn_good',function(){
        var goods_id = $(this).parent().parent().attr('data-id');
        window.open('html/goods.html?id='+goods_id);
    });
    $('.shoe').on('click','.goods .btn_good',function(){
        var goods_id = $(this).parent().parent().attr('data-id');
        window.open('html/goods.html?id='+goods_id);
    });




});