'use strict';

angular.module('mean.gmap').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('gmap', {
      url: '/gmap/example',
      templateUrl: 'gmap/views/index.html'
    });
  }
]);
