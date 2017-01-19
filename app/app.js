angular.module('myApp', [])
.controller('mainCtrl',['$scope' ,function($scope){
	
	$scope.todoList = [];
	$scope.sortType = '';

	$scope.addTodo = function(index) {
		$scope.todoList.push({todo: $scope.newTodo, class: $scope.priority}); 
		$scope.newTodo = '';
	};//close addTodo

}])//close controller

