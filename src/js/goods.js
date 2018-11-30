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





    //获取id
    var listId = location.search; //?0001
    listId = listId.split('=')[1];//0001
    // 根据id渲染页面
    $.ajax({
        type:"get",
        url:"../api/find_goods.php",
        async:true,
        data:{'id':listId},
        success:init
    });
    function init(data){
        var arr = JSON.parse(data);
        // console.log(arr);
        var item = arr[0];
        // console.log(item.id);
        if(item.id>11111){
            var html = `<div class="frame_lt fl">
                <div class="imgdet">
                    <div class="imgpart">
                        <div class="pic">
                            <img src="../${item.imgs}" width="480px" height="480px" alt="" />
                            <div class="magnify"></div>
                        </div>
                        <div class="bigpic">
                            <img src="../${item.imgs}" width="480px" height="480px" alt="" />
                        </div>
                    </div>
                    <div class="imglist">
                        <ul>
                            <li class="active"><img src="../${item.imgs}" alt="" /></li>
                        </ul>
                    </div>
                </div>
                <div class="share">
                    <div class="goods_id fl">
                        商品编号：<i>${item.id}</i>
                    </div>
                    <div class="share_to fl">
                        <a href="javascript:;">分享</a>
                    </div>
                    <div class="share_dz fl">
                        <a href="javascript:;">点赞</a>
                    </div>
                </div>
            </div>
            <div class="frame_rt fr">
                <div class="goods_name">
                    <a href="javascript:;">${item.brand_name}</a>
                    ${item.good_name}
                </div>
                <div class="goods_price">
                    <div class="goods_price_t">
                        <div class="goods_price_tl fl">
                            <span>
                                <i>售价：</i>
                                <b>￥${item.price}</b>
                            </span>
                            <span>
                                <i>吊牌价：</i>
                                <b><del>￥ ${item.pricenow}</del></b>
                            </span>
                        </div>
                        <div class="goods_price_tr fr">
                            <span><i>${item.zk}</i>折</span>
                        </div>
                    </div>
                    <div class="goods_price_b">
                        <div class="goods_price_bl fl">
                            本品不参加vip，svip折扣
                        </div>
                        <div class="goods_price_br fr">
                            <a href="javascript:;">会员规则</a>
                        </div>
                    </div>   
                </div>
                <div class="sales">
                    <span>销量<i>2</i></span>
                    <span>累计评价<i>--</i></span>
                    <span>送邦购积分<i>63</i></span>
                </div>
                <div class="goods_color">
                    <p>
                        <span>
                            颜色：
                        </span>
                        <span class="col">
                            请选择颜色
                        </span>
                    </p>
                    <div class="color_sma">
                        <a href="javascript:;" attr_value="蓝色组"><img src="../img/color_sma1.jpg" alt="" /></a>
                        <a href="javascript:;" attr_value="黑白组"><img src="../img/color_sma2.jpg" alt="" /></a>
                    </div>
                </div>
                <div class="goods_size">
                    <p>
                        <span>
                            尺码：
                        </span>
                        <span class="size">
                            请选择尺码
                        </span>
                    </p>
                    <div class="size_type">
                        <a href="javascript:;">S:155/80A</a>
                        <a href="javascript:;">M:160/84A</a>
                        <a href="javascript:;">L:165/88A</a>
                    </div>
                </div>
                <div class="goods_num">
                    <dl>
                        <dt>购买数量：</dt>
                        <dd>
                            <a href="javascript:;" class="num_less">-</a>
                            <input type="text" value="1" class="nums" />
                            <a href="javascript:;" class="num_add">+</a>
                        </dd>
                    </dl>
                </div>
                <div class="goods_btn">
                    <a href="javascript:;">加入购物袋</a>
                </div>
                <div class="goods_more">
                    <p>
                        <span>
                            浏览更多：
                        </span>
                        <span class="size">
                            毛衣
                        </span>
                    </p>
                </div>
                <div class="goods_hint">
                    <span>浏览更多：</span>
                    <ul class="clearfix">
                        <li><em></em>此商品不可使用邦购红包</li>
                        <li><em></em>此商品不可使用积分</li>
                        <li><em></em>14天退换</li>
                    </ul>
                </div>
            </div>`;
        }else{
            var html = `<div class="frame_lt fl">
                <div class="imgdet">
                    <div class="imgpart">
                        <div class="pic">
                            <img src="${item.imgs}" width="480px" height="480px" alt="" />
                            <div class="magnify"></div>
                        </div>
                        <div class="bigpic">
                            <img src="${item.imgs}" width="480px" height="480px" alt="" />
                        </div>
                    </div>
                    <div class="imglist">
                        <ul>
                            <li class="active"><img src="${item.litimg1}" alt="" /></li>
                            <li><img src="${item.litimg2}" alt="" /></li>
                            <li><img src="${item.litimg3}" alt="" /></li>
                        </ul>
                    </div>
                </div>
                <div class="share">
                    <div class="goods_id fl">
                        商品编号：<i>${item.id}</i>
                    </div>
                    <div class="share_to fl">
                        <a href="javascript:;">分享</a>
                    </div>
                    <div class="share_dz fl">
                        <a href="javascript:;">点赞</a>
                    </div>
                </div>
            </div>
            <div class="frame_rt fr">
                <div class="goods_name">
                    <a href="javascript:;">${item.brand_name}</a>
                    ${item.good_name}
                </div>
                <div class="goods_price">
                    <div class="goods_price_t">
                        <div class="goods_price_tl fl">
                            <span>
                                <i>售价：</i>
                                <b>￥${item.price}</b>
                            </span>
                            <span>
                                <i>吊牌价：</i>
                                <b><del>￥ ${item.pricenow}</del></b>
                            </span>
                        </div>
                        <div class="goods_price_tr fr">
                            <span><i>${item.zk}</i>折</span>
                        </div>
                    </div>
                    <div class="goods_price_b">
                        <div class="goods_price_bl fl">
                            本品不参加vip，svip折扣
                        </div>
                        <div class="goods_price_br fr">
                            <a href="javascript:;">会员规则</a>
                        </div>
                    </div>   
                </div>
                <div class="sales">
                    <span>销量<i>2</i></span>
                    <span>累计评价<i>--</i></span>
                    <span>送邦购积分<i>63</i></span>
                </div>
                <div class="goods_color">
                    <p>
                        <span>
                            颜色：
                        </span>
                        <span class="col">
                            请选择颜色
                        </span>
                    </p>
                    <div class="color_sma">
                        <a href="javascript:;" attr_value="蓝色组"><img src="../img/color_sma1.jpg" alt="" /></a>
                        <a href="javascript:;" attr_value="黑白组"><img src="../img/color_sma2.jpg" alt="" /></a>
                    </div>
                </div>
                <div class="goods_size">
                    <p>
                        <span>
                            尺码：
                        </span>
                        <span class="size">
                            请选择尺码
                        </span>
                    </p>
                    <div class="size_type">
                        <a href="javascript:;">S:155/80A</a>
                        <a href="javascript:;">M:160/84A</a>
                        <a href="javascript:;">L:165/88A</a>
                    </div>
                </div>
                <div class="goods_num">
                    <dl>
                        <dt>购买数量：</dt>
                        <dd>
                            <a href="javascript:;" class="num_less">-</a>
                            <input type="text" value="1" class="nums" />
                            <a href="javascript:;" class="num_add">+</a>
                        </dd>
                    </dl>
                </div>
                <div class="goods_btn">
                    <a href="javascript:;">加入购物袋</a>
                </div>
                <div class="goods_more">
                    <p>
                        <span>
                            浏览更多：
                        </span>
                        <span class="size">
                            毛衣
                        </span>
                    </p>
                </div>
                <div class="goods_hint">
                    <span>浏览更多：</span>
                    <ul class="clearfix">
                        <li><em></em>此商品不可使用邦购红包</li>
                        <li><em></em>此商品不可使用积分</li>
                        <li><em></em>14天退换</li>
                    </ul>
                </div>
            </div>`;
        }


        $('.frame').html(html);
        fdj();
    }   
        


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

    //点击小图切换大图
    // $('.frame').on('click','.smaPic li',function(){
    //     var index = $(this).index();
    //     $('.frame_lt .bigPic').html('<a href="javacript:;"><img src="../img/list_1'+(index+1)+'.jpg" width="480px" height="480px" alt="" /></a>');
    //     $('.smaPic li').removeClass('active');
    //     $(this).addClass('active');
    // });

    //点击颜色分类显示颜色
    $('.color_sma a img').attr('isOk','true');
    $('.frame').on('click','.color_sma a img',function(){
        var ok = $(this).attr('isOk');
        if(ok=='true'){
            var cor = $(this).parent().attr('attr_value');
            $('.goods_color p .col').html(cor);
            $('.color_sma a img').removeClass('color_bd');
            $(this).addClass('color_bd');
            $('.color_sma a img').attr('isOk','true');
            $(this).attr('isOk','false');
            
        }else{
            $('.goods_color p .col').html('请选择颜色');
            $('.color_sma a img').removeClass('color_bd');
            $(this).attr('isOk','true');
        }  
    });
    
    

    //点击size分类显示对应size
    $('.goods_size .size_type a').attr('isOk','true');
    $('.frame').on('click','.goods_size .size_type a',function(){
        var ok = $(this).attr('isOk');
        if(ok=='true'){
            var cor = $(this).html();
            $('.goods_size .size').html(cor);
            $('.goods_size .size_type a').removeClass('size_bd');
            $(this).addClass('size_bd');
            $('.goods_size .size_type a').attr('isOk','true');
            $(this).attr('isOk','false');
            
        }else{
            $('.goods_size .size').html('请选择尺码');
            $('.goods_size .size_type a').removeClass('size_bd');
            $(this).attr('isOk','true');
        }  
    });

    //详情页内数量++和--
    var num_text = 1;
    $('.frame').on('click','.goods_num .num_less',function(){
        if(num_text<=1){
            num_text = 1;
        }else{
            num_text--;
        }
        $(this).next().val(num_text);
    });
    $('.frame').on('click','.goods_num .num_add',function(){
        if(num_text>=100){
            num_text = 100;
        }else{
            num_text++;
        }
        $(this).prev().val(num_text);
    });
    //在输入框输入内容后还可以正常使用++--
    $('.frame').on('keyup','.goods_num .nums',function(){
        var val = $(this).val();
        if(val>=100){
            val = 100;
        }if(val<=1){
            val = 1;
        }
        $(this).val(val);
        num_text = val;
    });
    
    

    //吸顶菜单
    var top = $('.frame').outerHeight()+280;
    $(window).scroll(function(){
        var scrollTop = $(window).scrollTop();
        if(scrollTop>=top){
            $('.des_r .tabNav').addClass('tabNav_fix');
            $('.tabNav_detail,.addToCart').css('display','block');
        }else{
            $('.des_r .tabNav').removeClass('tabNav_fix');
            $('.tabNav_detail,.addToCart').css('display','none');
        }
        var top1=$('.detail_more').offset().top;
        var top2=$('.detail_lists').offset().top;
        var top3=$('.detail_know').offset().top;
        // console.log(top1,top2,top3,scrollTop);
        if(top1<scrollTop && scrollTop<top2){
            $('.tabNav_nav').css('color','#666');
            $('.tabNav_page').css('color','#666');
            $('.tabNav_hover').css('color','#F8584F');
        }
        if(top2<scrollTop  && scrollTop<top3){
            $('.tabNav_hover').css('color','#666');
            $('.tabNav_page').css('color','#666');
            $('.tabNav_nav').css('color','#F8584F');
        }
        if(top3<scrollTop){
            $('.tabNav_hover').css('color','#666');
            $('.tabNav_nav').css('color','#666');
            $('.tabNav_page').css('color','#F8584F');
        }
        if(scrollTop<top1){
            $('.tabNav_hover').css('color','#666');
            $('.tabNav_nav').css('color','#666');
            $('.tabNav_page').css('color','#666');
        }

    });

    //楼层跳跃
    $('.tabNav_hover').click(function(){
        var top = $('.detail_more').offset().top;
        $(document).scrollTop(top);
    });
    $('.tabNav_nav').click(function(){
        var top = $('.detail_lists').offset().top;
        $(document).scrollTop(top);
    });
    $('.tabNav_page').click(function(){
        var top = $('.detail_know').offset().top;
        $(document).scrollTop(top);
    });
    $('.addToCart').click(function(){
        var top = $('.goods_name').offset().top;
        $(document).scrollTop(top);
    });



    //加入购物车
    $('.frame').on('click','.goods_btn',function(){
        $('.addCartSuccess').addClass('addcar');
        $('.openpop_mask').css('display','block');

        //发送ajax请求，id，商品名称
        var listId = $('.frame_lt .goods_id i').html();
        var num = $('.frame_rt .goods_num .nums').val();
        $.ajax({
            type:"get",
            url:"../api/addCar.php",
            async:true,
            data:{'id':listId,'num':num},
            success:datas
        });

        
        
    });

    //修改购物车总数量
    function datas(data){
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
    }


    //删除提示框,留在本页面
    $('.car_close,.btnGoShop').click(function(){
        $('.addCartSuccess').removeClass('addcar');
        $('.openpop_mask').css('display','none');
    });
    //跳转到购物车页面
    $('.btnGoPay').click(function(){
        $('.addCartSuccess').removeClass('addcar');
        $('.openpop_mask').css('display','none');
        window.open('../html/shop.html');
    });






    

});