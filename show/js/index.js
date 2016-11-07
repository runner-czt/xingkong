// $(document).ready(function() {

// 	var page = $("#page");
// 	var yc = $(".yc");
// 	var js = $(".js");
// 	var cm = $(".cm");
// 	var w = 612;
// 	var list = $("#List");
// 	var Li = $('.cm .show .button-list li')

// 	console.log(w)
// 	console.log(list)
// 	console.log(Li)


// 	page.find('.direction').find('a').click(function(event) {
// 		var baba = $(this).parent();
// 		baba.addClass('on').siblings('h3').removeClass('on');
// 	});

// 	page.find('.show').find('.list').find('li img').click(function(event) {
// 		var baba = $(this).parent();
// 		baba.hide('fast', function() {
// 			$(this).html("<div id='test'><h2 style='font-weight: 400;'>陈钟涛</h2><h6>15软件工程2班</h6></div><img src='1.jpg' alt='员工1'>");
// 		});
// 		// baba
// 		baba.show('slow');

// 	});
// 	// js.find('.direction').find('a').click(function(event) {
// 	// 	var baba = $(this).parent();
// 	// 	baba.addClass('on').siblings('h3').removeClass('on');
// 	// });
// 	// cm.find('.direction').find('a').click(function(event) {
// 	// 	var baba = $(this).parent();
// 	// 	baba.addClass('on').siblings('h3').removeClass('on');
// 	// });
// 	// $('#List .button-list').delegate('li', 'click', function(event) {
// 	// 	alert('ok');
// 	// 	i = $(this).index();
// 	// 	list.animate({left: -i*w}, 400);
// 	// 	Li.eq(i).addClass('btn-on').siblings('li').removeClass('btn-on');
// 	// });
// 	Li.click(function(event) {
// 		i = $(this).index();
// 		list.animate({left: -i*w}, 400);
// 		Li.eq(i).addClass('btn-on').siblings('li').removeClass('btn-on');
// 	});


// });

$(document).ready(function() {

	var cmButton = $('#cm-btn');
	var cmList = $('#cm-list');
	var jsButton = $('#js-btn');
	var jsList = $('#js-list');
	var ycButton = $('#yc-btn');
	var ycList = $('#yc-list');


	var cmDirection = $('#cm-direction-ul');


	var cmShow = $('#cm-show');

	var i = 0;
	var j = 0;
	var w = 612;
	
	
	photoPlay(cmButton,cmList);
	// photoPlay(jsButton,jsList);
	// photoPlay(ycButton,ycList);

	directionSwich(cmDirection,cmShow);


	//photo滚动函数
	function photoPlay(btn,list){
		btn.delegate('li', 'click', function(event) {
			$(this).addClass('btn-on').siblings('li').removeClass('btn-on');
			i = $(this).index();
			list.animate({left: -i*w}, 300);
		});
	}
	//direction切换函数
	function directionSwich(ul,show){
		ul.delegate('a', 'click', function(event) {
		$(this).parent('li').addClass('direction-on').siblings('li').removeClass('direction-on');
		show.fadeOut(600).fadeIn(600)
	});
	}
});