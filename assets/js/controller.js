var app= angular.module('mainApp',[]);
app.controller('details',function($scope,$http){
	$scope.clickme =function(){
		$http.get('http://52.37.155.102:7777/register/'+' $scope.name'+'/suraj@krispypapad.com/+918277685500/web')
.success(function (data) {
$scope.api_data = data;
$scope.status=data.status;
console.log($scope.status);
console.log($scope.name);
})
.error(function (data) {
$scope.errorMessage = "Error Message : " + status;
});
	}
});