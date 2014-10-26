'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {

        $routeProvider.when('/', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });

        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });

        $routeProvider.when('/view2', {
            templateUrl: 'view2/view2.html',
            controller: 'View2Ctrl'
        });

        //$routeProvider.otherwise({redirectTo: '/view1'});
}]);


var render_slides = function(callback){
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
        this.$root.on('touchstart', $.proxy(this.onTouchStartRoot, this))
        this.$element.on('touchmove', $.proxy(this.onTouchMove, this))
        this.draw()
    }

    Slider.prototype.onTouchStart = function(e) {
        var firstTouch = e.originalEvent.touches[0]

        this.anchorY = this.touchY = firstTouch.clientY

        e.stopPropagation()
        e.preventDefault()
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
        var diff, height, delta, value
        if (!this.touchY || !this.anchorY) return false
        diff = this.touchY - this.anchorY
        if (Math.abs(diff) < 1) {
            this.touchY = null
            return false
        }
        delta = diff * 0.75
        this.anchorY = this.anchorY + delta
        var position = this.position
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
            this.$root.trigger('change', this.value)
        }
    }

    Slider.prototype.draw = function() {
        this.update()
        this.$element.css({ top: this.position })
        $('.b').height(this.options.maxPos - this.position)
        $('.a').height(this.position)
        requireRender()
    }

    var slider = new Slider($('.slider')[0])
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

    $('.image-container').on('change', function(e, value) {
        callback(value)
    })
}