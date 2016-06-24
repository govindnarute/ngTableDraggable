myApp.controller('tableController', [
		'$scope',
		'ngTableParams',
		'$filter',
		function($scope, ngTableParams, $filter) {
			$scope.header = "ngTable Dragable Example";

			$scope.students = [ {
				"id" : 1,
				"firstName" : "Govind",
				"lastName" : "Narute"
			}, {
				"id" : 2,
				"firstName" : "Bharat",
				"lastName" : "Kadam"
			}, {
				"id" : 3,
				"firstName" : "Raju",
				"lastName" : "Nichit"
			}, {
				"id" : 4,
				"firstName" : "Abhijit",
				"lastName" : "Katariya"
			} ];// end of array

			/*******************************************************************
			 * This method for simple showing table
			 * 
			 * @version 1.0
			 * @Author-Govind
			 * @created_date-
			 * @updated_date-
			 ******************************************************************/
			$scope.tableParams = new ngTableParams({
				page : 1, // show first page
				count : 10, // count per page

				sorting : {
					name : 'asc' // initial sorting
				}

			}, {
				// total : $scope.transactions.length, // length
				total : $scope.students.length, // length
				// of
				// data
				getData : function($defer, params) {
					$scope.data = params.sorting() ? $filter('orderBy')(
							$scope.students, params.orderBy())
							: $scope.students;
					$scope.data = params.filter() ? $filter('filter')(
							$scope.data, params.filter()) : $scope.data;
					$scope.data = $scope.data.slice((params.page() - 1)
							* params.count(), params.page() * params.count());
					params.total($scope.students.length);
					$defer.resolve($scope.data);
				}

			});

			/*******************************************************************
			 * This method for simple showing table
			 * 
			 * @version 1.0
			 * @Author-Govind
			 * @created_date-
			 * @updated_date-
			 ******************************************************************/
			$scope.tableParamsSortable = new ngTableParams({
				page : 1, // show first page
				count : 3, // count per page

				sorting : {
					name : 'asc' // initial sorting
				}

			}, {
				// total : $scope.transactions.length, // length
				total : $scope.students.length, // length
				// of
				// data
				getData : function($defer, params) {
					$scope.data = params.sorting() ? $filter('orderBy')(
							$scope.students, params.orderBy())
							: $scope.students;
					$scope.data = params.filter() ? $filter('filter')(
							$scope.data, params.filter()) : $scope.data;
					$scope.data = $scope.data.slice((params.page() - 1)
							* params.count(), params.page() * params.count());
					params.total($scope.students.length);
					$defer.resolve($scope.data);
				}

			});

		} ]);// end of controller
