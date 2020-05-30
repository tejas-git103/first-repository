

var app=angular.module('MyApp', [] );
app.controller("myCtrl",function ($scope, $filter) {
 $scope.name = "";
 $scope.len = $scope.name.length;
 $scope.total = 0;
 $scope.lengthof = function () {
   $scope.len = $scope.name.length;
   var t = calc($scope.name);
   $scope.total = t;
 }

 function calc(string) {
   var total =0;
   for(var i=0;i<string.length;i++)
   {
     total = total + string.charCodeAt(i);
   }
   return total;
 }
 $scope.fun = function () {
   var var1 = $filter('uppercase');
   $scope.name=var1($scope.name);
  // $scope.name=$scope.name.toUpperCase();
 }
});
