'use strict';

angular.module('mean.practice').config(['$stateProvider',
   // states for my app
  function($stateProvider) {
    $stateProvider.state('team', {
      url: '/team',
      templateUrl: 'practice/views/index.html'
    });
  }
]);
