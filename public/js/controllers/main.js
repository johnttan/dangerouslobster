angular.module('cleaver.controllers', [])

.controller('MainController', function($scope, $state, Rec) {
  angular.extend($scope, Rec);
  $scope.formatUndo = function(){
    if($scope.lastVeto){
      if($scope.lastVeto.key === 'category'){
        return $scope.lastVeto.val;
      }else{
        var results = [];
        var splitUp = $scope.lastVeto.val.split('-');
        splitUp.forEach(function(el){
          results.push(el.charAt(0).toUpperCase() + el.slice(1));
        })
        return results.join(' ');
      }
    }
  };

  $scope.vetoRestaurant = function(restaurantID){
    Rec.vetoRestaurant(restaurantID);
    $scope.lastVeto = {
      key: 'id',
      val: restaurantID
    }
  };

  $scope.vetoCategory = function(category){
    Rec.vetoCategory(category);
    $scope.lastVeto = {
      key: 'category',
      val: category
    }
  };

  //TODO: clear input box on enter
  $scope.enter = function(keyEvent, location) {
    if (location && keyEvent.which === 13) {
      $scope.postLocation(location);
    }
  };

});
