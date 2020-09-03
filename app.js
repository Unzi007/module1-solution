(function () {
'use strict';


angular.module('lunchChecker', [])

.controller('lunchCheckController', lunchCheckController);

lunchCheckController.$inject = ['$scope'];
function lunchCheckController($scope) {
  $scope.items = "";
  $scope.message = "";
  $scope.display = function () {
    var totalCount = calculateCounting($scope.items);
    if ($scope.items === "") {
      $scope.message = "No items are listed!! Please Enter data first";
    }
    else if (totalCount <= 3) {
      $scope.message = "Enjoy!!";
    }
    else {
      $scope.message = "Too Much!!";
    }
  };

function calculateCounting(string) {
  var arr = string.split(",");
  return arr.length;
}


}

})();
