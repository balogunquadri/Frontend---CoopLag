


	var app = angluar.module('myApp', []);

	app.controller('ctrl', function($scope){

		$scope.name = "Achawayne";

	});



	app.directive('myAppIs', function(){

		return {

			template: "<h3>Hello world</h3>"
		}
	});







	









