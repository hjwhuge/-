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



    //吸顶菜单
    var scorllheight;
    function abc(){
       scorllheight = $('.car_bttom').offset().top - $(window).height();
        aa();
    }
    $(window).scroll(function(){
        // console.log('距离顶部的距离：'+$('.car_bttom').offset().top);
        // console.log('可视区域：'+$(window).height());
        // console.log('需要滚动的距离'+$(document).scrollTop());
        // console.log('被卷去的高度'+scorllheight);
        // var botm=$(window).height()-$('.car_bttom').height()-[$('.car_bttom').offset().top-$(document).scrollTop()];
        aa();
    });
    function aa(){
        if($(document).scrollTop()<scorllheight){
            $('.car_bttom').addClass('tabNav_fix');
        }else{
            $('.car_bttom').removeClass('tabNav_fix');
        }
    }
    

    //渲染购物车页面数据
    $.ajax({
        type:'get',
        url:'../api/shop_car.php',
        data:{
            way:'shop'
        },
        async:true,
        success:init
    });
    function init(data){
        var arr = JSON.parse(data);
        // console.log(arr);
        if(arr.length){
            $('.carts').css('display','block');
            var res = arr.map(function(item){
                return `<ul class="single_goods">
                                <li class="single_1">
                                    <p><input type="checkbox" class="goods_checkbox" /></p>
                                </li>
                                <li class="single_2">
                                    <dl class="clearfix">
                                        <dt>
                                            <a href="javascript:;"><img src="${item.imgs}" alt="" /></a>
                                        </dt>
                                        <dd>
                                            <a href="javascript:;">${item.good_name}</a>
                                            <p>
                                                商品编号：<i class="goods_id">${item.id}</i>
                                            </p>
                                        </dd>
                                    </dl>
                                </li>
                                <li class="single_3">
                                    <p>颜色：<i>银灰</i></p>
                                    <p>尺码：<i>（XL）</i></p>  
                                </li>
                                <li class="single_4">
                                    <p><del>￥${item.pricenow}</del></p>
                                    <p>￥<i class="unit_price">${item.price}</i></p>
                                </li>
                                <li class="single_5">
                                    <a href="javascript:;" class="num_less">-</a><input type="text" value="${item.num}" class="nums" /><a href="javascript:;" class="num_add">+</a>
                                </li>
                                <li class="single_6">
                                    ￥<i class="single_66">${item.num*item.price}</i>
                                </li>
                                <li class="single_7">
                                    <a href="javascript:;" class="in_favorites">移入我的点赞</a>
                                    <a href="javascript:;" class="delete_goods">删除</a>
                                </li>
                        </ul>`;
            }).join('');
            $('.car_c .shop_name').after(res);
            abc();
        }      
    }


    var arr = [];//存被选中的复选框下标
    var arrDel = [];//存被选中的商品id

    //购物车内数量++和--
    //加
    $('.car_c').on('click','.single_5 .num_add',function(){
        var num_text = $(this).prev().val();
        num_text++;
        if(num_text>=100){
            num_text = 100;
        }
        var liId = $(this).parent().parent().find('.goods_id').html();
        $.ajax({
            type:'get',
            url:'../api/shop_car.php',
            async:true,
            data:{
                id:liId,
                num:num_text,
                way:'num'
            },
            success:function(data){
                // console.log(data);
            }
        });
        $(this).prev().val(num_text);
        subTotal($(this));
    });
    //减
    $('.car_c').on('click','.single_5 .num_less',function(){
        var num_text = $(this).next().val();
        num_text--;
        if(num_text<=1){
            num_text = 1;
        }
        var liId = $(this).parent().parent().find('.goods_id').html();
        $.ajax({
            type:'get',
            url:'../api/shop_car.php',
            async:true,
            data:{
                id:liId,
                num:num_text,
                way:'num'
            },
            success:function(data){
                // console.log(data);
            }
        });
        $(this).next().val(num_text);
        subTotal($(this));
    });
    //在输入框输入内容后还可以正常使用++--
    $('.car_c').on('keyup','.single_5 .nums',function(){
        var num_text = $(this).val();
        var liId = $(this).parent().parent().find('.goods_id').html();
        if(num_text>=100){
            num_text = 100;
        }if(num_text<=1){
            num_text = 1;
        }
        $.ajax({
            type:'get',
            url:'../api/shop_car.php',
            async:true,
            data:{
                id:liId,
                num:num_text,
                way:'num'
            },
            success:function(data){
                // console.log(data);
            }
        });
        $(this).val(num_text);
        subTotal($(this));
    });


    //小计
    function subTotal(now) {
        var num = now.parent().find('input').val(); //数量
        var price = now.parent().prev().find('.unit_price').text();
        price = $.trim(price); //工具方法：去除前后空格
        var all = (num * price).toFixed(0); //保留两个小数，小计：数量*单价
        now.parent().next().html(`￥<i class="single_66">${all}</i>`);
        updateNum();
    }

    //删除当行
    $('.car_c').on('click', '.delete_goods', function() {
        var mes = confirm('您确定要删除该行吗？');
        if(mes) {
            $(this).parent().parent().remove();
            //接口3：删除数据库的某行
            var liId = $(this).parent().parent().find('.goods_id').html();
            $.ajax({
                type:'get',
                url:'../api/shop_car.php',
                async:true,
                data:{
                    id:liId,
                    way:'del'
                },
                success:function(data){
                    // console.log(data);
                }
            });
        }
        updateNum();
        // update();
    });


    //全选
    var isok = true;
    $('.checkAll').on('click', function() {
        if(isok) {
            //设置
            $('.car_c').find('.goods_checkbox').prop('checked', 'checked'); 
            $('.checkAll').prop('checked', 'checked');

        } else {
            //不选
            $('.checkAll').removeAttr('checked');
            $('.car_c .goods_checkbox').removeAttr('checked');
        }
        isok = !isok;
        updateNum();
    });

    //复选框被勾选
    $('.car_c').on('click', '.goods_checkbox', function() {
        $(this).css('background','red');
        updateNum();
        if(arr.length==$('.goods_checkbox').size()){//控制是否全选勾上
            //证明全被勾选
            $('.checkAll').prop('checked','checked');
            isok=false;
        }else{
            $('.checkAll').removeAttr('checked');
            isok=true;
        }
    });

    //总数量和总价格改变：封装成函数
    function updateNum(){
        //空数组：存被勾选的行的下标
        arr.length = 0;
        arrDel.length = 0;
        var le = $('.car_c .goods_checkbox').size(); //复选框的总个数
        // console.log(le);
        for(var i = 0; i < le; i++) {
            if($('.car_c .goods_checkbox').eq(i).prop('checked')) {
                //意味着这一行被勾选
                arr.push(i);
                var liId = $('.goods_checkbox').eq(i).parent().parent().parent().find('.goods_id').html();
                arrDel.push(liId);
            }
        }

        // console.log(arr,arrDel);

        //统计被勾选的行对应的数量，累加放到底部对应位置
        //统计被勾选的行对应的小计，累加放到底部对应位置
        var num = 0; //总数量
        var totalPrice = 0; //存总价
        for(var i = 0; i < arr.length; i++) {
            num += $('.nums').eq(arr[i]).val() * 1;
            var price = $('.single_66').eq(arr[i]).text(); 
            price = $.trim(price); //去掉前后空格
            // console.log(price);
            totalPrice += price*1;
        }

        //console.log(num);
        $('.balance_num i').html(num);
        $('.balance_price i').html('￥'+totalPrice);

        update();
        
    }



    //全删
    $('.balance_del').on('click', function() {
        updateNum();
        var mes = confirm('您确定要删除多行吗？');
        if(mes) {
            for(var i = arr.length - 1; i >= 0; i--) { //找到对应的行，删除
                $('.goods_checkbox').eq(arr[i]).parent().parent().parent().remove();
                // console.log(arrDel[i]);
                $.ajax({
                    type:'get',
                    url:'../api/shop_car.php',
                    async:true,
                    data:{
                        id:arrDel[i],
                        way:'del'
                    },
                    success:function(data){
                        // console.log(data);
                    }
                });
             
                
            }
        }
        update();
    });

    //更新状态
    function update() {
        if($('.goods_checkbox').size() == 0) {
            //意味着没有商品数据了
            $('.carts').css('display','none');
        }
        if(arr.length==0){
            $('.cartPayBill a').addClass('active');

        }else{
            $('.cartPayBill a').removeClass('active');
        }
    }


    //判断用户是否登录
    $('.cartPayBill').click(function(){
        if(username){
            window.open('../html/login.html');
        }else{
            alert('结算成功！');
        }
    });
    
    



});