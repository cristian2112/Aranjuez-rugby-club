/**
 * Created by BURGOS on 01/07/2017.
 */
'use strict';

angular.module('aranjuez')
    .directive('sidebarTemplate',function(){
        return {
            templateUrl:'app/core/directives/sidebar/sidebar.html',
            restrict: 'A',
            replace: false
        }
    });