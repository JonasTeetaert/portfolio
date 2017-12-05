// ========================================================
// SLIDER
// ========================================================
var Slider = function(node, itemClass, ux) {
	this.node = node;
	this.items = this.node.querySelectorAll(itemClass);
	this.ux = ux;
	this.prevLink = document.querySelector('.js-prev');
	this.nextLink = document.querySelector('.js-next');
	this.index = 0;
	this.sliderItems = [];
	this.firstTime = true;

	for (var i = 0; i < this.items.length; i++) {
		this.sliderItems.push(new SliderItem(this, this.items[i], i));
	}

	this.init();
	this.prevLink.addEventListener('click', this.prev.bind(this));
	this.nextLink.addEventListener('click', this.next.bind(this));

}

Slider.prototype.init = function () {
	this.showItem(this.index);
}

Slider.prototype.next = function(e) {
	e.preventDefault();
	this.showItem(this.index + 1);
	//this.ux.linesObject.style.top = this.ux.case.clientHeight - 75 + "px";
	TweenLite.to(this.ux.linesObject, 0.3, {top: this.ux.case.clientHeight - 75 + "px" });
}

Slider.prototype.prev = function(e) {
	e.preventDefault();
	this.showItem(this.index - 1);
	TweenLite.to(this.ux.linesObject, 0.3, {top: this.ux.case.clientHeight - 75 + "px" });
}

Slider.prototype.showItem = function(index) {
	this.index = (index % this.sliderItems.length + this.sliderItems.length) % this.sliderItems.length;
	this.node.style.height = this.sliderItems[this.index].length +"px";
	
	this.sliderItems[this.index].node.classList.add('case-list__item--active');

	for (var i = 0; i < this.sliderItems.length; i++) {
		if (i != this.index) {
			this.sliderItems[i].node.classList.remove('case-list__item--active');
		}
	}
}

var SliderItem = function(parent, node, i) {
	this.parent = parent;
	this.node = node;
	this.index = i;
	this.length = this.node.clientHeight;

	this.init();
}

SliderItem.prototype.init = function () {
	//this.node.style.display = 'none';
}