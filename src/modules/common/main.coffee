# @shojib 

define [
  "angular"
  "common/settings/main"
  "common/header/main"
  "common/footer/main"
  "common/error/main"
], (angular) ->
  
  "use strict"
  
  # Module
  Common = angular.module("ngPhonegap.common", [])
  
  
  # Return
  Common
