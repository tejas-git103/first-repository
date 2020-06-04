angular.module("Shopping-app",[])
.controller("Shopping-list",shoppingCtrl);

shoppingCtrl.$project = ['$scope'];
function shoppingCtrl($scope) {
  $scope.Name;
  $scope.flag1 = 0;
  $scope.Quantity;
//  console.log($scope.Quantity);
  $scope.list =[{
    Name : "item 1" ,
    Quantity : 3
  },
  {
    Name : "item 2" ,
    Quantity : 323
  },
  {
    Name : "item 3" ,
    Quantity : 2433
  },
  {
    Name : "item 4" ,
    Quantity : 678
  },
  {
    Name : "item 5" ,
    Quantity : 343
  }];

  $scope.add = function () {
    var item ={
      Name : $scope.Name ,
      Quantity :$scope.Quantity
    };
  //  console.log(item.Quantity);
    console.log();
    if((item.Quantity !== "" && item.Name !== "") && (item.Quantity !== undefined && item.Name !== undefined))
    {
        $scope.list.push(item);
    }

  }
  $scope.remove =function (index) {
    $scope.list.splice(index,1);
    $scope.flag1=1;
  }
}
