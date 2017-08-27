/**
 * Created by BURGOS on 26/08/2017.
 */
;(function () {
    angular.module('aranjuez').controller('contactUsController', contactUsController);
    contactUsController.$inject = ['$scope'];

    function contactUsController($scope) {
        $scope.modelContactUs = [
            {
                name: 'Jose Manuel Mendoza',
                telephone: '70971826',
                email: 'josemanueljacku16@gmail.com'
            },
            {
                name: 'Alberto Zunino Escribano',
                telephone: '73697222',
                email: 'aranjuezrugbyclub@gmail.com '
            }
        ];
    }
})();
