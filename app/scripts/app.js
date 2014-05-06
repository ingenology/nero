'use strict';

/* --------------------------------------------------------------------------
 Global Variables
 -------------------------------------------------------------------------- */

var APPDATA = {
    appMeta: {
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
        },
        {
            "id":12,
            "title":"orci eget orci vehicula condimentum",
            "date":"12/21/2013",
            "time":"12:20",
            "status":" submitted ",
            "latitude":"-43.42472252405032",
            "longitude":"105.01275335604868",
            "azimuth":324.71,
            "altitude":48.35
        },
        {
            "id":13,
            "title":"nisi at nibh in hac habitasse",
            "date":"3/9/2014",
            "time":"1:51",
            "status":" error",
            "latitude":"44.98685116496574",
            "longitude":"-0.7945030301950737",
            "azimuth":206.63,
            "altitude":77.54
        },
        {
            "id":14,
            "title":"libero nullam",
            "date":"5/20/2013",
            "time":"5:01",
            "status":" submitted ",
            "latitude":"87.92133583116066",
            "longitude":"177.94431703852888",
            "azimuth":197.49,
            "altitude":86.44
        },
        {
            "id":15,
            "title":"nisl ut volutpat",
            "date":"2/23/2013",
            "time":"6:30",
            "status":"unfinished",
            "latitude":"50.56887002072244",
            "longitude":"-121.84447924117796",
            "azimuth":59.91,
            "altitude":83.85
        },
        {
            "id":16,
            "title":"quis augue luctus",
            "date":"5/1/2013",
            "time":"20:05",
            "status":"unfinished",
            "latitude":"75.46210497676091",
            "longitude":"-96.63553384636705",
            "azimuth":292.05,
            "altitude":72.37
        },
        {
            "id":17,
            "title":"habitasse platea dictumst",
            "date":"2/26/2013",
            "time":"2:22",
            "status":"unfinished",
            "latitude":"-49.15450779417948",
            "longitude":"162.97973308804512",
            "azimuth":291.76,
            "altitude":59.83
        },
        {
            "id":18,
            "title":"interdum mauris",
            "date":"3/29/2013",
            "time":"5:13",
            "status":" error",
            "latitude":"-31.09755597089419",
            "longitude":"163.64593072248863",
            "azimuth":134.29,
            "altitude":32.36
        },
        {
            "id":19,
            "title":"ante nulla justo",
            "date":"4/9/2013",
            "time":"15:06",
            "status":" error",
            "latitude":"82.77587076279104",
            "longitude":"-122.56390196222648",
            "azimuth":277.15,
            "altitude":54.55
        },
        {
            "id":20,
            "title":"vitae nisi nam ultrices libero non",
            "date":"10/11/2013",
            "time":"7:36",
            "status":" error",
            "latitude":"-42.49083283907273",
            "longitude":"19.032730712374644",
            "azimuth":1.06,
            "altitude":57.82
        },
        {
            "id":21,
            "title":"dolor sit amet consectetuer adipiscing elit",
            "date":"12/20/2013",
            "time":"15:27",
            "status":" error",
            "latitude":"-18.05661895655983",
            "longitude":"91.81020252632726",
            "azimuth":67.34,
            "altitude":46.57
        },
        {
            "id":22,
            "title":"velit vivamus vel nulla",
            "date":"3/30/2013",
            "time":"19:38",
            "status":" submitted ",
            "latitude":"-23.07921575799371",
            "longitude":"-52.720719683062924",
            "azimuth":127.2,
            "altitude":54.83
        },
        {
            "id":23,
            "title":"integer aliquet massa id",
            "date":"4/7/2014",
            "time":"19:08",
            "status":"unfinished",
            "latitude":"-37.085879799184994",
            "longitude":"159.40676236017703",
            "azimuth":32.23,
            "altitude":64.3
        },
        {
            "id":24,
            "title":"vestibulum ac",
            "date":"3/1/2013",
            "time":"12:47",
            "status":" submitted ",
            "latitude":"-22.645230890820855",
            "longitude":"62.92923765924587",
            "azimuth":38.95,
            "altitude":41.65
        },
        {
            "id":25,
            "title":"rhoncus",
            "date":"12/1/2013",
            "time":"17:18",
            "status":" error",
            "latitude":"38.81237918667392",
            "longitude":"87.4503617681354",
            "azimuth":161.74,
            "altitude":78.63
        },
        {
            "id":26,
            "title":"in tempor turpis",
            "date":"3/7/2013",
            "time":"12:16",
            "status":"unfinished",
            "latitude":"-0.8321357952111725",
            "longitude":"-25.778898821577684",
            "azimuth":11.82,
            "altitude":35.21
        },
        {
            "id":27,
            "title":"placerat ante nulla",
            "date":"12/5/2013",
            "time":"18:42",
            "status":" submitted ",
            "latitude":"88.28831817412498",
            "longitude":"-83.38753452224887",
            "azimuth":187.7,
            "altitude":61.05
        },
        {
            "id":28,
            "title":"lorem vitae mattis",
            "date":"8/27/2013",
            "time":"14:21",
            "status":" submitted ",
            "latitude":"-2.0028740718950075",
            "longitude":"177.43332202670115",
            "azimuth":230.72,
            "altitude":60.73
        },
        {
            "id":29,
            "title":"vestibulum quam sapien varius ut blandit",
            "date":"10/7/2013",
            "time":"5:11",
            "status":" error",
            "latitude":"-49.71870253690147",
            "longitude":"127.22437097067507",
            "azimuth":178.2,
            "altitude":41.87
        },
        {
            "id":30,
            "title":"cras non velit nec nisi vulputate",
            "date":"12/5/2012",
            "time":"22:20",
            "status":"unfinished",
            "latitude":"70.63650072823381",
            "longitude":"-177.53084869657923",
            "azimuth":166.01,
            "altitude":85.1
        },
        {
            "id":31,
            "title":"ut erat curabitur gravida nisi at",
            "date":"2/4/2013",
            "time":"11:40",
            "status":"unfinished",
            "latitude":"-84.12953568124075",
            "longitude":"-68.81773174774803",
            "azimuth":73.57,
            "altitude":57.48
        }

    ],
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

var loginModal = $('.modal-login');
function loginReveal(data) {
    if (data.appMeta.loggedin_status == 'true') {
        loginModal.delay(1000).fadeOut(600);
    } else {
        loginModal.show();;
    }
}
loginReveal(APPDATA);

function getAppData(userID){
    $.getJSON("http://ec2-54-186-41-177.us-west-2.compute.amazonaws.com:8080/" + userID + "/journals", function(json){
        APPDATA.journalData = json;
        alert(APPDATA.journalData['message']);
    });
}

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
