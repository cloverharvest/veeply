// This will be picked up by the asset pipeline
var app = angular.module('customers', ['ngRoute', 'templates']);

app.config([
          "$routeProvider",
  function($routeProvider) {

    // configure our routes here...

    $routeProvider.when("/", {
      controller: "CustomerSearchController",
      templateUrl: "customer_search.html"
    });
  }
]);

app.controller("CustomerSearchController", [
        "$scope","$http",
  function($scope, $http) {
    var page = 0;
    $scope.customers = [];
    $scope.search = function(searchTerm) {
      $scope.loading = true;
      if( searchTerm.length < 3) {
        return;
      }

      $http.get("/customers.json",
            { "params": { "keywords":searchTerm, "page":page } }
      ).success(
        function(data,status,headers,config) {
        $scope.customers = data;
        $scope.loading = false;
      }).error(
        function(data,status,headers,config) {
        alert("There was a problem: " + status);
      });
   };

   $scope.previousPage = function() {
     if (page > 0) {
       page = page - 1;
       $scope.search($scope.keywords);
     }
   };
   $scope.nextPage = function() {
     page = page + 1;
     $scope.search($scope.keywords);
   };
  }
]);
