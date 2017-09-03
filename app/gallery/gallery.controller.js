/**
 * Created by BURGOS on 27/08/2017.
 */
;(function () {
    angular.module('aranjuez').controller('galleryController', galleryController);

    galleryController.$inject = ['$scope'];

    function galleryController($scope) {
        $scope.dataImages = [
            {name: "images/galeria/imagen1.jpg"},
            {name: "images/galeria/imagen2.jpg"},
            {name: "images/galeria/imagen3.jpg"},
            {name: "images/galeria/imagen4.jpg"},
            {name: "images/galeria/imagen5.jpg"},
            {name: "images/galeria/imagen6.jpg"},
            {name: "images/galeria/imagen7.jpg"},
            {name: "images/galeria/imagen8.jpg"},
            {name: "images/galeria/imagen9.jpg"},
            {name: "images/galeria/imagen10.jpg"}
        ];

        $scope.activateMaterialboxed = function () {
            console.log('a;dsfsd');
            $('.materialboxed').materialbox();
        };
    }

})();