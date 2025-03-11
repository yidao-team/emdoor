
(function () {
	
	/* 头部添加 active */ 
	function header_fun(){
		var box = $("header");
		if(box.length){
			var scroTop = $(document).scrollTop();
			$(window).scroll(() => {
				scroTop = $(document).scrollTop();
				if( scroTop > 10 ){
					$("header").addClass("active"); $("main").addClass("active");
				}else{
					$("header").removeClass("active"); $("main").removeClass("active");
				}
			})
		}
	}
	header_fun();
	

	/* gsap 从下网上覆盖 */
	function gasp_cover() {
		var elements = [...document.getElementsByClassName("gasp_cover")];
		elements.forEach(function(e){
			var _this = e;
			var dataY = _this.getAttribute('data-tY');
			console.log(dataY);
			if(dataY == null && dataY == " " ){ dataY = "-10%"; }
			let tl = gsap.timeline({ 
				scrollTrigger: { 
					trigger: _this, pin: true, start: 'top top', end: 'bottom top', pinSpacing: false, scrub: .3, 
					markers: {startColor: '#FF0000', endColor: '#FF0000', fontSize: '18px', fontWeight: 'bold', indent: 20}, 
				} 
			});
			tl.to(_this, { y: dataY, })
			.to( _this,{ scale: 1, },"<")
		})
	}
	gasp_cover();

	/* gsap 宽度变化 */
	function gasp_width(){
		var elements = [...document.getElementsByClassName("gasp_width")];
		elements.forEach(function(e){
			var _this = e;
			let tl = gsap.timeline({ 
				scrollTrigger: { 
					trigger: _this, pin: false, start: 'top bottom', end: 'top center', scrub: .3, 
					// markers: {startColor: '#FF0000', endColor: '#FF0000', fontSize: '18px', fontWeight: 'bold', indent: 20}, 
				} 
			});
			tl.fromTo(_this, { scale: 0.9, },{ scale: 1, })
		})
	}
	gasp_width();

	/* gsap 文字挨个出现 */
	const textElements = gsap.utils.toArray('.ani-text');
	textElements.forEach((item, idx) => {
		item.classList.add('ani-init', 'is-show');
		Array.from(item.innerHTML).forEach((text, i) => {
			if(i === 0) item.innerHTML = '';
			text = text != ' ' ? `<span class="c-text" style="transition-delay: ${2 * i / 100}s"><span style="transition-delay: ${2 * i / 100}s">${text}</span></span>` : '<br />';
			item.insertAdjacentHTML('beforeend', text);
		})
		ScrollTrigger.create({
			trigger: item,
			start: 'top bottom',
			end: 'top top',
			scrub: true,
			/* markers: {startColor: "red", endColor: "red", fontSize: "18px", fontWeight: "bold", indent: 20}, */
			onLeaveBack: () => {
				item.classList.add('ani-init');
				item.classList.remove('is-view');
			},
			onEnter: () => {
				item.classList.remove('ani-init');
				item.classList.add('is-view');
			}
		})
	});

	/* 轮播图 文字闪烁 */ 
	function reveal(){
		var box = $(".reveal");
		if(box.length){
			$(".reveal").each(function() {
				var delayBox = $(this).data("wow-delay");
				delayBox = parseFloat(delayBox) > 0 ? parseFloat(delayBox) : 0;
				var textHtml = [];
				var brBox, number = 0, time;
				var arrayAll = $(this).html();
				arrayAll = arrayAll.replace(/\n/g, "").replace(/\s+/g, " ").replace(/<.+?>/g, "0");
				for (var i = 0; i < arrayAll.length; i++) {
					if (arrayAll[i] == " ") {
						brBox = "&nbsp;"
					} else if (arrayAll[i] == "0") {
						brBox = "<br/>";
					} else {
						// 随机出现
						time = (Math.random() * (1200 - 2000) + 1200).toFixed(2);
						brBox = "<span style='animation-delay:" + time + "ms'>" + arrayAll[i] + "</span>"
						number++;
					}
					textHtml.push(brBox);
				};
				$(this).html(textHtml);
			});
		}
	}
	reveal();

	/* wow 文字分割 */ 
	function wowFg(){
		var box = $(".wowFg");
		if(box.length){
			$(".wowFg").each(function () {
				var textHtml = [];
				var brBox, number = 0, time = 300;
				var arrayAll = $(this).html();
				arrayAll = arrayAll.replace(/\n/g, "").replace(/\s+/g, " ").replace(/<.+?>/g, "0");
				for (var i = 0; i < arrayAll.length; i++) {
					if (arrayAll[i] == " ") { brBox = "&nbsp;"} 
					else if (arrayAll[i] == "|") { brBox = "<br/>"; } 
					else {
						time = time + 100; brBox = "<span style='animation-delay:" + time + "ms'>" + arrayAll[i] + "</span>"; number++;
					}
					textHtml.push(brBox);
				};
				$(this).html(textHtml);
			});
		}
	}
	wowFg();

	/* 图片位移 */
	function imgMove() {
		var box = $(".imgMove");
		if(box.length) {
			box.each(function(){
				let t1 = gsap.timeline({
					scrollTrigger: {
						trigger: box, pin: false, start: "top bottom", end: "bottom top", scrub: .5,
						// markers: {startColor: "#FF0000", endColor: "#FF0000", fontSize: "18px", fontWeight: "bold", indent: 20},
					}
				});
				t1.to(box.find(".iMove"), { y: 200, })
			})
		}
	}
	imgMove();


	function mouse_move(){
		var box = $(".mouse_move");
		if(box.length){
			
		}
	}
	mouse_move();


	

})();


/* 判断元素出现在可视窗口的时候添加clsss  
	传参一： 需要出现在窗口的类名 
	传参二： 需要再窗口出现位置 取值范围0 - 1 0<a<1 ------例如 0.5  就是 vh * 0.5  窗口的一半 
	wowFun(".svgBox1","active",0.5);
*/ 
function wowFun(a,b,c) {
	var box = $(a);
	if(c > 1 || c < 0 || c == 0) { c = 1 }
	if (box != "" || box != null) {
		box.each(function () {
			var  _this = $(this), topNum = _this.offset().top, scrollTop = $(window).scrollTop() + (wH * c), d = _this.attr("data-time");
			if(d == null || d == "undefined" || d == 0 ){ d = 0; }
			if (scrollTop > topNum) { setTimeout(function(){  _this.addClass(b); }, d)} else { _this.removeClass(b); }
			$(window).scroll(function () {
				topNum = _this.offset().top, scrollTop = $(window).scrollTop() + (wH * c), scrollTop_wH = $(window).scrollTop() + wH;
				if (scrollTop > topNum) { setTimeout(function(){ _this.addClass(b);}, d) } else if(scrollTop_wH < topNum || scrollTop_wH == topNum ) {  _this.removeClass(b); }
			});
		})
	}
}



