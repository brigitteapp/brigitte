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
    var slider = new Slider($('.slider')[0]);

    $('.image-container').on('change', function(e, value) {
        callback(value)
    })
}
