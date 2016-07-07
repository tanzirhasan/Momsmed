(function(){
 var app = angular.module('starter', ['ionic'])
 app.controller('MomsCtrl',function ($http,$scope) {
   $scopeinfo=[];
   $http.get('https://api.fda.gov/drug/label.json')
       .success(function (response) {
         $scope.info.push(element)
           }

       )

 });

  app.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })
}());