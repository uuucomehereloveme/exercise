function helloController($scope){
	$scope.person = {
		firstName:'Ramm',
		lastName:'Derek',
		fullName:function(){
		  return $scope.person.firstName + ' ' +$scope.person.lastName;
		}
	};
	$scope.hello = 'Hello World';
	$scope.show = function(){
		return $scope.hello + ' ' + $scope.person.fullName();
	}
}
function bookController($scope,$http){
	$http.get('books.json')
		.success(function(result){
			$scope.books = result;
		});
    $scope.getBy = function(bookId){
    	for(var i=0; i<$scope.books.length; i++){
    		if($scope.books[i].Id == bookId){
    			return $scope.books[i].Title;
    		}
    	}
    	return null;
    }
	
}
function testController($scope){
	$scope.msg = '图书列表';
	$scope.news = 'Test Controller';
}
function profileController($scope){
	$scope.profileTitle = 'User Profile';
}
function aboutController($scope,$routeParams){
	$scope.aboutTitle = 'About Me';
	$scope.name ='About ' + $routeParams.name;
}
function welcomeController($scope,$routeParams){
	$scope.username = $routeParams.username;
}
function taxController($scope){
	$scope.baseSalary = 8000;
	$scope.Pension = 20;
	$scope.medicalTreatment = 10;
	$scope.unemployment = 1;
	$scope.injury = 0.3;
	$scope.accumulationFund = 12;
	$scope.socialSecuritySum = function(){
		result = $scope.baseSalary*(parseFloat($scope.Pension)+parseFloat($scope.medicalTreatment)+parseFloat($scope.unemployment)+parseFloat($scope.injury)+parseFloat($scope.accumulationFund))/100;
		if(isNaN(result)){
			return '计算错误';
		}
	    return result;
	}
}