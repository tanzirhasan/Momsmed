angular.module('App')
    .controller('ResultCtrl', function ($scope, $http) {
        $scopeinfo=[];
        $http.get('https://api.fda.gov/drug/label.json')
            .success(function (response) {
                $scope.info.push(element)
            })
    });
