/**
 * Created by BURGOS on 26/08/2017.
 */
;(function () {
    angular.module('aranjuez').controller('informationOfClubController', informationOfClubController);
    informationOfClubController.$inject = ['$scope'];

    function informationOfClubController($scope) {
        $('ul.tabs').tabs();
    }
})();
