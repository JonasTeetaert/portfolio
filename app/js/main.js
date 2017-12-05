'use strict'
// ========================================================
// ON READY
// ========================================================
document.addEventListener('DOMContentLoaded', function() {

	console.log('main.js is working');


	var images = document.querySelectorAll('img');
	for (var i = 0; i < images.length; i++) {
		var img = new Image();
		img.src = images[i].src;
	}

	var ux = new UX(480, 768, 960);

	var sliderNode = document.querySelector('.jsCaseList');
	var slider = new Slider(sliderNode, '.case-list__item', ux);

	var links = document.querySelectorAll('.js-link');
	for (var i=0; i < links.length; i++) {
		new Link(links[i], ux, slider);
	}

	ux.setDisplayNone();

}, false);

var UX = function(mq1, mq2, mq3) {

	// containers
	this.sectionInner = document.querySelector('.js-sectionInner');
	this.linesObject = document.querySelector('.js-linesObject');

	// media queries
	this.mq1 = mq1;
	this.mq2 = mq2;
	this.mq3 = mq3,

	// navigation ux
	this.lineH1 = this.linesObject.querySelector('.line-h1'); // parent
	this.lineV2 = this.linesObject.querySelector('.line-v2'); // parent
	this.lineH2 = this.linesObject.querySelector('.line-h2');
	this.lineV1 = this.linesObject.querySelector('.line-v1');
	this.heroContent = this.linesObject.querySelector('.lines__content');
	this.casesTitle = this.linesObject.querySelector('.lines__cases-title');
	this.casesLink = this.linesObject.querySelector('.lines__cases-link');
	this.caseLink = document.querySelector('.case__link-cases');
	this.aboutLink = document.getElementById('about');

	// sections
	this.cases = document.querySelector('.cases');
	this.case = document.querySelector('.case');
	this.about = document.querySelector('.about');

	this.aboutBox = this.about.querySelector('.about__box');

	// variabelen
	this.currentPos = 0;
	this.view = undefined;

	// functions
	window.addEventListener("resize", this.resize.bind(this));
	this.aboutLink.addEventListener("click", this.aboutToggle.bind(this));
	this.init();
}

UX.prototype.init = function () {
	this.resize();
	this.heroAnimation();
} 

UX.prototype.resize = function () {
	if (window.innerWidth < this.mq1) {
		// mobile
		this.view = 0;
	} else if (window.innerWidth >= this.mq1 && window.innerWidth < this.mq2) {
		// tablet portrait
		this.view = 1;
	} else if (window.innerWidth >= this.mq2 && window.innerWidth < this.mq3) {
		// tablet landscape
		this.view = 2;
	} else {
		// desktop
		this.view = 3;
	}
}

UX.prototype.aboutToggle = function() {
	console.log(this.currentPos);
	if (this.aboutLink.checked) {
		if (this.currentPos == 0) {
			this.fromHomeToAbout();
		}
		if (this.currentPos == 1) {
			this.fromCasesToAbout();
		}
		if (this.currentPos == 2){
			this.fromCaseToAbout();
		}  
	} else {
		if (this.currentPos == 0) {
			this.fromAboutToHome();
		}
		if (this.currentPos == 1) {
			this.fromAboutToCases();
		}
		if (this.currentPos == 2){
			this.fromAboutToCase();
		}  
	}
}

UX.prototype.setDisplayNone = function() {
	this.case.style.display = 'none';
	this.about.style.display = 'none';
	this.cases.style.display = 'none';
} 

UX.prototype.calculateAboutBox = function () {
	this.rectAboutBox = this.aboutBox.getBoundingClientRect();
	this.rectLinesObject = this.linesObject.getBoundingClientRect();
	this.x1 = -(this.rectLinesObject.left - this.rectAboutBox.left) - 25;
	this.x2 = this.rectAboutBox.right - this.rectLinesObject.right + 5;
	this.y1 = this.rectLinesObject.top - this.rectAboutBox.top + 25;
	this.y2 = this.rectAboutBox.bottom - this.rectLinesObject.bottom + 15;
}

//animations
UX.prototype.heroAnimation = function () {
	this.tl0 = new TimelineLite();
	var lineH1Before = CSSRulePlugin.getRule(".line-h1:before");
	var lineH2Before = CSSRulePlugin.getRule(".line-h2:before");
	var lineV1Before = CSSRulePlugin.getRule(".line-v1:before");
	var lineV2Before = CSSRulePlugin.getRule(".line-v2:before");

	this.tl0.add([
		TweenLite.to([lineH1Before,lineH2Before], 4, {cssRule:{ width: "100%"}}),
		TweenLite.to([lineV1Before,lineV2Before], 4, {cssRule:{ height: "100%"}}),
		TweenLite.to(this.linesObject, 0, {css:{className: "+=lines--rotate"}, delay: 0.6})
		]);
	this.tl0.add(TweenLite.to([this.heroContent, this.casesLink], 0.6, {opacity: 1, delay: -2.5}));
}

UX.prototype.fromHomeToCases = function () {
	var left; // resize here
	switch (this.view) {
		case 0: left = "-15px"; break;
		case 1: case 2: case 3: left = "-45px"; break;
	}

	// animation
	this.tl1 = new TimelineLite();
	this.tl1.to(this.linesObject, 0, {css:{className: "-=lines--rotate"}});
	this.tl1.to([this.heroContent, this.casesLink], 0.5, {opacity: 0, delay: 0.4, ease: Power0.easeNone});
	this.tl1.addLabel("default")
	.to(this.lineH1, 0.5, {top: "25px", left: "-25px"}, "default")
	.to(this.lineV2, 0.5, {top: "-25px", left: "25px"}, "default");
	this.tl1.to(this.linesObject, 1, {left: left, top: "80px", ease: Power3.easeInOut});
	this.tl1.to([this.heroContent, this.casesLink], 0.1, {opacity: 0});
	this.tl1.to(this.cases, 0.1, {display: "block"});
	this.tl1.to([this.casesTitle, this.cases], 0.5, {opacity: 1, ease: Power0.easeNone});
	this.currentPos = 1;
}

UX.prototype.fromCasesToHome = function () {
	this.tl1.reverse();
	this.currentPos = 0;
} 

UX.prototype.fromCasesToCase = function () {
	var left; // resize here
	switch (this.view) {
		case 0: left = 5; break;
		case 1: case 2: case 3: left = 15; break;
	}

	// animation
	this.case.style.display = "block";
	this.tl2 = new TimelineLite();
	this.tl2.to(this.cases, 0.5, {opacity: 0, ease: Power0.easeNone});
	this.tl2.to(this.cases, 0.1, {display:"none"});
	var leftPos = this.sectionInner.clientWidth + left + "px";
	var topPos = this.case.clientHeight - 75 + "px";
	this.tl2.to(this.linesObject, 1, { left: leftPos, top: topPos, ease: Power3.easeInOut}); // resize here
	this.tl2.to(this.case, 0.5, {opacity: 1, ease: Power0.easeNone});

	this.currentPos = 2;
}

UX.prototype.fromCaseToCases = function () {
	this.tl2.reverse();
	this.tl2.eventCallback("onReverseComplete", function(){
		this.case.style.display = "none";
	}.bind(this));
	this.currentPos = 1;
} 

UX.prototype.fromHomeToAbout = function () {
	this.about.style.display = "block";
	this.calculateAboutBox();
	this.tl3 = new TimelineLite();
	this.tl3.to(this.linesObject, 0.1, {css:{className: "-=lines--rotate"}});
	this.tl3.to(this.linesObject, 0.1, {css:{className: "+=lines--about"}, delay: 0.7});
	this.tl3.addLabel("animation")
	.to(this.lineH1, 1, {left: this.x1+"px", top: this.y2 +"px"},"animation")
	.to(this.lineV2, 1, {left: this.x2+"px", top: -this.y1 +"px"},"animation")
	.to(this.heroContent, 0.5, {css:{className: "+=lines__content--about"}}, "animation");
	this.tl3.to(this.about, 0.5, {opacity: 1, ease: Power0.easeNone});
}

UX.prototype.fromAboutToHome = function () {
	this.tl3.reverse();
	this.tl3.eventCallback("onReverseComplete", function(){
		this.about.style.display = "none";
	}.bind(this));
	this.currentPos = 0;
}

UX.prototype.fromCasesToAbout = function () {
	this.about.style.display = "block";
	this.cases.style.display = "none";
	this.calculateAboutBox();
	this.tl4 = new TimelineMax();
	this.tl4.to([this.casesTitle, this.cases], 0.5, {opacity: 0, ease: Power0.easeNone});
	this.tl4.to(this.linesObject, 0.1, {css:{className: "+=lines--about"}});
	this.tl4.addLabel("animation")
	.to(this.lineH1, 1, {left: this.x1+"px", top: this.y2 +"px"},"animation")
	.to(this.lineV2, 1, {left: this.x2+"px", top: -this.y1 +"px"},"animation")
	.to(this.heroContent, 0.5, {css:{className: "+=lines__content--about"}}, "animation");
	this.tl4.to([this.heroContent, this.casesLink, this.about], 0.5, {opacity: 1, ease: Power0.easeNone});
}

UX.prototype.fromAboutToCases = function () {
	this.tl4.reverse();
	this.tl4.eventCallback("onReverseComplete", function(){
		this.about.style.display = "none";
		this.cases.style.display = "block";
	}.bind(this));
	this.currentPos = 1;
}

UX.prototype.fromAboutToCases2 = function () {
	var left; // resize here
	switch (this.view) {
		case 0: left = "-15px"; break;
		case 1: case 2: case 3: left = "-45px"; break;
	}

	this.tl6 = new TimelineLite();
	this.tl6.to([this.heroContent, this.casesLink, this.about], 0.5, {opacity: 0, ease: Power0.easeNone});
	this.tl6.addLabel("animation")
	.to(this.lineH1, 1, {top: "25px", left: "-25px"},"animation")
	.to(this.lineV2, 1, {top: "-25px", left: "25px"},"animation")
	.to(this.heroContent, 0.5, {css:{className: "+=lines__content--about"}}, "animation")
	this.tl6.to(this.linesObject, 1, {left: left, top: "80px", ease: Power3.easeInOut});
	this.tl6.to(this.linesObject, 0.1, {css:{className: "-=lines--about"}});
	this.tl6.to(this.cases, 0.1, {display: "block"});
	this.tl6.to(this.about, 0.1, {display: "none"});
	this.tl6.to([this.casesTitle, this.cases], 0.5, {opacity: 1, ease: Power0.easeNone});
	this.aboutLink.checked = false;
	this.currentPos = 1;

} 

UX.prototype.fromCaseToAbout = function () {
	this.about.style.display = "block";
	this.case.style.display = "none";
	this.calculateAboutBox();
	this.tl5 = new TimelineMax();
	this.tl5.to([this.casesTitle, this.cases], 0.5, {opacity: 0, ease: Power0.easeNone});
	this.tl5.to(this.linesObject, 0.1, {css:{className: "+=lines--about"}});
	this.tl5.addLabel("animation")
	.to(this.lineH1, 1, {left: this.x1+"px", top: this.y2 +"px"},"animation")
	.to(this.lineV2, 1, {left: this.x2+"px", top: -this.y1 +"px"},"animation")
	.to(this.heroContent, 0.5, {css:{className: "+=lines__content--about"}}, "animation");
	this.tl5.to([this.heroContent, this.casesLink, this.about], 0.5, {opacity: 1, ease: Power0.easeNone});
}

UX.prototype.fromAboutToCase = function () {
	this.tl5.reverse();
	this.tl5.eventCallback("onReverseComplete", function(){
		this.about.style.display = "none";
		this.case.style.display = "block";
	}.bind(this));
	this.currentPos = 2;  
}

var Link = function(node, ux, slider) {
	this.node = node;
	this.ux = ux;
	this.slider = slider;
	this.dataLink = this.node.dataset.link;
	this.target = this.node.dataset.target;
	this.node.addEventListener('click', this.click.bind(this));
}

Link.prototype.click = function(e) {
	if (parseInt(this.dataLink) != 0) {
		e.preventDefault();
	}

	switch (parseInt(this.dataLink)) {
		case 0: 
		console.log('from Cases To Home');
		this.ux.fromCasesToHome();
		break;
		case 1: 
		console.log('from home to cases');
		if (this.ux.aboutLink.checked) {
			this.ux.fromAboutToCases2();
		} else {
			this.ux.fromHomeToCases();
		}
		break;
		case 2: 
		console.log('from cases to case');
		this.slider.index = parseInt(this.target);
		this.slider.showItem(this.slider.index);
		this.ux.fromCasesToCase();
		break;
		case 3: 
		console.log ('from case to cases');
		this.ux.fromCaseToCases();
		break;
		default: console.log('not valid');
	}
}
