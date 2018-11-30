'use strict';

$(function () {

    //回到顶部
    blk();
    function blk() {
        var het = window.scrollY;
        if (het >= 600) {
            $('#toTop').css('display', 'block');
        } else {
            $('#toTop').css('display', 'none');
        }
    }
    window.onscroll = function () {
        blk();
    };
    $('#toTop').click(function () {
        var scrY = window.scrollY;
        clearInterval(timer);
        var timer = setInterval(function () {
            scrY -= 32;
            if (scrY < 0) {
                clearInterval(timer);
            } else {
                window.scrollTo(0, scrY);
            }
        });
    });
    //通过cookie获取登录页面传过来的用户名
    var username = Cookie.get('name');
    if (username) {
        $('.reg_r li:first').html('<a href="JavaScript:;">\n            ' + username + '\n        </a>');
        $('.reg_r li:first a').css({
            'padding': '0px',
            'line-height': '25px',
            'border': 'none',
            'box-shadow': ' 0 0 0'
        });
        $('.reg_r li:eq(1)').html('<a href="JavaScript:;" id="outLogin">\n            [\u9000\u51FA]\n        </a>');
    }
    //点击退出,删除cookie
    $('#outLogin').click(function () {
        var now = new Date();
        now.setDate(now.getDate() - 7);
        Cookie.set('name', '', { 'expires': now, 'path': '/' });
        //刷新页面
        location.reload();
    });

    //发送ajax查询购物车数量
    $.ajax({
        type: 'get',
        url: '../api/shop_car.php',
        async: true,
        data: { way: 'sum' },
        success: function success(data) {
            // console.log(data);
            $('.logo_r a b').html(data);
        }
    });

    //获取id
    var listId = location.search; //?0001
    listId = listId.split('=')[1]; //0001
    // 根据id渲染页面
    $.ajax({
        type: "get",
        url: "../api/find_goods.php",
        async: true,
        data: { 'id': listId },
        success: init
    });
    function init(data) {
        var arr = JSON.parse(data);
        // console.log(arr);
        var item = arr[0];
        // console.log(item.id);
        if (item.id > 11111) {
            var html = '<div class="frame_lt fl">\n                <div class="imgdet">\n                    <div class="imgpart">\n                        <div class="pic">\n                            <img src="../' + item.imgs + '" width="480px" height="480px" alt="" />\n                            <div class="magnify"></div>\n                        </div>\n                        <div class="bigpic">\n                            <img src="../' + item.imgs + '" width="480px" height="480px" alt="" />\n                        </div>\n                    </div>\n                    <div class="imglist">\n                        <ul>\n                            <li class="active"><img src="../' + item.imgs + '" alt="" /></li>\n                        </ul>\n                    </div>\n                </div>\n                <div class="share">\n                    <div class="goods_id fl">\n                        \u5546\u54C1\u7F16\u53F7\uFF1A<i>' + item.id + '</i>\n                    </div>\n                    <div class="share_to fl">\n                        <a href="javascript:;">\u5206\u4EAB</a>\n                    </div>\n                    <div class="share_dz fl">\n                        <a href="javascript:;">\u70B9\u8D5E</a>\n                    </div>\n                </div>\n            </div>\n            <div class="frame_rt fr">\n                <div class="goods_name">\n                    <a href="javascript:;">' + item.brand_name + '</a>\n                    ' + item.good_name + '\n                </div>\n                <div class="goods_price">\n                    <div class="goods_price_t">\n                        <div class="goods_price_tl fl">\n                            <span>\n                                <i>\u552E\u4EF7\uFF1A</i>\n                                <b>\uFFE5' + item.price + '</b>\n                            </span>\n                            <span>\n                                <i>\u540A\u724C\u4EF7\uFF1A</i>\n                                <b><del>\uFFE5 ' + item.pricenow + '</del></b>\n                            </span>\n                        </div>\n                        <div class="goods_price_tr fr">\n                            <span><i>' + item.zk + '</i>\u6298</span>\n                        </div>\n                    </div>\n                    <div class="goods_price_b">\n                        <div class="goods_price_bl fl">\n                            \u672C\u54C1\u4E0D\u53C2\u52A0vip\uFF0Csvip\u6298\u6263\n                        </div>\n                        <div class="goods_price_br fr">\n                            <a href="javascript:;">\u4F1A\u5458\u89C4\u5219</a>\n                        </div>\n                    </div>   \n                </div>\n                <div class="sales">\n                    <span>\u9500\u91CF<i>2</i></span>\n                    <span>\u7D2F\u8BA1\u8BC4\u4EF7<i>--</i></span>\n                    <span>\u9001\u90A6\u8D2D\u79EF\u5206<i>63</i></span>\n                </div>\n                <div class="goods_color">\n                    <p>\n                        <span>\n                            \u989C\u8272\uFF1A\n                        </span>\n                        <span class="col">\n                            \u8BF7\u9009\u62E9\u989C\u8272\n                        </span>\n                    </p>\n                    <div class="color_sma">\n                        <a href="javascript:;" attr_value="\u84DD\u8272\u7EC4"><img src="../img/color_sma1.jpg" alt="" /></a>\n                        <a href="javascript:;" attr_value="\u9ED1\u767D\u7EC4"><img src="../img/color_sma2.jpg" alt="" /></a>\n                    </div>\n                </div>\n                <div class="goods_size">\n                    <p>\n                        <span>\n                            \u5C3A\u7801\uFF1A\n                        </span>\n                        <span class="size">\n                            \u8BF7\u9009\u62E9\u5C3A\u7801\n                        </span>\n                    </p>\n                    <div class="size_type">\n                        <a href="javascript:;">S:155/80A</a>\n                        <a href="javascript:;">M:160/84A</a>\n                        <a href="javascript:;">L:165/88A</a>\n                    </div>\n                </div>\n                <div class="goods_num">\n                    <dl>\n                        <dt>\u8D2D\u4E70\u6570\u91CF\uFF1A</dt>\n                        <dd>\n                            <a href="javascript:;" class="num_less">-</a>\n                            <input type="text" value="1" class="nums" />\n                            <a href="javascript:;" class="num_add">+</a>\n                        </dd>\n                    </dl>\n                </div>\n                <div class="goods_btn">\n                    <a href="javascript:;">\u52A0\u5165\u8D2D\u7269\u888B</a>\n                </div>\n                <div class="goods_more">\n                    <p>\n                        <span>\n                            \u6D4F\u89C8\u66F4\u591A\uFF1A\n                        </span>\n                        <span class="size">\n                            \u6BDB\u8863\n                        </span>\n                    </p>\n                </div>\n                <div class="goods_hint">\n                    <span>\u6D4F\u89C8\u66F4\u591A\uFF1A</span>\n                    <ul class="clearfix">\n                        <li><em></em>\u6B64\u5546\u54C1\u4E0D\u53EF\u4F7F\u7528\u90A6\u8D2D\u7EA2\u5305</li>\n                        <li><em></em>\u6B64\u5546\u54C1\u4E0D\u53EF\u4F7F\u7528\u79EF\u5206</li>\n                        <li><em></em>14\u5929\u9000\u6362</li>\n                    </ul>\n                </div>\n            </div>';
        } else {
            var html = '<div class="frame_lt fl">\n                <div class="imgdet">\n                    <div class="imgpart">\n                        <div class="pic">\n                            <img src="' + item.imgs + '" width="480px" height="480px" alt="" />\n                            <div class="magnify"></div>\n                        </div>\n                        <div class="bigpic">\n                            <img src="' + item.imgs + '" width="480px" height="480px" alt="" />\n                        </div>\n                    </div>\n                    <div class="imglist">\n                        <ul>\n                            <li class="active"><img src="' + item.litimg1 + '" alt="" /></li>\n                            <li><img src="' + item.litimg2 + '" alt="" /></li>\n                            <li><img src="' + item.litimg3 + '" alt="" /></li>\n                        </ul>\n                    </div>\n                </div>\n                <div class="share">\n                    <div class="goods_id fl">\n                        \u5546\u54C1\u7F16\u53F7\uFF1A<i>' + item.id + '</i>\n                    </div>\n                    <div class="share_to fl">\n                        <a href="javascript:;">\u5206\u4EAB</a>\n                    </div>\n                    <div class="share_dz fl">\n                        <a href="javascript:;">\u70B9\u8D5E</a>\n                    </div>\n                </div>\n            </div>\n            <div class="frame_rt fr">\n                <div class="goods_name">\n                    <a href="javascript:;">' + item.brand_name + '</a>\n                    ' + item.good_name + '\n                </div>\n                <div class="goods_price">\n                    <div class="goods_price_t">\n                        <div class="goods_price_tl fl">\n                            <span>\n                                <i>\u552E\u4EF7\uFF1A</i>\n                                <b>\uFFE5' + item.price + '</b>\n                            </span>\n                            <span>\n                                <i>\u540A\u724C\u4EF7\uFF1A</i>\n                                <b><del>\uFFE5 ' + item.pricenow + '</del></b>\n                            </span>\n                        </div>\n                        <div class="goods_price_tr fr">\n                            <span><i>' + item.zk + '</i>\u6298</span>\n                        </div>\n                    </div>\n                    <div class="goods_price_b">\n                        <div class="goods_price_bl fl">\n                            \u672C\u54C1\u4E0D\u53C2\u52A0vip\uFF0Csvip\u6298\u6263\n                        </div>\n                        <div class="goods_price_br fr">\n                            <a href="javascript:;">\u4F1A\u5458\u89C4\u5219</a>\n                        </div>\n                    </div>   \n                </div>\n                <div class="sales">\n                    <span>\u9500\u91CF<i>2</i></span>\n                    <span>\u7D2F\u8BA1\u8BC4\u4EF7<i>--</i></span>\n                    <span>\u9001\u90A6\u8D2D\u79EF\u5206<i>63</i></span>\n                </div>\n                <div class="goods_color">\n                    <p>\n                        <span>\n                            \u989C\u8272\uFF1A\n                        </span>\n                        <span class="col">\n                            \u8BF7\u9009\u62E9\u989C\u8272\n                        </span>\n                    </p>\n                    <div class="color_sma">\n                        <a href="javascript:;" attr_value="\u84DD\u8272\u7EC4"><img src="../img/color_sma1.jpg" alt="" /></a>\n                        <a href="javascript:;" attr_value="\u9ED1\u767D\u7EC4"><img src="../img/color_sma2.jpg" alt="" /></a>\n                    </div>\n                </div>\n                <div class="goods_size">\n                    <p>\n                        <span>\n                            \u5C3A\u7801\uFF1A\n                        </span>\n                        <span class="size">\n                            \u8BF7\u9009\u62E9\u5C3A\u7801\n                        </span>\n                    </p>\n                    <div class="size_type">\n                        <a href="javascript:;">S:155/80A</a>\n                        <a href="javascript:;">M:160/84A</a>\n                        <a href="javascript:;">L:165/88A</a>\n                    </div>\n                </div>\n                <div class="goods_num">\n                    <dl>\n                        <dt>\u8D2D\u4E70\u6570\u91CF\uFF1A</dt>\n                        <dd>\n                            <a href="javascript:;" class="num_less">-</a>\n                            <input type="text" value="1" class="nums" />\n                            <a href="javascript:;" class="num_add">+</a>\n                        </dd>\n                    </dl>\n                </div>\n                <div class="goods_btn">\n                    <a href="javascript:;">\u52A0\u5165\u8D2D\u7269\u888B</a>\n                </div>\n                <div class="goods_more">\n                    <p>\n                        <span>\n                            \u6D4F\u89C8\u66F4\u591A\uFF1A\n                        </span>\n                        <span class="size">\n                            \u6BDB\u8863\n                        </span>\n                    </p>\n                </div>\n                <div class="goods_hint">\n                    <span>\u6D4F\u89C8\u66F4\u591A\uFF1A</span>\n                    <ul class="clearfix">\n                        <li><em></em>\u6B64\u5546\u54C1\u4E0D\u53EF\u4F7F\u7528\u90A6\u8D2D\u7EA2\u5305</li>\n                        <li><em></em>\u6B64\u5546\u54C1\u4E0D\u53EF\u4F7F\u7528\u79EF\u5206</li>\n                        <li><em></em>14\u5929\u9000\u6362</li>\n                    </ul>\n                </div>\n            </div>';
        }

        $('.frame').html(html);
        fdj();
    }

    // top_reg下拉菜单
    $('.reg_r li').hover(function () {
        $(this).find('ul').css({
            'display': 'block'
        });
    }, function () {
        $(this).find('ul').css('display', 'none');
    });

    // top_nav下拉菜单
    $('.nav_l').find('li').hover(function () {
        $(this).find('.classify').css('display', 'block');
        $(this).find('.classify').animate({
            'opacity': 1
        }, 500);
    }, function () {
        $(this).find('.classify').css('display', 'none');
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
    $('.color_sma a img').attr('isOk', 'true');
    $('.frame').on('click', '.color_sma a img', function () {
        var ok = $(this).attr('isOk');
        if (ok == 'true') {
            var cor = $(this).parent().attr('attr_value');
            $('.goods_color p .col').html(cor);
            $('.color_sma a img').removeClass('color_bd');
            $(this).addClass('color_bd');
            $('.color_sma a img').attr('isOk', 'true');
            $(this).attr('isOk', 'false');
        } else {
            $('.goods_color p .col').html('请选择颜色');
            $('.color_sma a img').removeClass('color_bd');
            $(this).attr('isOk', 'true');
        }
    });

    //点击size分类显示对应size
    $('.goods_size .size_type a').attr('isOk', 'true');
    $('.frame').on('click', '.goods_size .size_type a', function () {
        var ok = $(this).attr('isOk');
        if (ok == 'true') {
            var cor = $(this).html();
            $('.goods_size .size').html(cor);
            $('.goods_size .size_type a').removeClass('size_bd');
            $(this).addClass('size_bd');
            $('.goods_size .size_type a').attr('isOk', 'true');
            $(this).attr('isOk', 'false');
        } else {
            $('.goods_size .size').html('请选择尺码');
            $('.goods_size .size_type a').removeClass('size_bd');
            $(this).attr('isOk', 'true');
        }
    });

    //详情页内数量++和--
    var num_text = 1;
    $('.frame').on('click', '.goods_num .num_less', function () {
        if (num_text <= 1) {
            num_text = 1;
        } else {
            num_text--;
        }
        $(this).next().val(num_text);
    });
    $('.frame').on('click', '.goods_num .num_add', function () {
        if (num_text >= 100) {
            num_text = 100;
        } else {
            num_text++;
        }
        $(this).prev().val(num_text);
    });
    //在输入框输入内容后还可以正常使用++--
    $('.frame').on('keyup', '.goods_num .nums', function () {
        var val = $(this).val();
        if (val >= 100) {
            val = 100;
        }if (val <= 1) {
            val = 1;
        }
        $(this).val(val);
        num_text = val;
    });

    //吸顶菜单
    var top = $('.frame').outerHeight() + 280;
    $(window).scroll(function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop >= top) {
            $('.des_r .tabNav').addClass('tabNav_fix');
            $('.tabNav_detail,.addToCart').css('display', 'block');
        } else {
            $('.des_r .tabNav').removeClass('tabNav_fix');
            $('.tabNav_detail,.addToCart').css('display', 'none');
        }
        var top1 = $('.detail_more').offset().top;
        var top2 = $('.detail_lists').offset().top;
        var top3 = $('.detail_know').offset().top;
        // console.log(top1,top2,top3,scrollTop);
        if (top1 < scrollTop && scrollTop < top2) {
            $('.tabNav_nav').css('color', '#666');
            $('.tabNav_page').css('color', '#666');
            $('.tabNav_hover').css('color', '#F8584F');
        }
        if (top2 < scrollTop && scrollTop < top3) {
            $('.tabNav_hover').css('color', '#666');
            $('.tabNav_page').css('color', '#666');
            $('.tabNav_nav').css('color', '#F8584F');
        }
        if (top3 < scrollTop) {
            $('.tabNav_hover').css('color', '#666');
            $('.tabNav_nav').css('color', '#666');
            $('.tabNav_page').css('color', '#F8584F');
        }
        if (scrollTop < top1) {
            $('.tabNav_hover').css('color', '#666');
            $('.tabNav_nav').css('color', '#666');
            $('.tabNav_page').css('color', '#666');
        }
    });

    //楼层跳跃
    $('.tabNav_hover').click(function () {
        var top = $('.detail_more').offset().top;
        $(document).scrollTop(top);
    });
    $('.tabNav_nav').click(function () {
        var top = $('.detail_lists').offset().top;
        $(document).scrollTop(top);
    });
    $('.tabNav_page').click(function () {
        var top = $('.detail_know').offset().top;
        $(document).scrollTop(top);
    });
    $('.addToCart').click(function () {
        var top = $('.goods_name').offset().top;
        $(document).scrollTop(top);
    });

    //加入购物车
    $('.frame').on('click', '.goods_btn', function () {
        $('.addCartSuccess').addClass('addcar');
        $('.openpop_mask').css('display', 'block');

        //发送ajax请求，id，商品名称
        var listId = $('.frame_lt .goods_id i').html();
        var num = $('.frame_rt .goods_num .nums').val();
        $.ajax({
            type: "get",
            url: "../api/addCar.php",
            async: true,
            data: { 'id': listId, 'num': num },
            success: datas
        });
    });

    //修改购物车总数量
    function datas(data) {
        $.ajax({
            type: 'get',
            url: '../api/shop_car.php',
            async: true,
            data: { way: 'sum' },
            success: function success(data) {
                // console.log(data);
                $('.logo_r a b').html(data);
            }
        });
    }

    //删除提示框,留在本页面
    $('.car_close,.btnGoShop').click(function () {
        $('.addCartSuccess').removeClass('addcar');
        $('.openpop_mask').css('display', 'none');
    });
    //跳转到购物车页面
    $('.btnGoPay').click(function () {
        $('.addCartSuccess').removeClass('addcar');
        $('.openpop_mask').css('display', 'none');
        window.open('../html/shop.html');
    });
});