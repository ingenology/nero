'use strict';

/* --------------------------------------------------------------------------
 Angular Stuff
 -------------------------------------------------------------------------- */

angular.module('neroApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
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
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        readout.html("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    $('.data-lat').html('<div>Latitude: <span>' + position.coords.latitude + ' deg</span></div>');
    $('.data-long').html('<div>Longitude: <span>' + position.coords.longitude + ' deg</span></div>');
    $('.data-azi').html('<div>Azimuth: <span>' + 89 + ' deg</span></div>');
    $('.data-alt').html('<div>Altitude: <span>' + 65 + ' deg</span></div>');
    $('.readoutWait').hide();
    $('.posDataReadout .data').fadeIn();
    $('.capturePosData').html('Recapture Data');

}

/* --------------------------------------------------------------------------
 Navigation Interaction
 -------------------------------------------------------------------------- */

$('.nav-primary li > a').click(
    function() {
        $('.nav-primary li > a').removeClass('active');
        $(this).addClass('active');
    }
);