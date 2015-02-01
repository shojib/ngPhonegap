# @shojib 

define [], () ->
  
  "use strict"
  
  # Directive function
  Directive = ->
    restrict: "E"
    replace: true
    templateUrl: "/modules/common/header/tmpl/header.html"


  # Return
  Directive
