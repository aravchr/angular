var productController = angular.module('productController',[]);

productController.controller('productListCtrl', ['$scope', '$http',function($scope, $http) {
	$http.get('products.json').success(function(data) {
		$scope.products = data;
	});

	//cart
	$scope.cartCount = 0;
	$scope.cartItems = [];
	$scope.showModal = false;
	$scope.addToCart = function(product){
		$scope.cartCount++;
		product.cart_id = $scope.cartCount;
		$scope.cartItems.push(product);
	};
	$scope.removeFromCart = function(index){
		console.log(index);
		if($scope.cartCount > 0){
			
			$scope.cartCount--;
			$scope.cartItems.splice(index,1);
		}
	};
}]);

