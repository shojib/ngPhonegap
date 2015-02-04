# @shojib 

define [
  "angular"
  "common/header/js/directive"
], (angular, directive) ->
  
  "use strict"
  
  # Module
  Header = angular.module("ngPhonegap.header", [])

  # Directive
  Header.directive "header", directive
  
  # Return
  Header
