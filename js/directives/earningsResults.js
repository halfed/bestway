bestway.directive('erningsResults', function() {
	return {
		restrict: 'E',
		scope: {
			info: '='
		},
		templateUrl: '../js/directives/earningResults.html'
	};
});