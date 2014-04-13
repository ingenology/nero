'use strict';

angular.module('neroApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

// Fade Page In
$('.fade-in').hide().fadeIn(2000);
