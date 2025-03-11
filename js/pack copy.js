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
	function openAnimation() {
		const box = $(".openAnimation");
		if (box.length) {
			const maskBox = box.find(".maskBox");
			gsap.to(box.find("path"), 10, {
				ease: "none",
				rotate: 360,
				transformOrigin: "center center",
				repeat: -1
			});
			let tl = gsap.timeline({
				scrollTrigger: {
					trigger: box,
					pin: maskBox,
					start: "top top",
					end: "bottom-=10 bottom",
					scrub: .1,
					onUpdate: self => {
						let progress = self.progress;
						if (progress >= 1) {
							box.remove();
						}
					},
				}
			});
			tl.to(maskBox.find("path"), {
				ease: "none",
				strokeDasharray: "6000"
			}, );
			tl.fromTo(maskBox.find(".wave"), {
				scale: 1
			}, {
				scale: 6
			}, "<");
			tl.to(maskBox.find(".bgBox"), {
				ease: "none",
				"--size": "150%"
			}, "<+=10%");
			tl.to(maskBox, {
				ease: "none",
				opacity: 0,
			}, "<+=5%");
			tl.to(box, {
				"visibility": "hidden",
				duration: "1s",
			});
		}
	}
	openAnimation();

	function honorbook_wrap() {
		var box = $(".about-coreawards-section");
		if (box.length) {
			var swiper = box.find(".swiperbox"),
				pagination = box.find(".idxPageHide");
			var swiper_1 = new Swiper(swiper, {
				slidesPerView: 1,
				centeredSlides: true,
				spaceBetween: 12,
				pagination: {
					el: pagination,
					clickable: true,
				},
				speed: 1200,
				navigation: {
					prevEl: '.swiper-operate .prev',
					nextEl: '.swiper-operate .next',
				},
			})
		}
	}
	honorbook_wrap();
	// 系列2
	function product_section_wrap2() {
		var box = $(".product-section2");
		if (box.length) {
			var swiper = box.find(".infolist"),
				pagination = box.find(".idxPageHide");

			var swiper_1 = new Swiper(swiper, {
				slidesPerView: 1,
				centeredSlides: true,
				spaceBetween: 12,
				effect: "fade",
				pagination: {
					el: pagination,
					clickable: true,
				},
				speed: 1200,
				navigation: {
					prevEl: '.page-navigation .prev',
					nextEl: '.page-navigation .next',
				},
				on: {
					slideChange: function () {
						var d = this.activeIndex;
						swiper_1.slideTo(this.activeIndex, 300, false)
						$(".product-section2 .innerbox .swipercontent .swipertitle .t-list .item").eq(d).click();
					}
				},

			})
			$(".product-section2 .innerbox .swipercontent .swipertitle .t-list .item").click(function () {
				$(this).addClass("active").siblings().removeClass("active");
				var index = $(this).index();
				swiper_1.slideTo(index)
			})
		}
	}
	product_section_wrap2();
	// 系列3
	function product_section_wrap3() {
		var box = $(".product-section3");
		if (box.length) {
			var swiper = box.find(".infolist"),
				pagination = box.find(".idxPageHide");
			var swiper_1 = new Swiper(swiper, {
				slidesPerView: 1,
				centeredSlides: true,
				spaceBetween: 12,
				effect: "fade",
				pagination: {
					el: pagination,
					clickable: true,
				},
				speed: 1200,
				navigation: {
					prevEl: '.page-navigation .prev',
					nextEl: '.page-navigation .next',
				},
				on: {
					slideChange: function () {
						var d = this.activeIndex;
						swiper_1.slideTo(this.activeIndex, 300, false)
						$(".product-section3 .innerbox .swipercontent .swipertitle .t-list .item").eq(d).click();
					}
				}
			})
			$(".product-section3 .innerbox .swipercontent .swipertitle .t-list .item").click(function () {
				$(this).addClass("active").siblings().removeClass("active");
				var index = $(this).index();
				swiper_1.slideTo(index)
			})
		}
	}
	product_section_wrap3();
	// 检查类型
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
	// 卷绕系列
	function product_section_wrap4() {
		var swiper1ActiveIndex = 0 // 第一个轮播的索引
		var box = $(".product-section4");
		if (box.length) {
			var swiperone = box.find(".swiperbox")
			var swiper = box.find(".infolist"),
				pagination = box.find(".idxPageHide");

			// 第一层
			var swiper_1 = new Swiper(".product-section4 .tab_content", {
				slidesPerView: 1,
				centeredSlides: true,
				spaceBetween: 12,
				effect: "fade",
				pagination: {
					el: pagination,
					clickable: true,
				},
				speed: 1200,
				on: {
					slideChangeTransitionStart: function () { //切换时分类也要改变状态
						var d = this.activeIndex;
						console.log("1d", d)
					},
					slideChange: function (mySwiper) {
						// -----S ------
						swiper1ActiveIndex = this.activeIndex
						// -----E ------
					}

				}
			})

			// 第一层
			$(".product-section4 .serisul ul li").click(function () {
				$(this).addClass("active").siblings().removeClass("active");
				var index = $(this).index();
				if (checkType(swiper_1) === 'Array') {
					swiper_1[swiper1ActiveIndex].slideTo(index)
				} else {
					swiper_1.slideTo(index)

				}
			})



			// 第二层
			var swiper_2 = new Swiper(".product-section4 .infolist", {
				slidesPerView: 1,
				centeredSlides: true,
				spaceBetween: 12,
				effect: "fade",
				pagination: {
					el: pagination,
					clickable: true,
				},
				speed: 1200,
				navigation: {
					prevEl: '.page-navigation .prev',
					nextEl: '.page-navigation .next',
				},
				on: {
					// slideChange: function () {
					// 	var d = this.activeIndex;
					// 	swiper_2.slideTo(this.activeIndex, 300, false)
					// 	$(".product-section4 .innerbox .swipercontent .swipertitle .t-list .item").eq(d).click();
					// }
				}
			})




			$(".product-section4 .innerbox .swipercontent .swipertitle .t-list .item").click(function () {
				$(this).addClass("active").siblings().removeClass("active");
				var index = $(this).index();
				swiper_2.slideTo(index)
				// if (checkType(swiper_2) === 'Array') {
				// 	swiper_2[swiper1ActiveIndex].slideTo(index)
				// } else {
				// 	swiper_2.slideTo(index)

				// }
			})
		}
	}
	product_section_wrap4();

	// 系列5
	function product_section_wrap5() {
		var box = $(".product-section5");
		if (box.length) {
			var swiper = box.find(".infolist"),
				pagination = box.find(".idxPageHide");
			var swiper_1 = new Swiper(swiper, {
				slidesPerView: 1,
				centeredSlides: true,
				spaceBetween: 12,
				effect: "fade",
				pagination: {
					el: pagination,
					clickable: true,
				},
				speed: 1200,
				navigation: {
					prevEl: '.page-navigation .prev',
					nextEl: '.page-navigation .next',
				},
				on: {
					slideChange: function () {
						var d = this.activeIndex;
						swiper_1.slideTo(this.activeIndex, 300, false)
						$(".product-section5 .innerbox .swipercontent .swipertitle .t-list .item").eq(d).click();
					}
				}
			})
			$(".product-section5 .innerbox .swipercontent .swipertitle .t-list .item").click(function () {
				$(this).addClass("active").siblings().removeClass("active");
				var index = $(this).index();
				swiper_1.slideTo(index)
			})
		}
	}
	product_section_wrap5();

	// 系列6
	function product_section_wrap6() {
		var box = $(".product-section6");
		if (box.length) {
			var swiper = box.find(".infolist"),
				pagination = box.find(".idxPageHide");
			var swiper_1 = new Swiper(swiper, {
				slidesPerView: 1,
				centeredSlides: true,
				spaceBetween: 12,
				effect: "fade",
				pagination: {
					el: pagination,
					clickable: true,
				},
				speed: 1200,
				navigation: {
					prevEl: '.page-navigation .prev',
					nextEl: '.page-navigation .next',
				},
				on: {
					slideChange: function () {
						var d = this.activeIndex;
						swiper_1.slideTo(this.activeIndex, 300, false)
						$(".product-section6 .innerbox .swipercontent .swipertitle .t-list .item").eq(d).click();
					}
				}
			})
			$(".product-section6 .innerbox .swipercontent .swipertitle .t-list .item").click(function () {
				$(this).addClass("active").siblings().removeClass("active");
				var index = $(this).index();
				swiper_1.slideTo(index)
			})
		}
	}
	product_section_wrap6();

	// 可持续发展
	function develop_action_wrap() {
		var box = $(".develop-section2");
		if (box.length) {
			var swiper = box.find(".itemlist"),
				pagination = box.find(".idxPageHide");
			var swiper_1 = new Swiper(swiper, {
				slidesPerView: 4,
				spaceBetween: 18,
				pagination: {
					el: pagination,
					clickable: true,
				},
				breakpoints: {
					768: {
						slidesPerView: 3,
						spaceBetween: 12,
					},
					480: {
						slidesPerView: 1,
						spaceBetween: 10,
					},

				}
			})
		}
	}
	develop_action_wrap();
	// 新闻-推荐新闻

	function recommentSlide() {
		var slide = new Swiper('.newswrap .newbanner .swiperlist', {
			autoplay: true,
			speed: 3000,
			effect: 'fade',
			fadeEffect: {
				crossFade: true,
			},
			preventLinksPropagation: false, // 阻止点击事件冒泡
			pagination: {
				el: '.newswrap .newbanner .swiper-pagination',
				clickable: true,
			},
			navigation: {
				nextEl: '.newswrap .pagination-operate .nextbtn',
				prevEl: '.newswrap .pagination-operate .prebtn',
			},
			on: {
				init: function () {
					const slidesLength = this.slides.length;
					const paginationEl = document.querySelector('.swiper-pagination');

					if (slidesLength < 2) {
						if (paginationEl) {
							paginationEl.style.display = 'none'; // 隐藏分页器
						}
					} else {
						if (paginationEl) {
							paginationEl.style.display = ''; // 显示分页器
						}
					}
				},
				slideChange: function () {
					// 如果你需要在切换幻灯片时也检查分页器的可见性，可以在这里添加相同的逻辑。
				}
			}

		});
	}
	recommentSlide();

	// 更多产品及解决方案
	function product_solution_wrap() {
		var box = $(".product-solution-wrap");
		if (box.length) {
			var swiper = box.find(".itemlist"),
				pagination = box.find(".idxPageHide");
			var swiper_1 = new Swiper(swiper, {
				slidesPerView: 3,
				spaceBetween: 40,
				loop: true,
				centeredSlides: true,
				pagination: {
					el: pagination,
					clickable: true,
				},
				navigation: {
					prevEl: '.page-navigation .prev',
					nextEl: '.page-navigation .next',
				},
				on: {
					slideChange: function () {
						var d = this.activeIndex;
						swiper_1.slideTo(this.activeIndex, 300, false)
						$(".product-section4 .innerbox .swipercontent .swipertitle .t-list .item").eq(d).click();
					}
				},
				breakpoints: {
					768: {
						slidesPerView: 2,
						spaceBetween: 20,
						centeredSlides: false,
					},
					480: {
						slidesPerView: 1,
						spaceBetween: 10,
					},

				}
			})
		}
	}
	product_solution_wrap()

});