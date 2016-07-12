angular.module('App')
    .controller('ResultCtrl', function ($scope, $http, $ionicLoading) {
        $ionicLoading.show();

        // var url = 'https://api.fda.gov/drug/label.json:'
        var   med ='?search=amlodipin'
        $http.get('/api/drugs' + med)
            .success(function (medinfo) {
                $scope.medinfo = medinfo;
                console.log($scope.medinfo.results[0].pregnancy[0].indexOf('Category'))
            })
        $ionicLoading.hide();
    });
