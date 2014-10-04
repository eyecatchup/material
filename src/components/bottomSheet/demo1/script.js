angular.module('bottomSheetDemo1', ['ngMaterial'])

.controller('BottomSheetExample', function($scope, $timeout, $materialBottomSheet) {
  $scope.listBottomSheet = function() {
    $materialBottomSheet.show({
      templateUrl: 'bottom-sheet-template.html',
      controller: 'BottomSheetListCtrl'
    }).then(function(clickedItem) {
      alert(clickedItem.name + ' clicked!');
    });
  };
})

.controller('BottomSheetListCtrl', function($scope, $materialBottomSheet) {

  $scope.items = [
    { name: 'Toggle Visibility', icon: 'visibility' },
    { name: 'Reload', icon: 'refresh' },
    { name: 'Find Users', icon: 'people' },
    { name: 'Something New', icon: 'insert_drive_file' },
  ];

  $scope.listItemClick = function($index) {
    var clickedItem = $scope.items[$index];
    $materialBottomSheet.hide(clickedItem);
  };
});
