# @shojib 

define [
  "angular"
  "common/footer/js/directive"
], (angular, directive) ->
  
  "use strict"
  
  # Module
  Footer = angular.module("ngPhonegap.footer", [])

  # Directive
  Footer.directive "footer", directive
  
  # Return
  Footer
