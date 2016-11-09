
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

	cmList.find('.mask').each(function(index) {
		var div = $(this);
		var p = div.children('p');
		p.eq(0).text('陈正则');
		if(p.eq(1).text() == ''){
			div.css('opacity', 0);
		}
	});

	directionSwich(cmDirection, cmShow, cmList, 'cm');

	//photo滚动函数
	function photoPlay(btn,list){
		btn.delegate('li', 'click', function(event) {
			$(this).addClass('btn-on').siblings('li').removeClass('btn-on');
			i = $(this).index();
			list.animate({left: -i*w}, 300);
		});
	}
	//direction切换函数
	function directionSwich(ul, show, list, str) {
		ul.delegate('a', 'click', function(event) {
			var baba = $(this).parent('li');
			var x = baba.index();
			baba.addClass('direction-on').siblings('li').removeClass('direction-on');
			show.fadeOut('slow', function() {
				var ul = list.children('ul');
				console.log(ul)
				ul.each(function(index) {
					$(this).children('li').each(function(i) {
						$(this).css('background', 'url(images/' + str + x + index + i + '.png)');
					});
				});

			}).fadeIn('slow', function() {

			});

		});
	}
});