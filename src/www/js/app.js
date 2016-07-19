var Momsmed = angular.module('App', ['ionic'])

Momsmed.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      controller: 'HomeCtrl',
      templateUrl: 'views/home/home.html'
    })
    .state('router', {
      url: '/router',
      templateUrl: 'views/router/router.html'
    })
    .state('result', {
      url: '/result',
      controller: 'ResultCtrl',
      templateUrl: 'views/result/result.html'
  });
  $urlRouterProvider.otherwise('/router');

});
 Momsmed.factory('Medname',function(){
   medname = {};
   medname.name='';
   return medname;
   
 });
Momsmed.controller('HomeCtrl',function($scope, Medname){
  $scope.input= Medname;
});
Momsmed.controller('ResultCtrl',function($scope, Medname){
  $scope.input= Medname;
})

/*.config( ['$compileProvider', function( $compileProvider ){
  $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|ftp|mailto|content):/);
  //$compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|geo):/);
}])*/

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  })
});
