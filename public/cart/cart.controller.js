(function(){
	'use strict';

	var app = angular.module('main.cart', []);

	app.controller("CartController", CartController);

    function CartController($scope, $rootScope, cartService) {
    	
    	$scope.addToCart = function(product){
        	var quantity = this.quantity;
        	cartService.addProductToCart(product, quantity);
        }
        
        $scope.order = function(product){
           db.orders.insert(req.body, function(err, doc) {
   res.json(doc);
        })};
  
      
         $scope.orderConfirmation = function(cart){
            var name = this.name;
            var address = this.address;
            var city = this.city;
            var zipcode = this.zipcode;
            var phone = this.phone;
            var email = this.email;
            cartService.processToCheckout(name, address, city, zipcode, phone, email);
           
        }
        
        
    }
}());	

function CancellOrder(btn) {
  var row = btn.parentNode.parentNode;
  row.parentNode.removeChild(row);
}