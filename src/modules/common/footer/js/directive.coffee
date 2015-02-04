# @shojib 

define [], () ->

	"use strict"

	# Directive function
	Directive = (log, rootScope) ->
		restrict: "E"
		replace: true
		templateUrl: "modules/common/footer/tmpl/footer.html"
		controller: ["$scope", (scope) ->
			scope.licenseYear = rootScope.licenseYear
			log.debug scope.licenseYear
		]


	# Injector
	Directive.$inject = ["$log", "$rootScope"]

	# Return
	Directive
