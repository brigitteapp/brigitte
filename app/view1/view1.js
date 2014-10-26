'use strict';

angular.module('myApp.view1', ['ngRoute'])

.controller('View1Ctrl', function($scope, $location) {
        $scope.title = "Step1";

        render_slides(function(value){
            $scope.render_next(value);
        })

        $scope.render_next = function(value){
            console.log('slider value is', value);
            $scope.title = "Step2";
        }
})