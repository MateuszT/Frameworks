var myApp = angular.module('myApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
console.log("Hello World from controller");




                           
                       
                        
         


var refresh = function(){
$http.get('/movieList2').success(function(response){
    console.log("I've got some data");
    $scope.movieList2 = response;
    $scope.list = "";

});
};

refresh();

$scope.addList = function() {
   console.log($scope.list);
   $http.post('/movieList2', $scope.list).success(function(response) {
   console.log(response);
   
refresh();
   });
};


$scope.remove = function(id) {
   console.log(id);
   $http.delete('/movieList2/' + id).success(function(response) {
       
refresh();
   });
};


$scope.edit = function(id) {
   console.log(id);
   $http.get('/movieList2/' + id).success(function(response) {
   $scope.list = response;
   });
}; 

$scope.update = function() {
console.log($scope.list._id);
$http.put('/movieList2/' + $scope.list._id, $scope.list).success(function(response) {
refresh();
})
};

$scope.deselect = function() {
$scope.list = "";
}

}]);