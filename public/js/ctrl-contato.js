function ContatosController($scope, $http, $location) {
	$scope.list = function() {
		$http.get( "contatos" ).then( function(response) { $scope.contatos = response.data } );
	}	
	$scope.list();

	$scope.selContato = function(selectedContato) {
		$scope.contato = selectedContato;
		$("#popConfirmDel").modal('show');
	}

	$scope.delete = function() {
		var successCallback = function(result) {
			$("#popConfirmDel").modal('hide');
			$scope.list();
		}

		var errorCallback = function(result) {
			
		}

		$http.delete("contatos/" + $scope.contato._id ).then( successCallback, errorCallback );
	}
}
	

function ContatoController($scope, $routeParams, $http, $location) {
	
	var id = $routeParams.id;
	if ( id == "new" ) {
		$scope.contato = {};
	} else {
		$http.get( "contatos/" + id ).then( function(response) { $scope.contato = response.data } );		
	}

	$scope.save = function() {		
		var successCallback = function(result) {
			$location.path("/contatos");	
		}
		
		var errorCallback = function(result) {
			
		} 
		
		if ($scope.userForm.$valid) {
			if ( $scope.contato._id == null ) {
				$http.post( "contatos", $scope.contato ).then( successCallback, errorCallback );	
			} else {
				$http.put( "contatos/" + $scope.contato._id, $scope.contato ).then( successCallback, errorCallback );	
			}			
		}		
	}
}
