# @shojib 

define [], ->
  
  "use strict"
  
  # Controller function
  Ctrl = (scope, translate) ->
    scope.setLang = (langKey) ->
      translate.use langKey


  # Params injection
  Ctrl.$inject = ["$scope", "$translate"]
  
  # Return
  Ctrl
