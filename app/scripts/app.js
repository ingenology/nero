'use strict';

/* --------------------------------------------------------------------------
 Global Variables
 -------------------------------------------------------------------------- */

var APPDATA = {
    appMeta: {
        // TODO Have this erased on GET journals
        message : 'No data currently available',
        loggedin_status: 'false'
    },
    test_journalData: [
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
        }
    ]
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

$('body').css('overflow', 'hidden'); // Makes app unscrollable
var loginModal = $('.modal-login');
function loginReveal(data) {
    if (data.appMeta.loggedin_status === 'true') {
        loginModal.delay(1000).fadeOut(600);
        $('body').css('overflow', 'scroll'); // Makes app scrollable
    } else {
        loginModal.show();
    }
}
loginReveal(APPDATA);

function getAppData(userID){
    $.getJSON("http://ec2-54-187-123-159.us-west-2.compute.amazonaws.com:8080/" + userID + "/journals", function(json){
        APPDATA.journals = json.journals;
        alert(json['message']);
        window.location = "/#";
    });
}

$('#button-login').click(function() {
    $.ajax({
        url: "http://ec2-54-187-123-159.us-west-2.compute.amazonaws.com:8080/register",
        type: "POST",
        // the name of the callback parameter, as specified by the YQL service
        jsonp: "callback",
        // tell jQuery we're expecting JSONP
        dataType: "json",
        // tell YQL what we want and that we want JSON
        data: { email: $('#login-email').val()},
        // work with the response
        success: function( response ) {
            if (response["success"]) {
                APPDATA['user_id'] = response['user_id']; // server response
                getAppData(APPDATA['user_id']);
                APPDATA.appMeta['loggedin_status'] = 'true';
                loginReveal(APPDATA);
            }
        },
        error: function( request,message,exception ) {
            console.log( exception );
        }
    });
});

/* --------------------------------------------------------------------------
 Journal Entry Functions
 -------------------------------------------------------------------------- */

function convertDate(utcSeconds) {
    var d = new Date(0); // The 0 there is the key, which sets the date to the epoch
    d.setUTCSeconds(utcSeconds);
    return d;
}