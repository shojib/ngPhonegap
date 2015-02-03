# @shojib

define [], () ->

  "use strict";

  # Controller
  Ctrl = (scope, service) ->

    # Default search query
    scope.search_query = "Technology"
    
    # Find articles
    scope.find_articles = (event) ->
      if event.which == 13 || event == ''

        # Find articles
        service.find_articles(scope.search_query).then((response) ->
          scope.articles = response
        )


  # Params injection
  Ctrl.$inject = [
    "$scope"
    "service"
  ]

  # Return
  Ctrl

