/* https://www.huahanlink.com/ */
/* 技术：小王 QQ：491813163  微信：18223904336 */

// IE10以下浏览器提示
function hiUpgrade() {
	window.AESKey = ''; /* // 判断浏览器是否支持placeholder属性*/
	function isSupportPlaceholder() {
		var input = document.createElement('input');
		return 'placeholder' in input;
	}; /*判断是否是IE浏览器，包括Edge浏览器*/
	function IEVersion() {
		/* //取得浏览器的userAgent字符串*/
		var userAgent = navigator.userAgent; /*//判断是否IE浏览器*/
		var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1;
		if (isIE) {
			/*// ie10及以下*/
			var reIE = new RegExp("MSIE (\\d+\\.\\d+);");
			reIE.test(userAgent);
			var fIEVersion = parseFloat(RegExp["$1"]);
			if (fIEVersion < 10 || !isSupportPlaceholder()) {
				return true;
			}
		} else {
			return false;
		}
	}
	var tpl = '<div id="hi-upgrade"><div class="hi-wrap"><p class="hi-title">无法正常浏览本网站！</p><div class="hi-close">继续浏览</div><div class="hi-text1"><p>1、您的浏览器版本过低，请升级您的浏览器。</p><p>2、如果您的浏览器是最新版本，请<span>切换到极速模式</span>访问。</p><p>3、您使用的是IE10以下的浏览器，建议您<span>使用主流浏览器</span>访问。</p></div><p class="hi-text2"><span>主流浏览器下载</span></p><ul class="hi-list"><li><a href="https://www.google.cn/intl/zh-CN/chrome/" target="_blank"><div class="hi-ico1"></div><p>谷歌浏览器</p></a></li><li><a href="http://www.firefox.com.cn/download/" target="_blank"><div class="hi-ico2"></div><p>火狐浏览器</p></a></li><li><a href="http://browser.360.cn" target="_blank"><div class="hi-ico3"></div><p>UC浏览器</p></a></li><li><a href="https://www.uc.cn" target="_blank"><div class="hi-ico4"></div><p>360浏览器</p></a></li><li><a href="https://browser.qq.com" target="_blank"><div class="hi-ico5"></div><p>QQ浏览器</p></a></li><li><a href="https://ie.sogou.com" target="_blank"><div class="hi-ico6"></div><p>搜狗浏览器</p></a></li></ul></div></div>';
	if (IEVersion()) {
		document.write(tpl);
	}
}
hiUpgrade();
// 禁止+-
window.onload = function () {
	document.addEventListener("keydown", function (event) {
		if ((event.ctrlKey === true || event.metaKey === true) && (event.which === 61 || event.which === 107 || event.which === 173 || event.which === 109 || event.which === 187 || event.which === 189)) {
			event.preventDefault();
		}
	}, false);
}
// 禁止滚轮
window.addEventListener("mousewheel", function (event) {
	if (event.ctrlKey === true || event.metaKey) {
		event.preventDefault();
	}
}, {
	passive: false
});
// Firefox
window.addEventListener("DOMMouseScroll", function (event) {
	if (event.ctrlKey === true || event.metaKey) {
		event.preventDefault();
	}
}, {
	passive: false
});

// 返回顶部
$(document).ready(function () {
	if ($("#to-top").length) {
			var btnTop = document.getElementById('to-top');
			btnTop.addEventListener('click', function () {
					window.scrollTo({
							top: 0,
							behavior: 'smooth'
					});
			});
	}
})
// 距离顶部100px
// $(document).ready(function(){
//   $(window).scroll(function(){
//     var scrollTop = $(window).scrollTop();
//     if(scrollTop > 100){
// 			$(".header_topnav").addClass("active")
// 		}else{
// 			$(".header_topnav").removeClass("active")
// 		}
//   });
// });

// Copy Obj
function deepClone(obj, newObj) {
	var newObj = newObj || {};
	for (let key in obj) {
		if (typeof obj[key] == "object") {
			newObj[key] = (obj[key].constructor === Array) ? [] : {};
			deepClone(obj[key], newObj[key]);
		} else {
			newObj[key] = obj[key]
		}
	}
	return newObj;
}
/* 视频 弹窗 */
function popup_video(src) {
	$("#popup_video").attr("src", src);
	$(".popup_video").addClass("active");
	var video = $(".popup_video").find("video")[0];
	video.play();
}
/* 弹窗 - 图片 */
function popup_img(src) {
	$("#popup_img").attr("src", src);
	$(".popup_img").addClass("active");
}
/* 添加 - active */
function popup_text() {
	$(".popup_text").addClass("active");
}
/* 搜索 - 打开 */
function popup_search(){
	$(".search_for").addClass("active");
}
/* 弹窗 - 关闭 */
function popup_close() {
	$(".remove_box").removeClass("active");
	var video = $(".popup_video").find("video")[0];
	video.pause();
}

function good_close() {
	$(".good_box").removeClass("active");
	var video = $('.popup_video').find("video")[0];
	video.pause();
}
/* 置顶 */
function goUp() {
	$("html,body").animate({
		"scrollTop": 0
	}, 1000);
}
$(".close_popup").click(function () {
	$(".open_popup").removeClass("active");
})

let wH = window.innerHeight,
	wW = window.innerWidth,
	c = "active";

$(document).ready(function () {
	"use strict";
	/* 全局公共属性 */

	// 滚动加载入场动画 --开始

    // 判断元素出现在可视窗口的时候添加clsss  
    // 传参一： 需要出现在窗口的类名 
    // 传参二： 需要 
    // 传参二： 需要再窗口出现位置 取值范围 例如 0.5  就是 vh * 0.5  窗口的一半 
    // wowFun("svgBox1",0.5); 
    // let wH = window.innerHeight, wW = window.innerWidth, c = "active";
    function wowFun(a, b, c) {
			var box = $(a);
			var scrollTop_wH;
			if (c > 1 || c < 0 || c == 0) {
					c = 1
			}
			if (box != "" || box != null) {
					box.each(function () {
							var _this = $(this),
									topNum = _this.offset().top,
									scrollTop = $(window).scrollTop() + (wH * c),
									d = _this.attr("data-time");
							if (d == null || d == "undefined" || d == 0) {
									d = 0;
							}
							if (scrollTop > topNum) {
									setTimeout(function () {
											_this.addClass(b);
									}, d)
							} else {
									_this.removeClass(b);
							}
							$(window).scroll(function () {
									topNum = _this.offset().top, scrollTop = $(window).scrollTop() + (wH * c), scrollTop_wH = $(window).scrollTop() + wH;
									if (scrollTop > topNum) {
											_this.addClass(b);
											_this.css({
													"animation-delay": d + "ms"
											})
									} else if (scrollTop_wH < topNum || scrollTop_wH == topNum) {
											_this.removeClass(b);
									}
							});
					})
			}
		}
		wowFun(".s-animate", "fadeInLeft", 1);
		wowFun(".s-animate-up", "fadeInUp", 1);
		wowFun(".s-animate-rotate", "rotateonce", 1);
		function HiResumeMessagePop(obj, sText) {
			var oResumeBox = $(".hi-resume-pop-message"); //弹窗
			var oClose = oResumeBox.find(".hi-close"); //关闭按钮
			var oText = oResumeBox.find(".hi-text"); //上传简历名
			var oInput = oResumeBox.find(".hi-file"); //上传文本框
			var oForm = oResumeBox.find("form");//form
			var sFileName = "";
			// 点击显示简历弹窗
			$(document).on("click", obj, function () {
					oResumeBox.stop().fadeIn();
			})
			// 点击form阻止冒泡
			oForm.click(function (event) {
					event.stopPropagation();
			});
			// 点击弹窗，隐藏简历弹窗
			oResumeBox.click(function (event) {
					event.stopPropagation();
					oResumeBox.stop().fadeOut();
			});
			// 点击关闭按钮，隐藏简历弹窗
			oClose.click(function (event) {
					event.stopPropagation();
					oResumeBox.stop().fadeOut();
			});
			// 设置上传文件名
			oInput.change(function (event) {
					sFileName = $(this).val().split('\\');
					sFileName = sFileName[sFileName.length - 1];
					oText.text(sText + sFileName);
			});
		}
		HiResumeMessagePop(".messagebtn");

		
		// menu点击
		function menuBread() {
			var showbread = $("header .header_box").hasClass("header_bread");
			$("header .header_box .center_box .zk_icon").click(function(){
				$(this).toggleClass("icon_on");
				$("header .header_box").toggleClass("header_bread");
				$(".navbread_box").slideToggle();
			})

			$("header .header_box .center_box .item_box .item").hover(function(){
				$(this).find(".panel").stop().slideToggle()
			})
		}
		menuBread()

		// 文字过渡动画
		function aniText() {
			var PC = $(window).width() > 1200,
				mobile = $(window).width() <= 1200,
				winWidth = $(window).width(),
				winHeight = $(window).height();
			if (mobile) {}
			if (PC) {
				const textElements = gsap.utils.toArray('.ani-text-opacity');
				textElements.forEach(text => {
					gsap.to(text, {
						backgroundSize: '100%',
						ease: 'none',
						scrollTrigger: {
							trigger: text,
							start: 'center 80%',
							end: 'center 50%',
							scrub: true,
							// markers: {startColor: "red", endColor: "red", fontSize: "18px", fontWeight: "bold", indent: 20},
						},
					});
				});
			}
		}
		aniText();

	/* --------------------------------------------------------------- 首页 */
		/* 首页banner */ 
		function ins_aboutCon1() {
				var box = $('.idx_banner1');
				if (box.length) {
						var swiper = box.find('.swiper_box'), pagination = box.find('.idxPageHide'), prev = box.find('.prev'), next = box.find('.next');
						var swiper_1 = new Swiper(swiper, {
							autoplay:true, 
							loop:true,
							slidesPerView: 1, spaceBetween: 0, speed: 3000,
							pagination: { el: pagination, clickable: true, },
							navigation: { nextEl: next, prevEl: prev, },
							centeredSlides : true,
						})
				}
		}
		ins_aboutCon1();
		// 首页解决方案
		function idx_solutionWrap(){
			var box = $('.idx_solution'),
			item = box.find(".ileft .itemlist li");
			if (box.length) {
					var swiper = box.find('.iright .swiper_box'), pagination = box.find('.idxPageHide'), prev = box.find('.prev'), next = box.find('.next');
					var swiper_1 = new Swiper(swiper, {
						autoplay:true, 
						// loop:true,
						effect:"fade",
						slidesPerView: 1, spaceBetween: 0, speed: 3000,
						pagination: { el: pagination, clickable: true, },
						navigation: { nextEl: next, prevEl: prev, },
						centeredSlides : true,
					})
			}
			item.eq(0).addClass("on")
			item.hover(function(){
				$(this).addClass("on").siblings().removeClass("on");
				var index = $(this).index();
				swiper_1.slideTo(index) 
			})

		}
		idx_solutionWrap();

		// 首页案例
		function idx_caseWrap(){		
			var box = $('.idx_case');
			// box.find(".swiper-wrapper").style.transform  = '';
			if (box.length) {
					var swiper = box.find('.swiper_box'), pagination = box.find('.idxPageHide'), prev = box.find('.prev'), next = box.find('.next');
					var swiper_1 = new Swiper(swiper, {
						// autoplay:true, 
						// loop:true,
						// effect:"fade",
						initialSlide: 0, // 设置初始显示的幻灯片索引为0
    				centeredSlides: false, // 关闭居中显示模式
						slidesPerView: 3, spaceBetween: 16,
						pagination: { el: pagination, clickable: true, },
						navigation: { nextEl: next, prevEl: prev, },
						breakpoints: {
							480: {
								slidesPerView: 1,
							},
							768: {
								slidesPerView: 2,
							}
						}
					})
			}
			
		}
		idx_caseWrap()

		
			
		// 2层--自动轮播1
		function indNewsWrapOne() {
			var mySwiper = new Swiper('.inw-swipper .autoplay-one', {
				loop: true, //可选选项，开启循环
				slidesPerView:7,
				spaceBetween: 16,
				allowTouchMove: false,
				speed: 8000,
				// autoplay:true,
				autoplay: {
					delay: 0,
					disableOnInteraction: false,
				},
				breakpoints: {
					768: {
						slidesPerView: 4,
					}
				}
			})
		}
		indNewsWrapOne();

		function indNewsWrapTwo() {
			var mySwiper = new Swiper('.inw-swipper .autoplay-two', {
				loop: true, //可选选项，开启循环
				slidesPerView: 7,
				spaceBetween: 20,
				allowTouchMove: false,
				speed: 8000,

				// autoplay:true,
				autoplay: {
					delay: 0,
					disableOnInteraction: false,
				},
				breakpoints: {
					768: {
						slidesPerView: 4,
					}
				}
			})
		}
		indNewsWrapTwo();
		// 首页新闻
		function idx_newsWrap(){		
			var box = $('.idx_news');
			if (box.length) {
					var swiper1 = box.find('.swiper_box'),imglist = box.find('.right'), pagination = box.find('.idxPageHide'), prev = box.find('.prev'), next = box.find('.next');
					
					var swiper_1 = new Swiper(swiper1, {
						autoplay:true, 
						// loop:true,
						speed:800,
						effect:"fade",
						initialSlide: 0, // 设置初始显示的幻灯片索引为0
						centeredSlides: false, // 关闭居中显示模式
						slidesPerView: 1, spaceBetween: 16,
						pagination: { el: pagination, clickable: true, },
						navigation: { nextEl: next, prevEl: prev, },
						breakpoints: {
							480: {
								slidesPerView: 1,
							}
						}
					})
					var swiper_2 = new Swiper(imglist, {
						autoplay:true, 
						// loop:true,
						// effect:"fade",
						speed:800,
						initialSlide: 0, // 设置初始显示的幻灯片索引为0
						centeredSlides: false, // 关闭居中显示模式
						slidesPerView: 1, spaceBetween: 16,
						pagination: { el: pagination, clickable: true, },
						navigation: { nextEl: next, prevEl: prev, },
						breakpoints: {
							480: {
								slidesPerView: 1,
							}
						},
						on: {
							slideChangeTransitionStart: function(){
								// alert(this.activeIndex);
								swiper_1.slideTo(this.activeIndex)
							},
						},
					})
			}
			
		}
		idx_newsWrap()

		// 首页新闻列表
		function idx_newslistWrap(){		
			var box = $('.idx_newslist');
			// box.find(".swiper-wrapper").style.transform  = '';
			if (box.length) {
					var swiper = box.find('.swiper_box'), pagination = box.find('.idxPageHide'), prev = box.find('.prev'), next = box.find('.next');
					var swiper_1 = new Swiper(swiper, {
						// autoplay:true, 
						// loop:true,
						// effect:"fade",
						initialSlide: 0, // 设置初始显示的幻灯片索引为0
						centeredSlides: false, // 关闭居中显示模式
						slidesPerView: 3, spaceBetween: 16, 
						pagination: { el: pagination, clickable: true, },
						navigation: { nextEl: next, prevEl: prev, },
						breakpoints: {
							480: {
								slidesPerView: 1,
							},
							768: {
								slidesPerView: 2,
							}
						}
					})
			}
			
		}
		idx_newslistWrap()

		/* --------------------------------------------------------------- 产品 */
		function product_wrap() {
			var box = $('.product_wrap');
			if (box.length) {
				var swiper = box.find('.swiper_box'),
					pagination = box.find('.idxPageHide'),
					prev = box.find('.prev'),
					next = box.find('.next');
				var swiper_1 = new Swiper(swiper, {
					autoplay:true,
					slidesPerView: 4.5,
					spaceBetween: 20,
					speed: 1200,
					loop: true,
					pagination: {
						el: pagination,
						clickable: true,
					},
					watchOverflow: true,
					navigation: {
						nextEl: next,
						prevEl: prev,
					},
					breakpoints: {
						990: {
							slidesPerView: 3.5,
							spaceBetween: 16,
						}
					},
				})
			}
		}
		product_wrap();

		// 添加产品对比弹窗
		function popAlert(){		
			$("#addproduct").click(function () {
				$("#hi-resume-pop").show()
			})
			$(".hi-close").click(function () {
				$("#hi-resume-pop").hide()

			})
		}
		popAlert()
		

		// 点击改变当前选中状态

		function profilter_result() {
			var box = $(".product_wrap "),
					good = box.find(".f_left .proitem .item .goods .good"),  //产品右侧筛选
					item = box.find(".f_right .itemlist .item");  //产品右侧筛选结果
					good.click(function(){
						$(this).addClass("active").siblings().removeClass("active");
					})
					item.click(function(){
						$(this).toggleClass("active")
					})
		}
		profilter_result()
		// 产品对比底部
		
		$(".showhide_btn").click(function(){
			$(this).parent().toggleClass("on")
		})
		

	/* --------------------------------------------------------------- 产品规格参数 */
	function product_parameters() {
		var box = $('.product_parameters');
		if (box.length) {
			var swiper = box.find('.product_info_top .flexbox .pic'),
				pagination = box.find('.idxPageHide'),
				prev = box.find('.prev'),
				next = box.find('.next');
			var swiper_1 = new Swiper(swiper, {
				slidesPerView:1,
				spaceBetween:0,
				speed: 1200,
				loop: true,
				pagination: {
					el: pagination,
					clickable: true,
				},
				watchOverflow: true,
				navigation: {
					nextEl: next,
					prevEl: prev,
				},
				breakpoints: {
					990: {
						slidesPerView: 1.2,
						spaceBetween: 12,
					}
				},
			})
		}
	}
	product_parameters();
		
	function product_related() {
		var box = $('.product_related');
		if (box.length) {
			var swiper = box.find('.itemlist'),
				pagination = box.find('.idxPageHide'),
				prev = box.find('.prev'),
				next = box.find('.next');
			var swiper_1 = new Swiper(swiper, {
				slidesPerView: 4,
				spaceBetween: 16,
				speed: 1200,
				//loop: true, effect: 'fade', fadeEffect: { crossFade: true, },
				pagination: {
					el: pagination,
					clickable: true,
				},
				watchOverflow: true,
				navigation: {
					nextEl: next,
					prevEl: prev,
				},
				breakpoints: {
					768: {
						slidesPerView: 3,
						spaceBetween: 12,
					},
					480: {
						slidesPerView: 1,
						spaceBetween: 12,
					}
				},
			})
		}
	}
	product_related();
	/* --------------------------------------------------------------- 产品规格参数 */
	function product_video() {
		var box = $('.product_video');
		if (box.length) {
			var swiper = box.find('.video_wrap'),
				pagination = box.find('.idxPageHide'),
				prev = box.find('.prev'),
				next = box.find('.next');
			var swiper_1 = new Swiper(swiper, {
				slidesPerView: 2,
				loop:true,
				spaceBetween: 16,
				speed: 1200,
				centeredSlides:true,
				//loop: true, effect: 'fade', fadeEffect: { crossFade: true, },
				pagination: {
					el: pagination,
					clickable: true,
				},
				watchOverflow: true,
				navigation: {
					nextEl: next,
					prevEl: prev,
				},
				breakpoints: {
					768: {
						slidesPerView: 3,
						spaceBetween: 12,
					},
					480: {
						slidesPerView: 1,
						spaceBetween: 12,
					}
				},
			})
		}
	}
	product_video();

	function product_casestudios() {
		var box = $('.product_casestudios');
		if (box.length) {
			var swiper = box.find('.itemlist .f_left'),
				swiper2 = box.find('.itemlist .f_right'),
				pagination = box.find('.idxPageHide'),
				prev = box.find('.prev'),
				next = box.find('.next');
			var swiper_1 = new Swiper(swiper, {
				slidesPerView: 1,
				spaceBetween: 38,
				speed: 1200,
				autoplay:true,
				loop: true, 
				effect: 'fade', fadeEffect: { crossFade: true, },
				pagination: {
					el: pagination,
					clickable: true,
				},
				watchOverflow: true,
				navigation: {
					nextEl: next,
					prevEl: prev,
				},
				on: {
					slideChange: function () {
						swiper_2.slideTo(this.activeIndex);
					},
				},
			
			})
			var swiper_2 = new Swiper(swiper2, {
				slidesPerView: 1.2,
				spaceBetween: 60,
				speed: 1200,
				loop: true,
				//effect: 'fade', fadeEffect: { crossFade: true, },
				pagination: {
					el: pagination,
					clickable: true,
				},
				watchOverflow: true,
				navigation: {
					nextEl: next,
					prevEl: prev,
				},
				on: {
					slideChange: function () {
						swiper_1.slideTo(this.activeIndex);
					},
				},
			
			})
		}
	}
	product_casestudios();


});