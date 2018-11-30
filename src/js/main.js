requirejs.config({
    paths : {
        //新名字：旧名字
        //所有依赖
         "jquery": "jquery-1.10.1.min",
         "fdj": "../lib/fdj",
         "common": "common",
         "goods": "goods"
    },
    // 设置依赖关系
	shim:{
		'goods':{
			deps: ["jquery"]
		},
		'fdj':{
			deps: ["jquery"]
		},
        'goods':{
            deps: ["common"]
        }
    }
});

//main.js-----
requirejs(['jquery','fdj','common','goods'],function($){
//     //这里的代码等common，moduleA，moduleB，moduleC模块都加载完成后执行
//     //但不保证以上模块的加载顺序
    
    
//     //新功能：需要用到子模块：list和now
    
});
