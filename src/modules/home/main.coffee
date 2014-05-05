# @shojib

define ["angular"], (angular) ->

  "use strict";

  # Module
  Home = angular.module("ngGo.home", ["ui.router"])

  # Router
  Home.config ["$stateProvider", (state_provider) ->
    state_provider.state "home",
      url: "/home"
      templateUrl: "/modules/home/tmpl/home.html"
  ]


  # Return
  Home

  
