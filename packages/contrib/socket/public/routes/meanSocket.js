'use strict';

angular.module('mean.socket').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider.state('Socket', {
            url: '/meansocket/help',
            templateUrl: 'socket/views/index.html'
        });
    }
]);
