/*!
 *
 * Angle - Bootstrap Admin App + AngularJS
 *
 * Author: @themicon_co
 * Website: http://themicon.co
 * License: http://support.wrapbootstrap.com/knowledge_base/topics/usage-licenses
 *
 */

if (typeof $ === 'undefined') {
    throw new Error('This application\'s JavaScript requires jQuery');
}


// APP START
// -----------------------------------

var App = angular.module('mainApp', ['ui.bootstrap','ui.router','ui.bootstrap','ngCookies','chart.js']);


/**=========================================================
 * Module: main.js
 * Main Application Controller
 =========================================================*/




App.controller('AppController',
    ['$rootScope', '$scope', "$cookieStore","$route",
        function ($rootScope, $scope, $cookieStore, $route) {
            "use strict";



        }]);


App.controller('UserController', function ($scope, $http, $cookies, $cookieStore,$rootScope,$timeout, $state) {
//console.log(MY_CONSTANT.url);



    $scope.clickit = function () {
    $state.go('layout1.Statistics');
    }






});


//service for scored data//

//
//App.service('ScoreData', function($http){
//    var promise;
//    var myService = {
//        async: function() {
//            if ( !promise ) {
//                // $http returns a promise, which has a then function, which also returns a promise
//                promise = $http.get('vendor/sachin').then(function (response) {
//                    // The then function here is an opportunity to modify the response
//                    console.log(response);
//                    // The return value gets picked up by the then in the controller.
//                    return response.data;
//                });
//            }
//            // Return the promise to the controller
//            return promise;
//        }
//    };
//    return myService;
//
//});


App.config(function (ChartJsProvider) {
    ChartJsProvider.setOptions({ colors : [ '#803690', '#00ADF9', '#DCDCDC', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'] });
});

