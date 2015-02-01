# @shojib 

define [], () ->

	"use strict"

	# Directive function
	Directive = (log, state) ->
		restrict: "E"
		scope: 
			subtitle: "@"
		replace: true
		templateUrl: "/modules/common/header/tmpl/header.html"
		controller: ["$scope", (scope) ->
			scope.isHome = state.is("home")
			log.debug scope.isHome
		]


	# Injector
	Directive.$inject = ["$log", "$state"]

	# Return
	Directive
