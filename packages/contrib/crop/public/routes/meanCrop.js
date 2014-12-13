'use strict';

angular.module('mean.crop').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('jCrop', {
      url: '/meanCrop/jcrop/example',
      templateUrl: 'crop/views/jcropDemo.html'
    })
    .state('jWindowCrop', {
      url: '/meanCrop/jwindowcrop/example',
      templateUrl: 'crop/views/jwindowcropDemo.html'
    });
  }
]);
