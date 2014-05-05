# @shojib

define [], () ->

  "use strict"

  # Service
  Factory = (resource) ->
    resource "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=education&begin_date=20000101&end_date=20140214&sort=newest&fl=headline%2Clead_paragraph%2Cweb_url%2Cmultimedia%2Cpub_date&page=100&api-key=5445ED010346DB7AB31FC33E55049350%3A8%3A68807489",
      get:
        method: "GET"


  # Params injection
  Factory.$inject = ["$resource"]

  # Return
  Factory
