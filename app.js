/* App Module */

var ecommApp = angular.module('productEcomApp', [
  'ngRoute',
  'productController'
]);

ecommApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'views/product-list.html',
        controller: 'productListCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);