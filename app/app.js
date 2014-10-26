'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
        'ngRoute',
        'myApp.steps',
        'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'steps/step1.html',
            controller: 'StepsCtrl'
        });

        $routeProvider.when('/steps', {
            templateUrl: 'steps/step1.html',
            controller: 'StepsCtrl'
        });

        //$routeProvider.otherwise({redirectTo: '/view1'});
}]);


var render_slides = function(callback){
    var slider = new Slider($('.slider')[0]);

    $('.image-container').on('change', function(e, value) {
        callback(value)
    })
}
