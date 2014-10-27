var renderRequired = false

function requireRender() {
  if (renderRequired) return
  renderRequired = true
  window.requestAnimationFrame(render)
}

function render() {
  renderRequired = false
  slider.draw()
}

var Slider = function(element) {
  this.$element = $(element)
  this.$root = this.$element.parent()
  this.anchorY = null
  this.touchY = null
  this.value = null
  this.options = {
    minPos: 0,
    maxPos: this.$root.height() - this.$element.height()
  }
  this.position = this.options.maxPos / 2
  this.init()
}

Slider.prototype.init = function() {
  this.$element.on('touchstart', $.proxy(this.onTouchStart, this))
  this.$element.on('touchend', $.proxy(this.onTouchEnd, this))
  this.$root.on('touchstart', $.proxy(this.onTouchStartRoot, this))
  this.$element.on('touchmove', $.proxy(this.onTouchMove, this))
  $(window).on('resize', $.proxy(this.onResize, this))
  this.draw()
}

Slider.prototype.reset = function(){
	this.position = this.options.maxPos / 2
  this.value = null
  this.init()
}

Slider.prototype.onResize = function() {
  var ratio = this.position / this.options.maxPos
  this.options.maxPos = this.$root.height() - this.$element.height()
  this.position = this.options.maxPos * ratio
  requireRender()
}

Slider.prototype.onTouchStart = function(e) {
  var firstTouch = e.originalEvent.touches[0]

  this.anchorY = this.touchY = firstTouch.clientY

  e.stopPropagation()
  e.preventDefault()
}

Slider.prototype.onTouchEnd = function(e) {
  this.anchorY = this.touchY = null

  requireRender()
}

Slider.prototype.onTouchStartRoot = function(e) {
  this.$element.addClass('shake')
  setTimeout($.proxy(function(){
    this.$element.removeClass('shake')
  }, this), 1000)
  e.stopPropagation()
  e.preventDefault()
}

Slider.prototype.onTouchMove = function(e) {
  var firstTouch = e.originalEvent.touches[0]

  this.touchY = firstTouch.clientY
  requireRender()

  e.preventDefault()
}

Slider.prototype.update = function() {
  var diff, height, delta, value, stickZone, target, speed
  if (this.touchY) { // dragging
    speed = 0.75
    diff = this.touchY - this.anchorY
  }
  else {// free
    speed = 0.2
    stickZone = 0.2
    // proche du haut
    if (this.position <= stickZone * this.options.maxPos)
      target = this.options.minPos
    // proche du bas
    else if (this.position >= (1 - stickZone) * this.options.maxPos)
      target = this.options.maxPos
    // milieu
    else
      target = this.options.maxPos / 2
    diff = target - this.position
  }

  if (Math.abs(diff) >= 1)
    delta = diff * speed
  else
    delta = diff

  if (diff === 0)
    return false

  this.anchorY = this.anchorY + delta
  position = this.position
  position += delta
  position = position > this.options.maxPos ? this.options.maxPos : position
  position = position < this.options.minPos ? this.options.minPos : position
  this.position = position
  if (this.position === this.options.maxPos && this.value != 'a') {
    value = 'a'
  }
  if (this.position === this.options.minPos && this.value != 'b') {
    value = 'b'
  }
  if (value) {
    this.value = value
    this.$root.trigger('change', this.value);
  }
}

Slider.prototype.draw = function() {
  var x = this.update()
  this.$element.css({ top: this.position })
  $('.b').height(this.options.maxPos - this.position)
  $('.a').height(this.position)
  if (x !== false) requireRender()
}
