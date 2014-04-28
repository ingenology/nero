'use strict';

/* --------------------------------------------------------------------------
 Angular Stuff
 -------------------------------------------------------------------------- */

angular.module('neroApp')
    .controller('MainCtrl', function ($scope) {
        $scope.name = "testguy";
    })
    .controller('EntryCtrl', function ($scope) {
        $scope.entryData = [
            {
                "id":1,
                "title":"dui luctus rutrum nulla tellus in",
                "date":"6/15/2013",
                "time":"17:40",
                "status":" submitted ",
                "latitude":"-22.155534579290986",
                "longitude":"32.500969943975946",
                "azimuth":47.03,
                "altitude":66.13
            },
            {
                "id":2,
                "title":"sit amet sapien dignissim",
                "date":"8/26/2013",
                "time":"2:55",
                "status":"unfinished",
                "latitude":"53.370119140919456",
                "longitude":"126.78676848662019",
                "azimuth":332.16,
                "altitude":49.67
            },
            {
                "id":7,
                "title":"integer ac leo pellentesque",
                "date":"10/5/2013",
                "time":"20:00",
                "status":" submitted ",
                "latitude":"62.98786862080112",
                "longitude":"96.1740174437549",
                "azimuth":188.36,
                "altitude":67.19
            },
            {
                "id":11,
                "title":"mauris enim leo rhoncus sed vestibulum",
                "date":"6/11/2013",
                "time":"11:23",
                "status":" submitted ",
                "latitude":"89.3651143615817",
                "longitude":"112.73849613306396",
                "azimuth":291.49,
                "altitude":81.62
            }
        ];
    });