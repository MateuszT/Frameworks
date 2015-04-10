        (function(){
                'use strict';

               var app = angular.module('main', ['main.products', 'main.product', 'main.cart', 'ngRoute'])
                
                app.config(function ($routeProvider) {
		$routeProvider
			.when('/product/:name', {
				templateUrl: 'products/product.html',
				controller: 'ProductController'
			})
			.when('/products', {
				templateUrl: 'products/products.html',
				controller: 'ProductsController'
			})
			.when('/checkout', {
				templateUrl: 'cart/checkout.html',
				controller: 'CartController'
			})
			.when('/confirm', {
				templateUrl: 'cart/confirmation.html',
				controller: 'CartController'
			})
			.otherwise({ redirectTo: '/products' });
	})
                           
                        .run(function($rootScope){
                                $rootScope.cartProducts = {};
                        })
                        
                 app.run(function($rootScope){
		$rootScope.cart = {};
		$rootScope.order = {};
		$rootScope.cartCount = 0;
	})       
                       
        
        }());
        
     