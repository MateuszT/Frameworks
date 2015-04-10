

(function(){
	'use strict';

	var productsService = function($http){

		var getProducts = function (){
			return $http.get("/movieList2")
	        	.then(function (response){
	        		return response.data;
	        	});
		}

		var getmovietype = function (){
			return $http.get("/movieList2")
	        	.then(function (response){
	        		return response.data;
	        	});
		}
                
                var getProduct = function(name){
			return $http.get("/movieList2")
	        	.then(function (response){
	        		return findProduct(response.data, name);
	        	});
		}

		var findProduct = function(data, name){
			return data.filter(function(element){
				if(element.name === name){
					return element;
				}
			});
		}

		return {
			getProducts: getProducts,
                        getProduct: getProduct,
			getmovietype: getmovietype
		}
	}

	angular
		.module('main')
		.factory('productsService', productsService);
}());