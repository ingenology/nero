'use strict';

/* --------------------------------------------------------------------------
 Angular Stuff
 -------------------------------------------------------------------------- */

angular.module('neroApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/entryList.html',
                controller: 'EntryCtrl'
            })
            .when('/fieldGuide', {
                templateUrl: 'views/fieldGuide.html',
                controller: 'FieldGuideCtrl'
            })
            .when('/login', {
                templateUrl: 'views/login.html',
                controller: 'LoginCtrl'
            })
            .when('/addEntry', {
                templateUrl: 'views/addEntry.html',
                controller: 'AddEntryCtrl'
            })
            .when('/entryDetail', {
                templateUrl: 'views/entryDetail.html',
                controller: 'EntryDetailCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });

/* --------------------------------------------------------------------------
 Phone Capture Data
 -------------------------------------------------------------------------- */

function getLocation() {
    $('.posDataReadout .data').hide();
    $('.posDataReadout .data *').html();
    $('.readoutWait').show();
    $('.posDataReadout').show();
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(writePosition);
    } else {
        readout.html("Geolocation is not supported by this browser.");
    }
}

function writePosition(position) {
    runGyro();
    $('.data-lat').html('<div>Latitude: <span>' + position.coords.latitude + ' deg</span></div>');
    $('.data-long').html('<div>Longitude: <span>' + position.coords.longitude + ' deg</span></div>');
    $('.readoutWait').hide();
    $('.posDataReadout .data').fadeIn();
    $('.capturePosData').html('Recapture Data');

}

function runGyro() {
    gyro.frequency = 100;
    gyro.startTracking(function(o) {
        $('.data-azi').html('<div>Azimuth: <span>' + o.alpha + ' deg</span></div>');
        $('.data-alt').html('<div>Altitude: <span>' + o.gamma + ' deg</span></div>');
        gyro.stopTracking();
    });
    return true;
}


/* --------------------------------------------------------------------------
 Navigation Interaction
 -------------------------------------------------------------------------- */

// TODO Simplify These Two
$('.nav-primary li > a').click(
    function() {
        $('.nav-primary li > a').removeClass('active');
        $(this).addClass('active');
    }
);

function navActive(path) {
    var nav = $('.nav-primary a');
    $('.nav-primary li > a').removeClass('active');
    $('[href="' + path + '"]').addClass('active');
    window.location.href=path;
}
