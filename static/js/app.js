const app = angular.module("emersonAngularApp", ["ngRoute", "ngAnimate"]);

app
    .filter("dateInThePast", function () {
        return function (input) {
            var out = [];
            for (var o in input) {
                if (input[o].Date >= Date.now()) {
                    out.push(input[o]);
                }
            }
            return out;
        };
    })
    .controller("MainController", function ($scope, $route, $routeParams, $location) {
        $scope.$route = $route;
        $scope.$location = $location;
        $scope.$routeParams = $routeParams;

        $scope.RandomiseBackground = function () {
            var randomNumber = Math.floor(Math.random() * (4 - 0 + 1)) + 0;

            switch (randomNumber) {
                case 0:
                    $scope.navBgColorPink = true;
                    $scope.navBgColorBlue = false;
                    $scope.navBgColorPurple = false;
                    $scope.navBgColorRed = false;
                    break;
                case 1:
                    $scope.navBgColorPink = false;
                    $scope.navBgColorBlue = true;
                    $scope.navBgColorPurple = false;
                    $scope.navBgColorRed = false;
                    break;
                case 2:
                    $scope.navBgColorPink = false;
                    $scope.navBgColorBlue = false;
                    $scope.navBgColorPurple = true;
                    $scope.navBgColorRed = false;
                    break;
                default:
                    $scope.navBgColorPink = false;
                    $scope.navBgColorBlue = false;
                    $scope.navBgColorPurple = false;
                    $scope.navBgColorRed = true;
                    break;
            }

        }
    });

app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "../static/js/Pages/home.html",
            controller: "HomeController"
        })
        .when("/about", {
            templateUrl: "../static/js/Pages/about.html",
            controller: "AboutController"
        })
        .when("/photos", {
            templateUrl: "../static/js/Pages/photos.html",
            controller: "PhotosController"
        })
        .when("/music", {
            templateUrl: "../static/js/Pages/music.html",
            controller: "MusicController"
        })
        .when("/events", {
            templateUrl: "../static/js/Pages/events.html",
            controller: "EventsController"
        })
        .when("/contact", {
            templateUrl: "../static/js/Pages/contact.html",
            controller: "ContactController"
        })
        .when("/admin", {
            templateUrl: "../static/js/Pages/admin.html",
            controller: "AdminController"
        });

    $locationProvider.html5Mode({
        enabled: false,
        requireBase: false
    });
});