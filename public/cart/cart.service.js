(function(){
	'use strict';

	var cartService  = function($http, $rootScope){
		var addProductToCart = function(product, quantity){
			$rootScope.cartProducts[product.name] = {
				product: product,
				quantity: quantity
			}
                        
                        $rootScope.cartCount += quantity;
		}







		var processOrder = function(name, address, city, zip, phone, email){
			$rootScope.order["orderInfo"] = {
				"Customer": 
					{"Name": name,
					 "Address":address,
                                         "City": city,
					 "Zip": zip,
					 "Phone": phone, 
					 "Email": email},
				"Products": $rootScope.cart
			}
			
		}

		return {
			addProductToCart: addProductToCart,
			processOrder: processOrder
		}

	}


	angular
		.module('main')
		.factory('cartService', cartService);
}());

function CancellOrder(btn) {
  var row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
}