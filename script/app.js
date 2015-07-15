$(function(){
	$("[class='item']>h2").live("click",function () {
		$ul = $(this).next('ul');
		$list = $("[class='item']>ul");
		for (var i = 0; i < $list.length; i++) {
			if($($list[i]).css('display')=='block'){
		 		$($list[i]).slideUp	(300);
		 		$($list[i]).prev('h2').css({"background-image":"url('./images/jia.png')","background-repeat":"no-repeat","background-position":"5px"});
			}
		};
		if($ul.css('display')=='none'){
			//换成减
			$ul.slideDown(300);
			$list = $("[class='item']>ul>li");
			for (var i = 0; i < $list.length; i++) {
				if($($list[i]).hasClass("item_active")){
		 		$($list[i]).removeClass("item_active");
				}
			};
			$($ul.children('li')[0]).addClass("item_active");

			$(this).css({"background-image":"url('./images/jian.png')","background-repeat":"no-repeat","background-position":"5px"});
						
		}else{
			//换成加
			$ul.slideUp(300);
			$(this).css({"background-image":"url('./images/jia.png')","background-repeat":"no-repeat","background-position":"5px"});
		}
	});

	$("[class='item']>ul>li").live("click",function(){
		 $list = $("[class='item']>ul>li");
		 for (var i = 0; i < $list.length; i++) {
			if($($list[i]).hasClass("item_active")){
		 		$($list[i]).removeClass("item_active");
			}
		};
		 $(this).addClass("item_active");
	});
	$("[class='item']>ul>li").live("mouseover",function(){
		if(!$(this).hasClass("item_active")){
			$(this).addClass("item_mou");
		}
	});
	$("[class='item']>ul>li").live("mouseout",function(){
			$(this).removeClass("item_mou");
	});
	//点击视频分类
	$("[class='top']>ul>li").live("click",function(){
			$list = $("[class='top']>ul>li");
			for (var i = 0; i < $list.length; i++) {
				if($($list[i]).hasClass("ed")){
		 		$($list[i]).removeClass("ed");
				}
			};
			$(this).addClass("ed");
			var struts = $(this).html();
			switch(struts){
				case '课程列表':
					
				break;
				case '最新发布':
				
				break;
				case '热门课程':
				
				break;
				case '官方推荐':
				
				break;
			}
	});



});