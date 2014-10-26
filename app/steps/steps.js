'use strict';

angular.module('myApp.steps', ['ngRoute'])

    .controller('StepsCtrl', function ($scope, $location) {
        $scope.steps = [
            {
                id: 1,
                a: {
                    img: 'url image a',
                    value: 'A'
                },
                b: {
                    img: 'url image b',
                    value: 'C '
                }
            },
            {
                id: 2,
                a: {
                    img: 'url image c',
                    value: 'C'
                },
                b: {
                    img: 'url image d',
                    value: 'D'
                }
            }
        ]

        $scope.current_step = $scope.steps[0];

        $scope.choice = "a";

        render_slides(function (value) {
            $scope.choice = value;
            $scope.render_next(value);
        })

        $scope.render_next = function (value) {
            var next_step_id = $scope.current_step.id;

            if (next_step_id >= $scope.steps.length) {
                next_step_id = $scope.steps.length - 1;
            }
            $scope.current_step = $scope.steps[next_step_id];

            console.log('slider value is', $scope.current_step);

            $scope.$apply();
        }
    })