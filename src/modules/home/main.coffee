# @shojib

define ["angular"], (angular) ->

  "use strict";

  # Module
  Home = angular.module("ngPhonegap.home", ["ui.router"])

  # Router
  Home.config ["$stateProvider", (stateProvider) ->
    stateProvider.state "home",
      url: "/home"
      templateUrl: "modules/home/tmpl/home.html"
  ]


  # Return
  Home

  
