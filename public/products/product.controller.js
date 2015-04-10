(function(){

	var app = angular.module('main.product', []);

	app.controller("ProductController", ProductController);

		function ProductController($scope, productsService, $routeParams){
			var modelProduct = function(productArray){
				$scope.product = productArray[0];
			}

			productsService.getProduct($routeParams.name).then(modelProduct);
		}
})();