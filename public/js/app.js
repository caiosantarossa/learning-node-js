angular.module('learning-node-js', ['ngRoute'])
    .config( ['$routeProvider', function($routeProvider) {
        $routeProvider
            .when('/home',                  {templateUrl: 'partials/home.html', controller: ContatosController})
            .when('/contatos/:id',          {templateUrl: 'partials/contato-form.html', controller: ContatoController})
            .when('/blank',                 {templateUrl: 'about:blank'})			            

            .otherwise({redirectTo: '/home'});
    }] )
    .filter('trim', function() {
        return function(s) {
        	if ( s == null ) return "";
        	if ( s.length < 100 ) return s;
        	var i = s.lastIndexOf( ' ', 90 )
            return s.substr( 0, i ) + " (...)";
        };
    });