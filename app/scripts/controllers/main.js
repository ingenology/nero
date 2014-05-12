'use strict';

/* --------------------------------------------------------------------------
 Angular Stuff
 -------------------------------------------------------------------------- */

angular.module('neroApp')
    .controller('MainCtrl', function ($scope) {
        $scope.name = "testguy";
    })
    .controller('EntryCtrl', function ($scope) {
        $scope.entryData = APPDATA.journals;
    })
    .controller('EntryDetailCtrl',function ($scope,$routeParams) {
    	for(var journal in APPDATA.journals){
    		if(APPDATA.journals[journal].id == parseInt($routeParams.journalId)){
    			$scope.entryData = APPDATA.journals[journal];
    			break;
    		}
    	}
    	console.log($scope.entryData)
        // $scope.entryData = APPDATA.journals;
    });