bestway.controller("EarningsController", ['$scope', function($scope) {
	$scope.results = {
			earnings: 0.00,
			overtime: 0.00,
			total: 0.00
		};
	
	var myAmount;
	var myEarnings;

	var CalculateAmount = function(totalAmount, totalHours, overTime) {
		this.totalAmount = totalAmount;
		this.totalHours = totalHours;
		this.overTime = overTime;
		var timeToHours, 
			timeToHoursByTwo,
			multiplyByOt,
			addTotAmount;

		this.calculateEarnings = function() {
			timeToHours = this.totalAmount/this.totalHours;
			Math.ceil(timeToHours);

			timeToHoursByTwo = timeToHours/2;
			Math.ceil(timeToHoursByTwo);

			//NEED TO SET OVERTIME TO 0 IF INITIAL OR SUBSEQUENT ENTRIES ARE BLANK
			if(this.overTime === "" || this.overTime === undefined) {
				this.overTime = 0;
			}

			multiplyByOt = timeToHoursByTwo * this.overTime;
			Math.ceil(multiplyByOt);

			addTotAmount = parseFloat(multiplyByOt + parseFloat(this.totalAmount)).toFixed(2);
			
			//console.log("earnings " + addTotAmount);
			$scope.results.earnings = addTotAmount;
			$scope.results.overtime = parseFloat(multiplyByOt).toFixed(2);
		}
	}

	$scope.calculateEarnings = function() {
		if($scope.payrole.$valid) {
			myAmount = new CalculateAmount($scope.totalAmount, $scope.totalHours, $scope.overTime);
			myEarnings = myAmount.calculateEarnings();
			//Clear input fields
			$scope.totalAmount = '';
			$scope.totalHours = '';
			$scope.overTime = '';
			$scope.payrole.$setPristine(true);
		}
		


	};

	
}]);