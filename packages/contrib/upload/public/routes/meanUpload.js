'use strict';

angular.module('mean.upload').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider.state('Upload', {
            url: '/meanupload/help',
            templateUrl: 'upload/views/index.html'
        });
    }
]);
