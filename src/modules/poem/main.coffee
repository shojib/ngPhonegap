# @shojib 

define [
  "angular"
  "poem/js/controller"
], (angular, controller) ->
  
  "use strict"
  
  # Module
  Poem = angular.module("ngPhonegap.poem", ["ui.router"])
  
  # Router configuration
  Poem.config ["$stateProvider", (state_provider) ->
    state_provider.state "poem",
      url: "/poem",
      templateUrl: "/modules/poem/tmpl/poem.html"
      controller: controller
  ]
  
  # Controller
  Poem.controller "controller", controller


  # Return
  Poem
