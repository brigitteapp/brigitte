'use strict';

angular.module('myApp.view2', ['ngRoute'])

.controller('View2Ctrl', [function() {
        $scope.title = "Step2";

        render_slides(function(value){
            console.log('slider value is', value);
        })

        $scope.next_step = function(step){
            console.log("next step", step);
            $location.url('/view2');
            return false;
        };
}]);