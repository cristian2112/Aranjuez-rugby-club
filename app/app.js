;(function () {
    'use strict';

    angular.module("aranjuez",['ui.router']);

    angular.module("aranjuez").config(config);

    config.$inject = ['$stateProvider','$urlRouterProvider', '$httpProvider'];

    function config($stateProvider, $urlRouterProvider, $httpProvider) {
        $httpProvider.defaults.useXDomain = true;

        $urlRouterProvider.otherwise('/');

        // routes
        $stateProvider
            .state('dashboard', {
                url:'/',
                templateUrl:'app/dashboard/dashboard.html'
            })
            .state('contactUs', {
                url:'/Contactenos',
                templateUrl:'app/contactUs/contactUs.html'
            })
    }
})();