'use strict';

/* --------------------------------------------------------------------------
 Angular Stuff
 -------------------------------------------------------------------------- */

angular.module('neroApp')
    .controller('MainCtrl', function ($scope) {
        $scope.name = "testguy";
    })
    .controller('EntryCtrl', function ($scope) {
        $scope.entryData = APPDATA;
    });