angular.module("digestApp",[])
.controller("controller",controller);


controller.$project =['$scope'];
function controller($scope) {

  $scope.count = 0;
  $scope.count2 = 0;
  $scope.pluscount = function () {
    $scope.count++;
    console.log("++(pluscount)");

  }

  $scope.pluscount2 = function () {

    setTimeout(function () {
      $scope.count2++;
      console.log("++(pluscount2)");
  //   $scope.$digest(); this will explicitly call digest so changes are made like normal call
   },1000);
  }
}
