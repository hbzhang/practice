/**
 * Created by hbzhang on 10/5/14.
 */
'use strict';

angular.module('mean.practice').controller('GridsterController', ['$scope','Global', 'Practice',
    function($scope, Global, Practice) {
        $scope.global = Global;
        $scope.package = {
            name: 'practice'
        };

        $scope.gridsterOpts = {
            margins: [20, 20],
            outerMargin: false,
            pushing: true,
            floating: true,
            draggable: {
                enabled: false
            },
            resizable: {
                enabled: false,
                handles: ['n', 'e', 's', 'w', 'se', 'sw']
            }
        };

       /* $scope.inputItems = [
            { sizeX: 2, sizeY: 5, row: 0, col: 3}
        ]; */

        $scope.treeItems = [
            { sizeX: 2, sizeY: 5, row: 0, col: 0 }
        ];
        $scope.contentItems = [
            { sizeX: 4, sizeY: 6, row: 0, col: 2 }

        ];

    }]);
