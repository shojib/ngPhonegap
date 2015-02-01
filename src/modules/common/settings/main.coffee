# @shojib 

define [
  "angular"
  "common/settings/js/directive"
], (angular, directive) ->
  
  "use strict"
  
  # Module
  Settings = angular.module("ngGo.settings", [])

  # Directive
  Settings.directive "settings", directive
  
  # Return
  Settings
