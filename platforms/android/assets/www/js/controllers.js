'use strict';

angular.module('myApp.controllers', [])
    .controller('MainCtrl', ['$scope', '$rootScope', '$window', '$location', function ($scope, $rootScope, $window, $location) {
        $scope.slide = '';
        $rootScope.back = function() {
          $scope.slide = 'slide-right';
          $window.history.back();
        }
        $rootScope.go = function(path){
          $scope.slide = 'slide-left';
          $location.url(path);
        }
        $rootScope.addEventToCalendar = function (time) {
            var shuttleDateTime = moment(time,"hh:mm A").utcOffset(8);
//            var startDate = shuttleDateTime.subtract(15,"m").toDate();
            var startDate = shuttleDateTime.toDate();
            var endDate = shuttleDateTime.toDate();
            var title = "You have a Shuttle to catch!!";
            var location = "@your next meeting";
            var notes = "catch the shuttle for your next meeting!!";
            var success = function () {
                alert("woo hoo! added to calendar!!");
            };
            var error = function (message) {
                alert("Terrible! cant add to calendar!!");
            };
            window.plugins.calendar.createEvent(title, location, notes, startDate,endDate, success, error);
        }
    }])
    .controller('RouteListCtrl', ['$scope', 'Route', function ($scope, Route) {
        $scope.routes = Route.query();
    }])
    .controller('RouteDetailCtrl', ['$scope', '$routeParams', 'Route', function ($scope, $routeParams, Route) {
        $scope.route = Route.get({routeId: $routeParams.routeId});
    }]);
