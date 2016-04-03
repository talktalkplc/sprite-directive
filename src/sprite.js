'use strict';

angular.module('app.directives.sprite', ['APP/sprite/html/sprite.html'])
    .directive('sprite', function () {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                img: '@',
                alt: '@'
            },
            templateUrl: 'APP/sprite/html/sprite.html',
            controller: ['$scope', '$log', function ($scope, $log) {

                if ($scope.img === undefined) {
                    $log.debug('You are using a sprite without specifying a sprite');
                }

                if ($scope.alt === '') {
                    $log.debug('You are using a sprite without an alt tag');
                }

            }]
        };
    });
