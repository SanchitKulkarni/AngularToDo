var app = angular.module("ToDo",[]);
app.controller("today",function($scope){
	$scope.list = ["Make a To-Do App","Call Raghav for doubts"];
	$scope.func = function(){
		$scope.input = !$scope.input;
	}
});
app.controller("tommorow",function($scope){
	$scope.list = ["Make a To-Do App Tomorrow","Call Raghav tomorrow too"];
});
app.controller("week",function($scope){
	$scope.list = ["Make a To-Do App next week","Call Raghav next week"];
});
app.controller("someday",function($scope){
	$scope.list = ["Make a To-Do App Some Day","Call Raghav Some Day"];
});