'use strict';

/**
 * @ngdoc function
 * @name todoappApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todoappApp
 */
angular.module('todoappApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
