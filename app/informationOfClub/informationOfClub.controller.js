/**
 * Created by BURGOS on 03/09/2017.
 */
;(function () {
    angular.module('aranjuez').controller('informationOfClubController', informationOfClubController);
    informationOfClubController.$inject = ['$scope'];

    function informationOfClubController($scope) {
        $scope.showingMoreHistoryOfClub = false;
        $scope.tabs = 'history';

        $scope.showMoreHistoryOfClub = function (state) {
            $scope.showingMoreHistoryOfClub = state;
        };

        $scope.ChangeTab = function (tab) {
            $scope.tabs = tab
        }

        $scope.dataPlayers = [
            {
                id: 1,
                name: 'Juan Perez',
                edad: 20,
                Poscision: 'lorem',
                dorsa: 10,
                inicioEnElClub: '21/12/2016',
                tipoDeEquipo: 'Division Masculina'
            },
            {
                id: 2,
                name: 'Maria Lozada',
                edad: 20,
                Poscision: 'lorem lorem',
                dorsa: 11,
                inicioEnElClub: '21/09/2016',
                tipoDeEquipo: 'Division Femenina'
            },
            {
                id: 3,
                name: 'Julio Perez',
                edad: 20,
                Poscision: 'lorem lorem',
                dorsa: 11,
                inicioEnElClub: '21/09/2016',
                tipoDeEquipo: 'Division Masculina'
            },
            {
                id: 4,
                name: 'Maria Mendez',
                edad: 20,
                Poscision: 'lorem lorem',
                dorsa: 11,
                inicioEnElClub: '21/09/2016',
                tipoDeEquipo: 'Division Femenina'
            },
            {
                id: 5,
                name: 'Juan Banzer',
                edad: 20,
                Poscision: 'lorem lorem',
                dorsa: 11,
                inicioEnElClub: '21/09/2016',
                tipoDeEquipo: 'Division Masculina'
            },
            {
                id: 6,
                name: 'Maria Mercado',
                edad: 20,
                Poscision: 'lorem lorem',
                dorsa: 11,
                inicioEnElClub: '21/09/2016',
                tipoDeEquipo: 'Division Femenina'
            }
        ];

        $scope.teamTypes = [
            {
                id: 1,
                name: 'Division Masculina'
            },
            {
                id : 2,
                name: 'Division Femenina'
            }
        ]
        
        $scope.showModalInfoPlayer = function (dataOfPlayers) {
            //alert('llega')
            $('#modal').openModal();
        }
    }
})();