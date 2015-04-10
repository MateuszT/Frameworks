                    (function(){
                    'use strict';

                    var app = angular.module('main.products', []);

                    app.controller("ProductsController", ProductsController);

                        function ProductsController($scope, productsService) {

                            $scope.movietypesSelected = new Array();

                            var modelProducts = function(data){
                                    $scope.products = data;
                            }

                            productsService.getProducts()
                                    .then(modelProducts);

                            var modelmovietypes = function(data){
                                    $scope.movietypes = data;
                            }

                            productsService.getmovietype()
                                    .then(modelmovietypes);

                            

                            $scope.movietypeFilter = function(product){
                                    if($scope.movietypesSelected.length > 0){
                                            if($scope.movietypesSelected.indexOf(product.movietype) < 0){
                                                    return;
                                            }
                                    }
                                    
                                    
                                    $scope.movietypeChange = function(movietype){
                                    var i = $scope.movietypesSelected.indexOf(movietype);
                                    if(i > -1){
                                            $scope.movietypesSelected.splice(i, 1);
                                    }
                                    else {
                                            $scope.movietypesSelected.push(movietype);
                                    }
                            }
                                    return product;
                            }
                            
                            $scope.$watch('showCart', function(){
			    $scope.cartText = $scope.showCart ? 'Hide cart' : 'Show cart';
			})
                        }
            }());