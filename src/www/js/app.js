angular.module('App', ['ionic'])

.config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
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
  });
});
