# @shojib 

define [], () ->
  
  "use strict"
  
  # Directive function
  Directive = ->
    restrict: "E"
    templateUrl: "/modules/common/header/tmpl/header.html"


  # Return
  Directive
