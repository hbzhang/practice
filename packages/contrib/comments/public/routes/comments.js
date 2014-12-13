'use strict';

angular.module('mean.comments').config(['$stateProvider',
  function($stateProvider) {
    $stateProvider.state('comments', {
      url: '/comments/help',
      templateUrl: 'comments/views/help.html'
    });
  }
]);
