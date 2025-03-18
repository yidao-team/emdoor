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
	// 页面距离底部距离
	
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

		
		// 导航栏悬浮
		$("header .header_box .center_box .item_box .item").hover(function () {
			$("header").addClass("active");
		})

		// menu点击
		function menuBread() {
			var showbread = $("header .header_box").hasClass("header_bread");
			$("header .header_box .center_box .zk_icon").click(function(){
				$(this).toggleClass("icon_on");
				$("header .header_box").toggleClass("header_bread");
				$(".navbread_box").slideToggle();
			})

			// $("header .header_box .center_box .item_box .item").hover(function(){
			// 	$(this).find(".panel").stop().slideToggle()
			// 	$(this).find(".solution_panel ").stop().slideToggle()

			// })
			
			// 当鼠标移动到页面顶部附近时显示导航栏
			$("header .header_box .center_box .item_box .item").on('mouseenter', function(e) {
				$(this).find(".panel").stop().slideDown();
				$(this).find(".solution_panel").stop().slideDown()
			});

			// 当鼠标离开导航栏时隐藏它
			$("header .header_box .center_box .item_box .item").on('mouseleave', function() {
				$(this).find(".panel").stop().slideUp();
				$(this).find(".solution_panel").stop().slideUp();
			});

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

		// a标签锚点平滑过渡
    $('a[href^="#"]').on('click', function(event) {
			var target = $(this.getAttribute('href'));
			if( target.length ) {
			event.preventDefault();
			$('html, body').stop().animate({
					scrollTop: target.offset().top - 60 // 调整滚动位置以适应导航栏的高度
			}, 1000, function() {
					window.location.hash = target.selector;
			});
			}
		});

	/* --------------------------------------------------------------- 首页 */
		/* 首页banner */ 
		function idx_banner1() {
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
		idx_banner1();
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
		function checkType(data) {
			let res = ''
			if (typeof data === 'object' && Array.isArray(data)) { //检查 data 是否是一个数组。Array.isArray() 是一个全局函数，用于判断给定的值是否为数组。
				res = 'Array'
			} else if (typeof data === 'object' && !Array.isArray(data)) { //Array.isArray检查一个变量是否为数组
				res = 'Object'
			} else {
				res = ''
			}
			return res
	}
		function product_wrap() {
			var swiper1ActiveIndex = 0, // 第一个轮播的索引
			    box = $('.product_wrap');
			if (box.length) {
				var swiper = box.find('.swiper_box'),
					swiper2 = box.find('.procontent'),
					pagination = box.find('.idxPageHide'),
					prev = box.find('.prev'),
					next = box.find('.next');
				var swiper_1 = new Swiper(swiper, {
					slidesPerView: 4.5,spaceBetween: 20,speed: 1200,
					pagination: {el: pagination,clickable: true,},
					watchOverflow: true,
					navigation: {nextEl: next,prevEl: prev,},
					breakpoints: {
						990: {
							slidesPerView: 3.5,
							spaceBetween: 16,
						},
						768: {
							slidesPerView: 3,
							spaceBetween: 20,
						},
						480: {
							slidesPerView: 1.5,
							spaceBetween: 20,
						}
					},
					on: {
						// slideChange: function () {
						// 	swiper_2.slideTo(this.activeIndex);
						// },
						slideChange: function (mySwiper) {
							// -----S ------
							swiper1ActiveIndex = this.activeIndex
							// -----E ------
					},
					},
				})
				var swiper_2 = new Swiper(swiper2, {
					slidesPerView: 1,spaceBetween: 20,speed: 1200,
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
					
				swiper.find("li").click(function () {
					var index = $(this).index();
					swiper_2[swiper1ActiveIndex].slideTo(index)
					// if(checkType(swiper2) === 'Array' ) {
					// 	swiper_2[swiper1ActiveIndex].slideTo(index)
					// } else {
					// 	swiper_2.slideTo(index)
							
					// }
					$(this).addClass("active").siblings().removeClass("active");
				  
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
				$("#hi-resume-pop").hide();
				$(".hi-resume-contact").hide();

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
		var box2 = $('.product_related'),
		item = box2.find(".swiper-slide");
		if (box2.length) {
			box2.each(function(){
				var box = $(this);
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
				item.click(function(){
					$(this).find(".item").toggleClass("active")
				})
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
				// on: {
				// 	slideChange: function () {
				// 		swiper_2.slideTo(this.activeIndex);
				// 	},
				// },
			
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
				// on: {
				// 	slideChange: function () {
				// 		swiper_1.slideTo(this.activeIndex);
				// 	},
				// },
			
			})
		}
	}
	product_casestudios();

	
	/* --------------------------------------------------------------- 硬件 */
	function half_media_wrap(){
		var box = $('.half_media_wrap');
			if (box.length) {
				var swiper = box.find('.swiper_box'), pagination = box.find('.idxPageHide'), prev = box.find('.prev'), next = box.find('.next');
				var swiper_1 = new Swiper(swiper, {
				slidesPerView: 7, spaceBetween: 13, speed: 1200,
				//loop: true, effect: 'fade', fadeEffect: { crossFade: true, },
				pagination: { el: pagination, clickable: true, }, watchOverflow: true,
				navigation: { nextEl: next, prevEl: prev, },
				breakpoints: { 990: { slidesPerView: 6, spaceBetween: 12, },768: { slidesPerView: 5, spaceBetween: 12, },768: { slidesPerView: 4, spaceBetween: 12, },480: { slidesPerView: 3, spaceBetween: 12, } },
			})
		}
	}
	half_media_wrap();


	function half_modules_test(){
		var box = $('.half_modules_test');
			if (box.length) {
				var swiper = box.find('.imgbg'),item = box.find('.item'), pagination = box.find('.idxPageHide'), prev = box.find('.prev'), next = box.find('.next');
				var swiper_1 = new Swiper(swiper, {
					slidesPerView: 1, spaceBetween: 0, speed: 1200,
					effect: 'fade', fadeEffect: { crossFade: true, },
					pagination: { el: pagination, clickable: true, }, watchOverflow: true,
					navigation: { nextEl: next, prevEl: prev, },
			})
			item.hover(function(){
					var d = $(this).index();
					swiper_1.slideTo(d);
			})



		}
	}
	half_modules_test();

	/* --------------------------------------------------------------- 售后服务 */

	function server_wrap(){
		var box = $('.server_wrap'),
			  item = box.find(".f_left .item");
				if (box.length) {
					item.click(function(){
						$(this).addClass("active").siblings().removeClass("active");
					})
				}
	}
	server_wrap();
	/* --------------------------------------------------------------- 常见问题 */
	function questions_Wrap() {
		var box =$(".question_wrap"),
				item = box.find(".item");
				item.click(function(){
					$(this).addClass("active").siblings().removeClass("active");
				})


	}
	questions_Wrap()
	/* --------------------------------------------------------------- 联系我们 */
	$("#Contrast").click(function(){
		$(".hi-resume-contact").show();
	})

	/* --------------------------------------------------------------- 底部 */
	
	function idx_footer_form(){
		var box = $('.idx_footer_form'),
				box2 = $('.idx_footer_form2');
			if (box.length) {
				var swiper = box.find('.img1'),swiper2 = box2.find('.img1'), pagination = box.find('.idxPageHide'), prev = box.find('.prev'), next = box.find('.next');
				var swiper_1 = new Swiper(swiper, {
					loop:true,
					slidesPerView: 1.1, spaceBetween: 60, 
					pagination: { el: pagination, clickable: true, }, watchOverflow: true,
					navigation: { nextEl: next, prevEl: prev, },
				})
				var swiper_2 = new Swiper(swiper2, {
					loop:true,
					slidesPerView: 1.1, spaceBetween: 60, 
					pagination: { el: pagination, clickable: true, }, watchOverflow: true,
					navigation: { nextEl: next, prevEl: prev, },
				})


			}
	}
	idx_footer_form();


/* ------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------ */
/* -----------------------------------------W   Y-------------------------------------------- */
/* ------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------ */

wowFun(".textFFF","active",1)
wowFun(".svgAni","active",1)
wowFun(".wowUp","fadeInUp animated",1)
function ins_aboutCon3() {
	var box = $(".ins_aboutCon3");
	if (box.length) {
		box.each(function (e) {
			var _this = $(this);
			var swiper = _this.find(".swiper_box"), prev = box.find(".prev"), next = box.find(".next");
			var item = _this.find(".item_box .item"), pagination = box.find(".idxPageHide");
			var swiper_1 = new Swiper(swiper, {
				slidesPerView: 1, spaceBetween: 80, speed: 1200, autoHeight: true,
				navigation: { nextEl: next, prevEl: prev, }, loop: true,
				breakpoints: { 1282: { spaceBetween: 60, } },
				pagination: { el: pagination, clickable: true, },
				on: {
					slideChangeTransitionStart: function () {
						var index = this.realIndex;
						item.removeClass("active").eq(index).addClass("active");
					},
				},
			})
			item.click(function (e) {
				var index = $(this).index();
				swiper_1.slideTo(index);
			})
		})
	}
}
ins_aboutCon3();

function ins_aboutCon1() {
	var box = $(".ins_aboutCon1");
	if (box.length) {
		if(wW > 990) {
			var maskBox = box.find(".maskBox");
			let tl = gsap.timeline({
				scrollTrigger: {
					trigger: box, pin: maskBox, start: "top top", end: "bottom bottom", scrub: .1,
					onUpdate: self => {
						let progress = self.progress;
						if(progress>0.5){ maskBox.find(".content1").addClass("active"); maskBox.find(".content2").addClass("active"); }
						else { maskBox.find(".content2").removeClass("active"); maskBox.find(".content1").removeClass("active");  }
					},
				}
			});
		} else {
			var swiper = box.find('.swiper_box'), pagination = box.find(".idxPageHide");
			var swiper_1 = new Swiper(swiper, {
				slidesPerView: 1.2, spaceBetween: 20, speed: 700, loop:true,
				pagination: { el: pagination, clickable: true, },
				autoplay: {delay: 3000, disableOnInteraction: false, waitForTransition: false},
			})
		}
	}
}
ins_aboutCon1();

function ins_aboutCon4() {
	var box = $(".ins_aboutCon4");
	if (box.length) {
		box.find(".item_box .item").hover(function(e){
			if(e.type === "mouseenter"){
				$(this).stop().addClass("active").siblings().stop().removeClass("active");
			}
		})
	}
}
ins_aboutCon4();

function ins_aboutCon5() {
	var box = $(".ins_aboutCon5");
	if (box.length) {
		if(wW > 990){
			var swiper = box.find(".swiper_box"), pagination = box.find(".idxPageHide"), prev = box.find(".prev"), next = box.find(".next"), swiper_item = box.find(".swiper_item");
			var swiper_1 = new Swiper(swiper, {
				slidesPerView: 1, spaceBetween: 38, speed: 1200,
				effect: "fade", fadeEffect: { crossFade: true, },
				pagination: { el: pagination, clickable: true, },
				allowTouchMove: false, watchOverflow: true,
				breakpoints: { 990: { slidesPerView: 1, spaceBetween: 12, allowTouchMove: true,} },
			})
			var swiper_2 = new Swiper(swiper_item, {
				slidesPerView: 5, speed: 1200, loop: true, slideToClickedSlide: true, watchOverflow: true,
				navigation: { nextEl: next, prevEl: prev, }, centeredSlides : true,
				breakpoints: { 990: { slidesPerView: 2, spaceBetween: 12, } },
				on: {
					slideChangeTransitionStart: function () {
						var index = this.realIndex;
						swiper_1.slideTo(index);
					},
				},
			})
		}else{
			var swiper = box.find(".swiper_box"), pagination = box.find(".idxPageHide"), prev = box.find(".prev"), next = box.find(".next"), swiper_item = box.find(".swiper_item");
			var swiper_2 = new Swiper(swiper_item, {
				slidesPerView: 5, speed: 1200, loop: false, slideToClickedSlide: true, watchOverflow: true,
				navigation: { nextEl: next, prevEl: prev, }, centeredSlides : true, allowTouchMove: false,
				breakpoints: { 990: { slidesPerView: 2, spaceBetween: 12, } },
			})
			var swiper_1 = new Swiper(swiper, {
				slidesPerView: 1, spaceBetween: 38, speed: 1200,
				effect: "fade", fadeEffect: { crossFade: true, },
				pagination: { el: pagination, clickable: true, },
				allowTouchMove: false, watchOverflow: true,
				breakpoints: { 990: { slidesPerView: 1, spaceBetween: 12, allowTouchMove: true,} },
				on: {
					slideChangeTransitionStart: function () {
						var index = this.realIndex;
						swiper_2.slideTo(index);
					},
				},
			})
		}
	}
}
ins_aboutCon5();

	function ins_aboutCon6() {
			var box = $(".ins_aboutCon6");
			if (box.length) {
					var swiper = box.find(".swiper_box"), pagination = box.find(".idxPageScr"), prev = box.find(".prev"), next = box.find(".next");
					var swiper_1 = new Swiper(swiper, {
							slidesPerView: 4,  slidesPerGroup: 4, spaceBetween: 16, speed: 1200, slidesPerColumn : 2,
							pagination: { el: pagination, clickable: true, }, watchOverflow: true,
							navigation: { nextEl: next, prevEl: prev, }, slidesPerColumnFill : 'row',
							breakpoints: { 990: { slidesPerView: 1.5, spaceBetween: 12, slidesPerGroup: 1.5, } },
							autoplay: {delay: 5000, disableOnInteraction: false, waitForTransition: false},
					})
			}
	}
	ins_aboutCon6();

	function ins_solutionCon2() {
			var box = $('.ins_solutionCon2');
			if (box.length) {
		if(wW > 990) {
			let tl = gsap.timeline({
				scrollTrigger: {
					trigger: box, pin: false, start: 'top bottom', end: 'bottom top', scrub: .1,
				}
			});
			tl.to(box.find(".center_box .rigth_box .item_box"), { "--tY": "translateY(-6%)", })
		}
			}
	}
	ins_solutionCon2();
			


	function ins_solutionCon3() {
			var box = $(".ins_solutionCon3");
			if (box.length) {
					var swiper_img = box.find(".swiper_img"), pagination = box.find(".idxPageHide"), prev = box.find(".prev"), next = box.find(".next"), swiper_item = box.find(".swiper_item");
					var swiper_1 = new Swiper(swiper_img, {
							slidesPerView: 1, spaceBetween: 38, speed: 1200,
							pagination: { el: pagination, clickable: true, }, watchOverflow: true,
							breakpoints: { 990: { slidesPerView: 1, spaceBetween: 20, } },
					})
					var swiper_2 = new Swiper(swiper_item, {
							slidesPerView: 3, spaceBetween: 16, speed: 1200, watchOverflow: true,
							navigation: { nextEl: next, prevEl: prev, },
							breakpoints: { 990: { slidesPerView: 1, spaceBetween: 12, } },
					})
			}
	}
	ins_solutionCon3();

function ins_solutionCon6() {
	var box = $(".ins_solutionCon6");
	if (box.length) {
		box.each(function (e) {
			var _this = $(this);
			var swiper = _this.find(".swiper_box"), prev = _this.find(".prev"), next = _this.find(".next"), pagination = _this.find(".idxPageHide");
			var swiper_1 = new Swiper(swiper, {
				slidesPerView: 1, spaceBetween: 60, speed: 1200, autoHeight: true,
				navigation: { nextEl: next, prevEl: prev, }, loop: true,
				pagination: { el: pagination, clickable: true, },
				breakpoints: { 1282: { spaceBetween: 30, slidesPerView: 1, } },
			})
		})
	}
}
ins_solutionCon6();


function ins_solutionCon7() {
	var box = $(".ins_solutionCon7");
	if (box.length) {
		var swiper = box.find(".swiper_box"), pagination = box.find(".idxPageHide"), prev = box.find(".prev"), next = box.find(".next");
		var swiper_1 = new Swiper(swiper, {
			slidesPerView: 3, spaceBetween: 15, speed: 1200,
			pagination: { el: pagination, clickable: true, }, watchOverflow: true,
			navigation: { nextEl: next, prevEl: prev, },
			breakpoints: { 990: { slidesPerView: 1, spaceBetween: 12, } },
		})
	}
}
ins_solutionCon7();


function ins_newCon1() {
	var box = $(".ins_newCon1");
	if (box.length) {
		var swiper_box = box.find(".swiper_box"), pagination = box.find(".idxPageHide"), prev = box.find(".prev"), next = box.find(".next"), swiper_img = box.find(".swiper_img");
		var swiper_1 = new Swiper(swiper_box, {
			slidesPerView: 1, spaceBetween: 80, speed: 1200,
			pagination: { el: pagination, clickable: true, }, watchOverflow: true,
			breakpoints: { 990: { slidesPerView: 1, spaceBetween: 20, } }, loop: true,
			autoplay: {delay: 5000, disableOnInteraction: false, waitForTransition: false},
		})
		var swiper_2 = new Swiper(swiper_img, {
			slidesPerView: 7, spaceBetween: 16, speed: 5000, loop: true, allowTouchMove: false,
			autoplay: {delay: 0,},
			breakpoints: { 990: { slidesPerView: 2, spaceBetween: 5, } },
		})
	}
}
ins_newCon1();

function ins_newCon4() {
	var box = $('.ins_newCon4');
	if (box.length) {
		var swiper = box.find('.swiper_box'), pagination = box.find('.idxPageScr'), prev = box.find('.prev'), next = box.find('.next');
		var swiper_1 = new Swiper(swiper, {
			slidesPerView: 1, spaceBetween: 38, speed: 1200,
			loop: true, effect: 'fade', fadeEffect: { crossFade: true, },
			pagination: { el: pagination, clickable: true, }, watchOverflow: true,
			navigation: { nextEl: next, prevEl: prev, },
			breakpoints: { 990: { slidesPerView: 1, spaceBetween: 12, } },
		})
	}
}
ins_newCon4();



function ins_newdCon3() {
	var box = $(".ins_newdCon3");
	if (box.length) {
		box.each(function(){
			var _this = $(this), swiper_img = _this.find(".swiper_img"), item = _this.find(".item_box .item"), pagination = _this.find(".idxPageScr");
			var swiper_2 = new Swiper(swiper_img, {
				slidesPerView: 1, spaceBetween: 38, speed: 1200, allowTouchMove: false,
				loop: true, effect: "fade", fadeEffect: { crossFade: true, }, watchOverflow: true,
				pagination: { el: pagination, clickable: true,  }, 
				breakpoints: { 990: { slidesPerView: 1, spaceBetween: 12,  allowTouchMove: true, } },
				on: {
					slideChangeTransitionStart: function () {
						var index = this.realIndex;
						item.removeClass("active").eq(index).addClass("active");
					},
				},
			})
			item.click(function (e) {
				var index = $(this).index(); 
				swiper_2.slideTo(index + 1);
				var top = $(this).find(".top"),top = $(this).find(".bot");
				$(this).addClass("active").siblings().removeClass("active");
				$(this).find(".bot").slideDown(500).parent(".item").siblings().find(".bot").slideUp(500);
			})
			item.eq(0).click();
		})
	}
}
ins_newdCon3();
function ins_newdCon4() {
	var box = $(".ins_newdCon4");
	if (box.length) {
		var swiper = box.find(".swiper_box"), pagination = box.find(".paginationSrc"), prev = box.find(".prev"), next = box.find(".next");
		var swiper_1 = new Swiper(swiper, {
			slidesPerView: 1.71, spaceBetween: 24, speed: 1200, 
			pagination: { el: pagination, clickable: true, type: "progressbar", }, watchOverflow: true,
			navigation: { nextEl: next, prevEl: prev, },
			breakpoints: { 990: { slidesPerView: 1, spaceBetween: 12, } },
		})
	}
}
ins_newdCon4();

function ins_newdCon5() {
	var box = $('.ins_newdCon5');
	if (box.length) {
		let tl = gsap.timeline({
			scrollTrigger: {
				trigger: box, pin: false, start: 'top bottom', end: 'top top', scrub: .1,
				onUpdate: self => {
					let progress = self.progress;
					if(progress>0.5) { box.find(".item_box .item").addClass("active"); box.css({"--dashoffset": 0,}) }
					else if (progress<=0.1) { box.find(".item_box .item").removeClass("active"); box.css({"--dashoffset": -1980,}) }
				},
			}
		});
	}
}
ins_newdCon5();



});
/*  适用于轮播图中的依次间隔时间 
*  data-atime="100"
*  &.swiper-slide-active { .wowUpS { animation: fadeInUp 0.7s forwards; .dh(.1); } }
*  .wowUpS { opacity: 0; } 
*/

function dataTime2(){
var box =  $('[data-times]');
if(box.length){
	box.each(function(){
		$(this).css({"transition-delay": $(this).attr("data-times") + "ms"})
	})
}
}
dataTime2();