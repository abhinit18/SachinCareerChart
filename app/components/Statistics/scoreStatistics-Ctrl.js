/**
 * Created by Abhinit on 8/18/2016.
 */
App.controller('StatsController', function ($scope, $http, $cookies, $cookieStore, $state) {
//console.log(MY_CONSTANT.url);


    $scope.mapp = function(){

        $http({
            method: 'GET',
            url: 'vendor/sachin'

        }).success(function(data){

            $scope.tableData = data;
        }).error(function(data){
            console.log(data);
        });
    }
    $scope.mapp();



//    high charts //

    $(function () {

        $.getJSON('vendor/sachin', function (data) {


            console.log(data);

            console.log($scope.tableData);
            var battingScore = _.pluck(data, 'batting_score');
            var scoreDated = _.pluck(data, 'date');
            var catches = _.pluck(data, 'catches');
            var wickets = _.pluck(data, 'wickets');
            var stumps = _.pluck(data, 'stumps');
            var MatchGround = _.pluck(data, 'ground');
            var Grounds = _.uniq(MatchGround);
            // Create a timer
            var start = +new Date();

            //console.log(tipsy);
            // Create the chart
            $('#container').highcharts({
                chart: {
                    type: 'column'
                },
                title: {
                    text: 'Sachin Tendulkar\'s overall performance'
                },
                subtitle: {
                    text: 'Source: SocialCops.com'
                },
                xAxis: {
                    categories: scoreDated,
                    crosshair: true
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'Scores'
                    }
                },
                tooltip: {
                    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                    pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
                    footerFormat: '</table>',
                    shared: true,
                    useHTML: true
                },
                plotOptions: {
                    column: {
                        pointPadding: 0.2,
                        borderWidth: 0
                    }
                },
                series: [{
                    name: 'Batting Score',
                    data: battingScore

                }, {
                    name: 'Catches',
                    data: catches

                }, {
                    name: 'Wickets',
                    data: wickets

                },
                {
                    name: 'Stumps',
                    data: stumps

                }]
            });

        });
    });



//    ======================================= New Chart ==================================== //


});