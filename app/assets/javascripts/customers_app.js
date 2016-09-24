// This will be picked up by the asset pipeline
var app = angular.module('customers', [ ]);

app.controller("CustomerSearchController", [
        "$scope",
  function($scope) {
    $scope.customers = [];
    $scope.search = function(searchTerm) {
      $scope.customers = [
        {
          "first_name":"Schwab",
          "last_name":"Anna",
          "email":"anna@schwab.net",
          "username":"annas",
          "created_at":"2016-09-23",
        },
        {
          "first_name":"Sony",
          "last_name":"Seiko",
          "email":"sony@seiko.com",
          "username":"sonys",
          "created_at":"2016-09-23",
        },
        {
          "first_name":"Toshiba",
          "last_name":"Holmes",
          "email":"toshiba@homes.com",
          "username":"toshibah",
          "created_at":"2016-09-23",
        }
      ]
      
    }
  }
]);
