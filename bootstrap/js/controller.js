var app = angular.module("ToDo",[]);
app.controller("today",function($scope){
	$scope.list = ["Make a To-Do App","Call Raghav for doubts"];
});
app.controller("tommorow",function($scope){
	$scope.list = ["Make a To-Do App Tomorrow","Call Raghav tomorrow too"];
	$scope.func = function(){
		if($scope.input==true)
			$scope.input=false;
		else
			$scope.input=true;
		alert("hi");
	}
});
app.controller("week",function($scope){
	$scope.list = ["Make a To-Do App next week","Call Raghav next week"];
});
app.controller("someday",function($scope){
	$scope.list = ["Make a To-Do App Some Day","Call Raghav Some Day"];
});