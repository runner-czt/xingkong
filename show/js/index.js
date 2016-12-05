$(document).ready(function() {

	var cmButton = $('#cm-btn');
	var jsButton = $('#js-btn');
	var ycButton = $('#yc-btn');

	var cmList = $('#cm-list');
	var jsList = $('#js-list');
	var ycList = $('#yc-list');

	var cmDirection = $('#cm-direction-ul');
	var jsDirection = $('#js-direction-ul');
	var ycDirection = $('#yc-direction-ul');

	var cmShow = $('#cm-show');
	var jsShow = $('#js-show');
	var ycShow = $('#yc-show');

	var sjName = ["邓婉滢","简懿琳","李靖雯","卢扬帆","魏世强","谢梦杉","詹飘雪","张东艺","张敏琪","林圳锋"]

	var i = 0;
	var j = 0;
	var x = 0;
	var w = 612;

	var cmfx = ["design", "photography", "video"];
	var jsfx = ["android", "web", "iOS"];
	var ycfx = ["plan", "product", "media"];

	var cmNum = [12,4,8];
	var jsNum = [6,11,3];
	var ycNum = [11,8,5];

	jsList.find('li').slice(7,12).hide();


	photoPlay(cmButton, cmList);
	photoPlay(jsButton,jsList);
	photoPlay(ycButton,ycList);


	directionSwich(cmDirection, cmShow, cmList, 'cm', cmfx, cmButton, cmNum, x);
	directionSwich(jsDirection, jsShow, jsList, 'js', jsfx, jsButton, jsNum, x);
	directionSwich(ycDirection, ycShow, ycList, 'yc', ycfx, ycButton, ycNum, x);
	//photo滚动函数
	function photoPlay(btn, list) {
		btn.delegate('li', 'click', function(event) {
			$(this).addClass('btn-on').siblings('li').removeClass('btn-on');
			i = $(this).index();
			list.animate({
				left: -i * w
			}, 300);
		});
	}
	//direction切换函数
	function directionSwich(ul, show, list, str, fx, btn, num, x) {
		ul.delegate('a', 'click', function(event) {
			var baba = $(this).parent('li');
			if (x === baba.index()) {
				return 0;
			}else {
				x = baba.index();
			}
			
			baba.addClass('direction-on').siblings('li').removeClass('direction-on');

			btn.find('li').first().nextAll('li').remove();
			if (Math.floor(num[x]/6) === 2) {
				btn.find('li').first().after('<li></li><li></li>');
			}else if (Math.floor(num[x]/6) === 1) {
				btn.find('li').first().after('<li></li>');
			}
			// console.log()
			show.fadeOut('slow', function() {
				// var ul = list.children('ul');
				// // console.log(ul)
				// ul.each(function(index) {

				// 	$(this).children('li').each(function(i) {
				// 		$(this).css('background', 'url(images/' + str + '/' + fx[x] + '/' + (index * 6 + i) + '.jpg)');
				// 	});
				// });
			list.find('li').slice(num[x], 13).hide();
			list.find('li').slice(0, num[x]+1).each(function(index, el) {
				$(this).css('background', 'url(images/' + str + '/' + fx[x] + '/' + index + '.jpg)');
				$(this).html("<div class='mask'><p class='name'>陈钟涛</p><p class='grade'>15软件工程2班</p></div>")
			}).show();


			}).fadeIn('fast', function() {
				btn.find('li').first().addClass('btn-on').siblings('li').removeClass('btn-on');
				list.animate({
					left: 0
				}, 300);
			});

		});
	}
});