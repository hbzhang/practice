'use strict';

angular.module('mean.practice').controller('PracticeController', ['$scope','Global', 'Practice',
  function($scope, Global, Practice) {
      $scope.global = Global;
      $scope.checked;
      $scope.package = {
          name: 'practice'
      };

  }]);
