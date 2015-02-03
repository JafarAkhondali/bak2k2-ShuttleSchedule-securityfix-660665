'use strict';

(function () {

    var routes = [
            {"id": 1, "name": "CALTRAIN to 2F/1H", "timings": ['7:30 AM', '7:55 AM', '8:10 AM', '8:30 AM', '8:55 AM', '9:10 AM', '9:30 AM', '9:55 AM']},
            {"id": 2, "name": "2F/1H to CALTRAIN", "timings": ['4:05 PM', '4:35 PM', '5:05 PM', '5:30 PM', '6:10 PM']},
            {"id": 3, "name": "CALTRAIN to MISSION BAY", "timings": ['7:15 AM', '7:30 AM', '7:55 AM', '8:10 AM', '8:30 AM', '8:55 AM', '9:10 AM', '9:30 AM', '9:55 AM', '10:15 AM']},
            {"id": 4, "name": "MISSION BAY to CALTRAIN", "timings": ['4:10 PM', '4:35 PM', '5:05 PM', '5:25 PM', '5:50 PM', '6:15 PM']},
            {"id": 5, "name": "MISSION BAY to 2F/1H", "timings": ['7:30 AM', '8:00 AM', '8:30 AM', '9:00 AM', '9:50 AM', '10:50 AM', '11:50 AM', '12:50 PM', '1:50 PM', '2:50 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM']},
            {"id": 6, "name": " 2F/1H to MISSION BAY", "timings": ['7:00 AM', '7:30 AM', '8:00 AM', '8:30 AM', '9:00 AM', '10:20 AM', '11:20 AM', '12:20 PM', '1:20 PM', '2:20 PM', '3:20 PM', '4:30 PM', '5:00 PM', '5:30 PM', '6:00 PM']}
        ],

        findByRouteId = function (id) {
            var route = null,
                l = routes.length,
                i;
            for (i = 0; i < l; i = i + 1) {
                if (routes[i].id === id) {
                    route = routes[i];
                    break;
                }
            }
            return route;
        };

    angular.module('myApp.memoryServices', [])
        .factory('Route', [
            function () {
                return {
                    query: function () {
                        return routes;
                    },
                    get: function (route) {
                        return findByRouteId(parseInt(route.routeId));
                    }
                }
            }]);

}());