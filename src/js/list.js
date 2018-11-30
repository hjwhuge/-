$(function(){


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
        // $(this).find('.classify').animate({
        //     'opacity':0
        // },500);

    });

    //发送ajax查询购物车数量
    $.ajax({
        type:'get',
        url:'../api/shop_car.php',
        async:true,
        data:{way:'sum'},
        success:function(data){
            // console.log(data);
            $('.logo_r a b').html(data);
        }
    });


    // 手风琴
    // 第一级按钮
    //设置自定义属性，每次修改属性值，通过属性值判断当前菜单的状态，类似于开关
    $('.search_lt ul li>em').attr('data-isok','true');
    $('.search_lt ul li>em').click(function(){
        var isok = $(this).attr('data-isok');
        if(isok=='true'){
            //修改相关样式
            $(this).parent().find('dl').css('display','block');
            $(this).next().css('text-decoration','underline');
            $(this).css(
                'background','url(../img/banggo_jn.png) no-repeat 0px -90px'
            );
            //改变自定义属性值
            $(this).attr('data-isok','false');
        }else{
            $(this).parent().find('dl').css('display','none');
            $(this).next().css('text-decoration','none');
            $(this).css(
                'background','url(../img/banggo_jn.png) no-repeat -9px -90px'
            );
            $(this).attr('data-isok','true');
        }
  
    });
    //第二级按钮
    
    $('.search_lt ul li dl dt em').attr('data-isok','true');
    $('.search_lt ul li dl dt em').click(function(){
        var isok = $(this).attr('data-isok');
        if(isok=='true'){
            $(this).parent().siblings().css('display','block');
            $(this).next().css({
                'text-decoration':'underline',
                'color':'#000'
            });
            $(this).css(
                'background','url(../img/banggo_jn.png) no-repeat -17px -90px'
            );
            $(this).attr('data-isok','false');
        }else{
            $(this).parent().siblings().css('display','none');
            $(this).next().css({
                'text-decoration':'none',
                'color':'#999'
            });
            $(this).css(
                'background','url(../img/banggo_jn.png) no-repeat -25px -90px'
            );
            $(this).attr('data-isok','true');
        } 
    });


    //点击显示更多
    var isOk = true;
    $('.searchItem .searchMore').click(function(){
        if(isOk){
            $(this).parent().css('height','auto');
            $(this).html('收起');
            $(this).css('background', 'url(../img/banggo_jn.png) no-repeat 33px -230px');
        }else{
            $(this).parent().css('height','18px');
            $(this).html('更多');
            $(this).css('background', 'url(../img/banggo_jn.png) no-repeat 33px -255px');
        }
        isOk=!isOk;
        
    });

    //高级筛选
    $('.seach_Box .occasion,.series,.colors').hover(function(){
        $(this).find('em').css('display','block');
        $(this).find('.option').css('display','block');
    },function(){
        $(this).find('em').css('display','none');
        $(this).find('.option').css('display','none');
    });

    

    //商品列表区域
    $('.pdList').on('mouseover','.good_litimg a',function(){
        var index = $(this).index();
        $(this).css('border-color','red');
        $(this).parent().parent().find('.goods_img_box a').html(`<img src="../img/list_1${index+1}.jpg" />`);
    });
    $('.pdList').on('mouseleave','.good_litimg a',function(){
        $(this).css('border-color','#ccc');
        $(this).parent().parent().find('.goods_img_box a').html('<img src="../img/list_1.jpg" />');
    });




    //换页按钮
    $('.pdList').on('mouseover','.cont_buttom span',function(){
        $(this).animate({opacity:0.7,});
    });
    $('.pdList').on('mouseleave','.cont_buttom span',function(){
        $(this).animate({opacity:1});
    });

    var now = 1;
    var pages=0;
    var way=Cookie.get('way');
    var key=Cookie.get('key');
    //渲染列表页数据
    //ajax渲染main区域内容
    //初始化列表页
    if(way){
        $.ajax({
            type:"get",
            url:"../api/sort.php",
            async:true,
            data:{'way':way,'key':key,'page':1},
            success:function(data){
                var arr = JSON.parse(data);
                $('.pdList .goodlist').html(init(arr));
                var html='';
                pages = arr.pages;
                // console.log(pages); 
                for(var i=0;i<pages;i++){
                    html+=`<span>${i+1}</span>`;
                }
                $('.cont_buttom .s1').after(html);
                $('.cont_buttom span').eq(0).addClass('active');
                if(key=='zk'){
                    if(way=='asc'){
                        $('.pdFilter_l a').eq(3).addClass('down');
                    }else{
                        $('.pdFilter_l a').eq(3).addClass('up2');
                    }
                    
                }else{
                    if(way=='asc'){
                        $('.pdFilter_l a').eq(4).addClass('down');
                    }else{
                        $('.pdFilter_l a').eq(4).addClass('up2');
                    }
                }
                
            }
        });
    }else{
        $.ajax({
            type:"get",//请求方式
            url:"../api/find.php",//接口路径
            async:true,//异步
            data:{page:1,qty:8},
            success:function(data){
                // console.log(data);
                var arr = JSON.parse(data);
                // console.log(arr);
                $('.pdList .goodlist').html(init(arr));
                //根据数据总长度，创建页码
                var html='';
                pages = arr.pages;
                // console.log(pages); 
                for(var i=0;i<pages;i++){
                    html+=`<span>${i+1}</span>`;
                }
                $('.cont_buttom .s1').after(html);
                $('.cont_buttom span').eq(0).addClass('active');
            }
        });
    }
    function init(arr){
        var html='';
        var qty = arr.qty;//一页条数
        var item = arr.datalist;//每一条数据
        for(var i=0;i<qty;i++){
            html += `<li data-id=${item[i].id}>
                        <div class="goods_img_box">
                            <a href="javascript:;">
                                <img src="${item[i].imgs}" />
                            </a>
                        </div>
                        <div class="brand_name">
                            <a href="javascript:;">${item[i].brand_name}</a>
                            <span><i>${item[i].zk}</i>折</span>
                        </div>
                        <div class="good_name">
                            <a href="javascript:;">${item[i].good_name}</a>
                        </div>
                        <div class="good_price">
                            <b>￥${item[i].price}</b>
                            <i><del>￥${item[i].pricenow}</del></i>
                        </div>
                        <div class="good_litimg">
                            <a href="javascript:;"><img src="${item[i].litimg1}" alt="" /></a>
                            <a href="javascript:;"><img src="${item[i].litimg2}" alt="" /></a>
                        </div>
                    </li>`;
        }
        //更新上一页下一页状态
        update();
        return html;
    }
    
    //点击换页
    $('.pdList').on('click','.cont_buttom span',function(){
        $('.cont_buttom span').removeClass('active');
        $(this).addClass('active');
        //发送ajax
        now = $(this).html();
        console.log(now);
        way=Cookie.get('way');
        key=Cookie.get('key');
        if(way){
            $.ajax({
                type:"get",
                url:"../api/sort.php",
                async:true,
                data:{'way':way,'key':key,'page':now},
                success:function(data){
                    var arr = JSON.parse(data);
                    $('.pdList .goodlist').html(init(arr));
                }
            });
        }else{
            $.ajax({
                type:"get",//请求方式
                url:"../api/find.php",//接口路径
                async:true,//异步
                data:{'page':now,'qty':8},
                success:function(data){
                    var arr = JSON.parse(data);
                    // console.log(arr);
                    $('.pdList .goodlist').html(init(arr));
                }
            });
        }
        
    });

    

    //判断上一页下一页显示隐藏
    function update(){
        // console.log(now,pages);
        if(now!=1){ //上一页显示隐藏状态
            $('.home,.s1').css('visibility','visible');
        }else{
            $('.home,.s1').css('visibility','hidden');
        }
        if(now!=pages){ //下一页显示隐藏状态
            $('.end,.next').css('visibility','visible');
        }else{
            $('.end,.next').css('visibility','hidden');
        }
    }


    //点击上一页，下一页，首页，尾页
    // 封装发送请求函数
    function ajax_data(){
        way=Cookie.get('way');
        key=Cookie.get('key');
        if(way){
            $.ajax({
                type:"get",
                url:"../api/sort.php",
                async:true,
                data:{'way':way,'key':key,'page':now},
                success:function(data){
                    var arr = JSON.parse(data);
                    $('.pdList .goodlist').html(init(arr));
                }
            });
        }else{
            $.ajax({
                type:"get",
                url:"../api/find.php",
                async:true,
                data:{'page':now,'qty':8},
                success:function(data){
                    var arr = JSON.parse(data);
                    $('.pdList .goodlist').html(init(arr));
                }
            });
        }
        
    }

    $('.home').click(function(){
        now=1;
        $('.cont_buttom span').removeClass('active');
        $('.cont_buttom span:first').addClass('active');
        ajax_data();
    });

    $('.end').click(function(){
        now=pages;
        $('.cont_buttom span').removeClass('active');
        $('.cont_buttom span:last').addClass('active');
        ajax_data();
    });

    $('.s1').click(function(){
        now--;
        if(now<=1){
            now=1;
        }
        $('.cont_buttom span').removeClass('active');
        $('.cont_buttom span').eq(now-1).addClass('active');
        ajax_data();
    });

    $('.next').click(function(){
        now++;
        if(now>=pages){
            now=pages;
        }
        $('.cont_buttom span').removeClass('active');
        $('.cont_buttom span').eq(now-1).addClass('active');
        ajax_data();
    });




    //商品排序
    //排序选项卡
    //默认状态
    
    //第一个
    $('.pdFilter_l a:eq(0)').click(function(){
        $('.pdFilter_l a').removeClass('active');
        $('.pdFilter_l a').removeClass('up1');
        $('.pdFilter_l a').removeClass('up2');
        $('.pdFilter_l a').removeClass('down');
        $(this).addClass('active');
        var now=new Date();
        now.setDate(now.getDate()-2);
        Cookie.set('way','no',{'expires':now,path:'/'});
        $.ajax({
            type:"get",
            url:"../api/find.php",
            async:true,
            data:{'page':1,'qty':8},
            success:function(data){
                var arr = JSON.parse(data);
                $('.pdList .goodlist').html(init(arr));
            }
        });
    });
    //第二个
    $('.pdFilter_l a:eq(1)').click(function(){
        $('.pdFilter_l a').removeClass('active');
        $('.pdFilter_l a').removeClass('up1');
        $('.pdFilter_l a').removeClass('up2');
        $('.pdFilter_l a').removeClass('down');
        $(this).addClass('up1');
    });
    //第三个
    $('.pdFilter_l a:eq(2)').click(function(){
        $('.pdFilter_l a').removeClass('active');
        $('.pdFilter_l a').removeClass('up1');
        $('.pdFilter_l a').removeClass('up2');
        $('.pdFilter_l a').removeClass('down');
        $(this).addClass('up1');
    });


    //第四个
    $('.pdFilter_l a:eq(3)').attr('data-isok','true');
    $('.pdFilter_l a:eq(3)').click(function(){
        $('.pdFilter_l a').removeClass('active');
        $('.pdFilter_l a').removeClass('up1');
        $('.pdFilter_l a').removeClass('up2');
        $('.pdFilter_l a').removeClass('down');
        
        var isOk = $(this).attr('data-isok');
        if(isOk =='true'){
            $(this).addClass('up2');
            Cookie.set('way','desc',{'path':'/'});
            Cookie.set('key','zk',{'path':'/'});
            $.ajax({
                type:"get",
                url:"../api/sort.php",
                async:true,
                data:{'way':'desc','key':'zk'},
                success:function(data){
                    var arr = JSON.parse(data);
                    $('.pdList .goodlist').html(init(arr));
                }
            });
            $(this).attr('data-isok','false');
        }else{
            $(this).addClass('down');
            Cookie.set('way','asc',{'path':'/'});
            Cookie.set('key','zk',{'path':'/'});
            $.ajax({
                type:"get",
                url:"../api/sort.php",
                async:true,
                data:{'way':'asc','key':'zk'},
                success:function(data){
                    var arr = JSON.parse(data);
                    $('.pdList .goodlist').html(init(arr));
                }
            });
            $(this).attr('data-isok','true');
        }

    });
    //第五个
    $('.pdFilter_l a:eq(4)').attr('data-isok','true');
    $('.pdFilter_l a:eq(4)').click(function(){
        $('.pdFilter_l a').removeClass('active');
        $('.pdFilter_l a').removeClass('up1');
        $('.pdFilter_l a').removeClass('up2');
        $('.pdFilter_l a').removeClass('down');

        var isOk = $(this).attr('data-isok');
        if(isOk =='true'){
            $(this).addClass('up2');
            Cookie.set('way','desc',{'path':'/'});
            Cookie.set('key','price',{'path':'/'});
            $.ajax({
                type:"get",
                url:"../api/sort.php",
                async:true,
                data:{'way':'desc','key':'price'},
                success:function(data){
                    var arr = JSON.parse(data);
                    $('.pdList .goodlist').html(init(arr));
                }
            });
            $(this).attr('data-isok','false');
        }else{
            $(this).addClass('down');
            Cookie.set('way','asc',{'path':'/'});
            Cookie.set('key','price',{'path':'/'});
            $.ajax({
                type:"get",
                url:"../api/sort.php",
                async:true,
                data:{'way':'asc','key':'price'},
                success:function(data){
                    var arr = JSON.parse(data);
                    $('.pdList .goodlist').html(init(arr));
                }
            });
            $(this).attr('data-isok','true');
        }
    });
    

    //点击跳转详情页
    $('.goodlist').on('click','.goods_img_box img',function(){
        var goods_id = $(this).parent().parent().parent().attr('data-id');
        window.open('goods.html?id='+goods_id);
    });
    $('.goodlist').on('click','.good_name a',function(){
        var goods_id = $(this).parent().parent().attr('data-id');
        window.open('goods.html?id='+goods_id);
    });









});