# @shojib

define [], () ->

  "use strict"

  # Model
  Service = (factory) ->
    
    # Get articles
    find_articles: (query) ->
      factory.get(q:query).$promise


  # Params injection
  Service.$inject = ["factory"]

  # Return
  Service