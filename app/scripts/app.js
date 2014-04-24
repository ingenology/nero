'use strict';

/* --------------------------------------------------------------------------
 Global Variables
 -------------------------------------------------------------------------- */

var APPDATA =
    {
        message : 'No data currently available'
    };

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
                controller: 'MainCtrl'
            })
            .when('/fieldGuide', {
                templateUrl: 'views/fieldGuide.html',
                controller: 'MainCtrl'
            })
            .when('/addEntry', {
                templateUrl: 'views/addEntry.html',
                controller: 'MainCtrl'
            })
            .when('/entryDetail', {
                templateUrl: 'views/entryDetail.html',
                controller: 'MainCtrl'
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


/* --------------------------------------------------------------------------
 Login Interaction
 -------------------------------------------------------------------------- */

$('#button-login').click(function() {
    $.ajax({
        url: "http://ec2-54-186-41-177.us-west-2.compute.amazonaws.com:8080/register",
        type: "POST",
        // the name of the callback parameter, as specified by the YQL service
        jsonp: "callback",
        // tell jQuery we're expecting JSONP
        dataType: "json",
        // tell YQL what we want and that we want JSON
        data: { email: $('#login-email').val()},
        // work with the response
        success: function( response ) {
            alert('Win');
            APPDATA['user_id'] = response['UserId']; // server response
            APPDATA['journals'] = response[''].toLowerCase(); // server response
        },
        error: function( request,message,exception ) {
            console.log( exception );
        }
    });
});

function getAppData() {

}
