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

	var design = ["邓婉滢", "简懿琳", "李靖雯", "卢杨帆", "魏世强", "谢梦姗", "詹飘雪", "张东艺", "张敏琪", "林圳锋","杨姚花","郑凯玲","张彦",
				"16级工业设计1班","16级国贸双语2班","16级工业设计1班","16级服装设计1班","16级产品设计4班","16级工业设计2班","16级服装设计2班",
				"16级产品设计3班","16级会计10班","16级产品设计6班","16级会计双语班","16级网络工程1班","16级会计7班"];
	var photography = ["林伟涛","殷玮瑄","谭超宏","陈佳","董靖宜",
					"16级国贸双语2班","16级国贸国际","16级计算机科学与技术2班","16级自动化一班","15级服装设计1班"];
	var video = ["黄佳欣","雷丽怡","黎嘉琪","叶彦宏","何彬","黄开裕","梁浩瀚","马湖标","何永海",
				"16级人力2班","16级会计2班","16级会计11班","16级通信工程1班","16级网络工程2班","16级会计10班","16级软件工程2班","16级软件工程4班","16级机械工程2班"];

	var android = ["陈榕杰","林海","饶翰新","翟子秋","马超勇","林镇贤","李哲翰",
				"16级计算机科学与技术1班","16级计算机科学与技术4班","16级软件工程4班","16级计算机科学与技术1班","16级网络工程1班",
				"16级网络工程1班","16级网络工程1班"];
	var web = ["郭冰森","谢典泓","潘俊豪","林镇基","曾贵花","李嘉聪","邹威","陈怡芯","黄超","黄广锐","严智轩","严颂",
			"16级软件工程2班","16级网络工程1班","16级网络工程2班","16级网络工程2班","16级通信工程2班","16级通信工程1班",
			"16级软件工程5班","16级网络工程1班","16级软件工程5班","16级软件工程3班","16级通信工程1班","16级电气工程3班"];
	var iOS = ["林曼琪","姚雪儿","谢梓鹏","莫培彬",
			"16级国贸6班","16级金融4班","16级网络工程1班","16级计算机科学与技术1班"];

	var plan = ["叶佐豪","冯剑儒","郭晓涵","何学良","欧玲玲","王斐","黄启凡","颜名海","钟智键","郭奕灿","陈康宝","林铮",
			"16级机械工程4班","16级财务管理5班","16级国际贸易2班","16级网络工程1班","16级双语会计1班","16级软件工程3班","16级市场营销1班",
			"16级机械工程3班","16级软件工程1班","16级网络工程1班","16级机械工程4班","16级金融工程5班"];
	var product = ["吴洋","陈彦潼","胡美君","饶倩如","苏漫","吴少凯","吴意","张钟珊","梅蔼莹",
				"16级会计5班","16级国贸1班","16级会计1班","16级财管6班","16级财管6班","16级软件2班","16级机电2班","16级会计11班","16级电商3班"];
	var media = ["庄琦","李铭姗","丘祥富","韦娴","肖晓琪","郑舒樱",
				"16级金融工程5班","16级国贸双语1班","16级工商管理6班","16级市场营销1班","16级产品设计3班","15级财务管理3班"];

	var cmInfo = [design,photography,video];
	var jsInfo = [android,web,iOS];
	var ycInfo = [plan,product,media];

	var i = 0;
	var j = 0;
	var x = 0;
	var w = 612;

	var cmfx = ["design", "photography", "video"];
	var jsfx = ["android", "web", "iOS"];
	var ycfx = ["plan", "product", "media"];

	var cmNum = [12, 4, 8];
	var jsNum = [6, 11, 3];
	var ycNum = [11, 8, 5];

	jsList.find('li').slice(7, 12).hide();


	photoPlay(cmButton, cmList);
	photoPlay(jsButton, jsList);
	photoPlay(ycButton, ycList);


	directionSwich(cmDirection, cmShow, cmList, 'cm', cmfx, cmButton, cmNum, x, cmInfo);
	directionSwich(jsDirection, jsShow, jsList, 'js', jsfx, jsButton, jsNum, x, jsInfo);
	directionSwich(ycDirection, ycShow, ycList, 'yc', ycfx, ycButton, ycNum, x, ycInfo);
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
	function directionSwich(ul, show, list, str, fx, btn, num, x, info) {
		ul.delegate('a', 'click', function(event) {
			var baba = $(this).parent('li');
			if (x === baba.index()) {
				return 0;
			} else {
				x = baba.index();
			}

			baba.addClass('direction-on').siblings('li').removeClass('direction-on');

			btn.find('li').first().nextAll('li').remove();
			if (Math.floor(num[x] / 6) === 2) {
				btn.find('li').first().after('<li></li><li></li>');
			} else if (Math.floor(num[x] / 6) === 1) {
				btn.find('li').first().after('<li></li>');
			}
			show.fadeOut('slow', function() {
				list.find('li').slice(num[x], 13).hide();
				list.find('li').slice(0, num[x] + 1).each(function(index, el) {
					$(this).css('background', 'url(images/' + str + '/' + fx[x] + '/' + index + '.jpg)');
					$(this).html("<div class='mask'><p class='name'>" + info[x][index] +"</p><p class='grade'>" + info[x][num[x]+index+1] + "</p></div>")
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