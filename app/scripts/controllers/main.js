'use strict';

/* --------------------------------------------------------------------------
 Angular Stuff
 -------------------------------------------------------------------------- */

angular.module('neroApp')
    .controller('SecondCtrl', function ($scope) {
        $scope.entry = 'pickles';
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
            },
            {
                "id":32,
                "title":"tincidunt lacus at velit vivamus",
                "date":"11/1/2013",
                "time":"22:26",
                "status":"unfinished",
                "latitude":"-21.50510888220012",
                "longitude":"70.65079448794609",
                "azimuth":45.6,
                "altitude":81.35
            },
            {
                "id":33,
                "title":"rutrum nulla tellus",
                "date":"3/1/2014",
                "time":"1:11",
                "status":"unfinished",
                "latitude":"-31.990374524149573",
                "longitude":"6.546806628858178",
                "azimuth":64.82,
                "altitude":50.6
            },
            {
                "id":34,
                "title":"nulla ut erat id",
                "date":"2/4/2014",
                "time":"5:02",
                "status":" error",
                "latitude":"71.8440435679912",
                "longitude":"-76.21622449990556",
                "azimuth":269.49,
                "altitude":59.83
            },
            {
                "id":35,
                "title":"faucibus orci luctus",
                "date":"9/5/2013",
                "time":"14:22",
                "status":" error",
                "latitude":"28.03628379453933",
                "longitude":"-82.40577886885745",
                "azimuth":133.99,
                "altitude":46.4
            },
            {
                "id":36,
                "title":"urna ut tellus nulla ut erat",
                "date":"12/16/2012",
                "time":"8:52",
                "status":"unfinished",
                "latitude":"-11.72516271916669",
                "longitude":"118.45261558766492",
                "azimuth":162.21,
                "altitude":71.68
            },
            {
                "id":37,
                "title":"tellus semper interdum mauris",
                "date":"1/19/2013",
                "time":"1:36",
                "status":" submitted ",
                "latitude":"78.91615830505435",
                "longitude":"-97.63635260748835",
                "azimuth":133.26,
                "altitude":45.18
            },
            {
                "id":38,
                "title":"in hac",
                "date":"2/19/2014",
                "time":"11:56",
                "status":" submitted ",
                "latitude":"-77.90040291307741",
                "longitude":"41.410237836829936",
                "azimuth":153.91,
                "altitude":66.1
            },
            {
                "id":39,
                "title":"ac est lacinia nisi venenatis",
                "date":"1/16/2013",
                "time":"22:53",
                "status":"unfinished",
                "latitude":"21.60707837058682",
                "longitude":"142.1619757689685",
                "azimuth":323.86,
                "altitude":68.65
            },
            {
                "id":40,
                "title":"pede lobortis",
                "date":"12/4/2013",
                "time":"20:46",
                "status":" submitted ",
                "latitude":"-27.81151203460086",
                "longitude":"-45.875287521280654",
                "azimuth":108.86,
                "altitude":52.91
            },
            {
                "id":41,
                "title":"turpis sed ante vivamus tortor",
                "date":"1/23/2014",
                "time":"11:18",
                "status":"unfinished",
                "latitude":"43.4976472791092",
                "longitude":"50.92384866408361",
                "azimuth":6.07,
                "altitude":41.56
            },
            {
                "id":42,
                "title":"nunc vestibulum",
                "date":"12/3/2012",
                "time":"6:31",
                "status":"unfinished",
                "latitude":"-0.5085197527296259",
                "longitude":"-54.99134504698273",
                "azimuth":326.67,
                "altitude":76.76
            },
            {
                "id":43,
                "title":"vestibulum sed magna at nunc",
                "date":"12/19/2012",
                "time":"19:39",
                "status":" submitted ",
                "latitude":"-61.264454536056846",
                "longitude":"139.46837115365952",
                "azimuth":241.51,
                "altitude":41.23
            },
            {
                "id":44,
                "title":"ante",
                "date":"12/26/2012",
                "time":"0:49",
                "status":" error",
                "latitude":"59.04825976779816",
                "longitude":"49.84132135089416",
                "azimuth":206.17,
                "altitude":77.21
            },
            {
                "id":45,
                "title":"lobortis sapien sapien",
                "date":"12/27/2013",
                "time":"0:27",
                "status":" submitted ",
                "latitude":"18.69583308342645",
                "longitude":"142.12122261290295",
                "azimuth":72.14,
                "altitude":72.98
            },
            {
                "id":46,
                "title":"fermentum justo nec condimentum neque",
                "date":"2/6/2014",
                "time":"10:59",
                "status":" error",
                "latitude":"8.522990727113225",
                "longitude":"97.34559275655556",
                "azimuth":244.12,
                "altitude":61.87
            },
            {
                "id":47,
                "title":"bibendum imperdiet nullam orci pede venenatis",
                "date":"12/25/2012",
                "time":"0:35",
                "status":" submitted ",
                "latitude":"-77.4732775627229",
                "longitude":"72.88627622428811",
                "azimuth":27.87,
                "altitude":42.22
            },
            {
                "id":48,
                "title":"massa donec dapibus duis at velit",
                "date":"6/12/2013",
                "time":"8:15",
                "status":"unfinished",
                "latitude":"-0.18294727770704355",
                "longitude":"-71.12162571469295",
                "azimuth":204.26,
                "altitude":79.06
            },
            {
                "id":49,
                "title":"lobortis",
                "date":"3/14/2014",
                "time":"16:44",
                "status":" submitted ",
                "latitude":"-63.8187310933949",
                "longitude":"-45.97154678351325",
                "azimuth":300.47,
                "altitude":47.63
            },
            {
                "id":50,
                "title":"pellentesque eget nunc donec",
                "date":"1/23/2013",
                "time":"5:33",
                "status":"unfinished",
                "latitude":"72.75828830449828",
                "longitude":"105.04401457273883",
                "azimuth":293.46,
                "altitude":82.57
            },
            {
                "id":51,
                "title":"vivamus vestibulum sagittis",
                "date":"1/16/2014",
                "time":"23:13",
                "status":"unfinished",
                "latitude":"86.9347443503842",
                "longitude":"94.53778691108698",
                "azimuth":6.69,
                "altitude":89.15
            },
            {
                "id":52,
                "title":"eget tincidunt",
                "date":"10/9/2013",
                "time":"6:02",
                "status":"unfinished",
                "latitude":"-27.682619169626307",
                "longitude":"175.48059245342756",
                "azimuth":125.14,
                "altitude":67.65
            },
            {
                "id":53,
                "title":"laoreet ut rhoncus",
                "date":"1/6/2013",
                "time":"14:35",
                "status":" error",
                "latitude":"-21.31251960199245",
                "longitude":"-30.446511342354768",
                "azimuth":196.59,
                "altitude":65.91
            },
            {
                "id":54,
                "title":"vestibulum quam sapien",
                "date":"4/12/2013",
                "time":"21:23",
                "status":" submitted ",
                "latitude":"4.884353605704504",
                "longitude":"-69.17520460282007",
                "azimuth":237.24,
                "altitude":55.42
            },
            {
                "id":55,
                "title":"volutpat dui maecenas tristique",
                "date":"1/26/2014",
                "time":"10:46",
                "status":"unfinished",
                "latitude":"3.209099660620339",
                "longitude":"-61.34038568051757",
                "azimuth":305.16,
                "altitude":83.97
            },
            {
                "id":56,
                "title":"mi sit amet lobortis sapien sapien",
                "date":"12/8/2012",
                "time":"22:36",
                "status":" error",
                "latitude":"16.227182876698052",
                "longitude":"26.645404182414183",
                "azimuth":225.23,
                "altitude":63.62
            },
            {
                "id":57,
                "title":"elementum nullam varius",
                "date":"5/20/2013",
                "time":"0:28",
                "status":" error",
                "latitude":"-1.6238344820356332",
                "longitude":"-36.66590893733118",
                "azimuth":50.95,
                "altitude":81.78
            },
            {
                "id":58,
                "title":"vel nisl duis ac nibh fusce",
                "date":"3/10/2014",
                "time":"12:09",
                "status":"unfinished",
                "latitude":"87.19296383965894",
                "longitude":"15.141084843837234",
                "azimuth":282.2,
                "altitude":51.47
            },
            {
                "id":59,
                "title":"tincidunt eu",
                "date":"8/17/2013",
                "time":"18:01",
                "status":" error",
                "latitude":"59.59735956664787",
                "longitude":"-1.8475274978555944",
                "azimuth":232.38,
                "altitude":75.21
            },
            {
                "id":60,
                "title":"cubilia curae",
                "date":"4/17/2014",
                "time":"9:02",
                "status":" error",
                "latitude":"86.43009770135339",
                "longitude":"78.47088995771884",
                "azimuth":94.2,
                "altitude":86.53
            },
            {
                "id":61,
                "title":"sit amet turpis elementum ligula",
                "date":"11/26/2013",
                "time":"13:30",
                "status":" submitted ",
                "latitude":"-77.70162063005033",
                "longitude":"46.529989034295085",
                "azimuth":232.71,
                "altitude":58.67
            },
            {
                "id":62,
                "title":"lacinia",
                "date":"1/9/2013",
                "time":"20:05",
                "status":"unfinished",
                "latitude":"-13.530957017515078",
                "longitude":"167.61579003565413",
                "azimuth":52.09,
                "altitude":44.1
            },
            {
                "id":63,
                "title":"rutrum",
                "date":"9/16/2013",
                "time":"10:28",
                "status":"unfinished",
                "latitude":"-45.02112262149106",
                "longitude":"-152.21557686999643",
                "azimuth":316.56,
                "altitude":88.13
            },
            {
                "id":64,
                "title":"eget massa tempor",
                "date":"2/24/2014",
                "time":"13:11",
                "status":" error",
                "latitude":"63.31366512438723",
                "longitude":"123.45170285801981",
                "azimuth":251.24,
                "altitude":82.74
            },
            {
                "id":65,
                "title":"duis",
                "date":"12/13/2012",
                "time":"3:25",
                "status":" submitted ",
                "latitude":"-84.7189626654768",
                "longitude":"76.73980092494855",
                "azimuth":4.83,
                "altitude":70.07
            },
            {
                "id":66,
                "title":"purus phasellus in",
                "date":"1/20/2014",
                "time":"19:39",
                "status":" error",
                "latitude":"-72.97674227804181",
                "longitude":"-83.09069531830727",
                "azimuth":185.03,
                "altitude":52.63
            },
            {
                "id":67,
                "title":"et",
                "date":"7/25/2013",
                "time":"8:52",
                "status":" error",
                "latitude":"-32.155235159085805",
                "longitude":"-148.59733965691845",
                "azimuth":195.76,
                "altitude":40.79
            },
            {
                "id":68,
                "title":"in quis justo maecenas rhoncus",
                "date":"8/15/2013",
                "time":"0:59",
                "status":" submitted ",
                "latitude":"-54.290283397601954",
                "longitude":"57.46432689750063",
                "azimuth":46.74,
                "altitude":89.68
            },
            {
                "id":69,
                "title":"pellentesque quisque porta volutpat erat quisque",
                "date":"10/15/2013",
                "time":"15:36",
                "status":"unfinished",
                "latitude":"40.82399179642931",
                "longitude":"107.49486491896982",
                "azimuth":349.99,
                "altitude":39.69
            },
            {
                "id":70,
                "title":"et eros vestibulum",
                "date":"2/20/2013",
                "time":"6:59",
                "status":"unfinished",
                "latitude":"1.2802542322763628",
                "longitude":"-74.74534501213253",
                "azimuth":339.74,
                "altitude":78.7
            },
            {
                "id":71,
                "title":"elit proin interdum mauris",
                "date":"6/9/2013",
                "time":"22:57",
                "status":" error",
                "latitude":"82.71467663272429",
                "longitude":"130.56768816558042",
                "azimuth":288.88,
                "altitude":65.24
            },
            {
                "id":72,
                "title":"sed justo pellentesque viverra",
                "date":"2/17/2014",
                "time":"15:59",
                "status":"unfinished",
                "latitude":"69.77950396081013",
                "longitude":"108.14072590627796",
                "azimuth":27.73,
                "altitude":62.07
            },
            {
                "id":73,
                "title":"augue quam sollicitudin",
                "date":"1/22/2013",
                "time":"22:37",
                "status":" submitted ",
                "latitude":"-62.86672590415564",
                "longitude":"20.313618311286433",
                "azimuth":345.05,
                "altitude":42.61
            },
            {
                "id":74,
                "title":"maecenas pulvinar",
                "date":"4/1/2013",
                "time":"0:51",
                "status":"unfinished",
                "latitude":"-20.263314391741716",
                "longitude":"-9.561341604390577",
                "azimuth":29.31,
                "altitude":86.21
            },
            {
                "id":75,
                "title":"dictumst aliquam augue quam sollicitudin vitae",
                "date":"9/22/2013",
                "time":"2:47",
                "status":" submitted ",
                "latitude":"20.66079207292495",
                "longitude":"-175.0195340013197",
                "azimuth":45.75,
                "altitude":46.74
            },
            {
                "id":76,
                "title":"suscipit ligula",
                "date":"11/25/2013",
                "time":"18:05",
                "status":" submitted ",
                "latitude":"5.020261768976411",
                "longitude":"118.56781967349025",
                "azimuth":343.59,
                "altitude":45.72
            },
            {
                "id":77,
                "title":"in est",
                "date":"6/23/2013",
                "time":"21:22",
                "status":" submitted ",
                "latitude":"-43.963000446462665",
                "longitude":"-20.03648788940575",
                "azimuth":290.1,
                "altitude":69.29
            },
            {
                "id":78,
                "title":"convallis eget eleifend luctus",
                "date":"3/23/2014",
                "time":"18:40",
                "status":" error",
                "latitude":"63.172321387821455",
                "longitude":"-152.07009318484435",
                "azimuth":273.25,
                "altitude":50.09
            },
            {
                "id":79,
                "title":"mus vivamus vestibulum sagittis",
                "date":"6/11/2013",
                "time":"18:22",
                "status":" submitted ",
                "latitude":"14.027842148735232",
                "longitude":"96.76959789332255",
                "azimuth":214.68,
                "altitude":55.12
            },
            {
                "id":80,
                "title":"id nulla ultrices",
                "date":"11/5/2013",
                "time":"8:16",
                "status":" submitted ",
                "latitude":"46.44581018661691",
                "longitude":"12.408789343175926",
                "azimuth":311.03,
                "altitude":55.79
            },
            {
                "id":81,
                "title":"pellentesque at nulla suspendisse potenti",
                "date":"6/17/2013",
                "time":"19:40",
                "status":" error",
                "latitude":"-43.394896276003124",
                "longitude":"-59.75997754382533",
                "azimuth":145.56,
                "altitude":59.93
            },
            {
                "id":82,
                "title":"a suscipit nulla elit ac nulla",
                "date":"10/13/2013",
                "time":"3:37",
                "status":" submitted ",
                "latitude":"76.84462992561956",
                "longitude":"78.46951857265452",
                "azimuth":227.79,
                "altitude":65.36
            },
            {
                "id":83,
                "title":"in faucibus orci",
                "date":"4/18/2014",
                "time":"3:35",
                "status":" error",
                "latitude":"29.40378031640188",
                "longitude":"-0.8399222212756001",
                "azimuth":203.44,
                "altitude":83.71
            },
            {
                "id":84,
                "title":"lorem",
                "date":"7/31/2013",
                "time":"0:04",
                "status":" submitted ",
                "latitude":"-53.3193971132391",
                "longitude":"-64.99589015019997",
                "azimuth":260.53,
                "altitude":34.98
            },
            {
                "id":85,
                "title":"massa tempor",
                "date":"4/7/2014",
                "time":"14:29",
                "status":" submitted ",
                "latitude":"-67.9636604444872",
                "longitude":"-37.72730256722119",
                "azimuth":56.09,
                "altitude":67.95
            },
            {
                "id":86,
                "title":"in",
                "date":"2/14/2014",
                "time":"17:17",
                "status":" error",
                "latitude":"-84.4150639751335",
                "longitude":"-106.34728635401575",
                "azimuth":221.61,
                "altitude":30.07
            },
            {
                "id":87,
                "title":"vel sem sed sagittis nam",
                "date":"4/8/2014",
                "time":"3:55",
                "status":"unfinished",
                "latitude":"25.0528702785694",
                "longitude":"138.27441369724875",
                "azimuth":162.45,
                "altitude":41.94
            },
            {
                "id":88,
                "title":"in imperdiet et",
                "date":"1/23/2014",
                "time":"3:00",
                "status":"unfinished",
                "latitude":"19.755868482013113",
                "longitude":"-67.88029731895918",
                "azimuth":311.68,
                "altitude":73.21
            },
            {
                "id":89,
                "title":"sit amet eros suspendisse accumsan tortor",
                "date":"8/20/2013",
                "time":"6:18",
                "status":" submitted ",
                "latitude":"34.97482451411891",
                "longitude":"-4.154807041800581",
                "azimuth":50.35,
                "altitude":53.03
            }
        ];
    });