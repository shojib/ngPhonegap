# @shojib 

define ["angular"], (angular) ->
  
  "use strict"
  
  # Module
  Error = angular.module("ngGo.error", ["ui.router"])

  # Router configuration
  Error.config ["$stateProvider", (state_provider) ->
    state_provider.state "error404",
      url: "/error/404"
      templateUrl: "/modules/common/error/tmpl/404.html"
  ]
  
  # Return
  Error
