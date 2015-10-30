(function(){
	"use strict";

	angular.module('<%= package_name_cc %>.config').config( function(RestangularProvider) {
		RestangularProvider
		.setBaseUrl('/api/')
		.setDefaultHeaders({ accept: "application/x.laravel.v1+json" });
	});

})();
