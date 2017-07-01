/**
 * Created by BURGOS on 01/07/2017.
 */
'use strict';

angular.module('aranjuez')
    .directive('headerTemplate',function(){
        return {
            templateUrl:'app/core/directives/header/header.html',
            restrict: 'A',
            replace: false
        }
    });