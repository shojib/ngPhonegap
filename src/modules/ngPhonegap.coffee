# @shojib 

define [
  "angular"
  "common/main"
  "home/main"
  "poem/main"
  "article/main"
], (angular) ->
  
  "use strict"
  
  # Module
  ngPhonegap = angular.module("ngPhonegap", [
    "pascalprecht.translate"
    "ui.router"
    "ngAnimate"
    "ngPhonegap.common"
    "ngPhonegap.header"
    "ngPhonegap.footer" 
    "ngPhonegap.settings"
    "ngPhonegap.error"
    "ngPhonegap.home"
    "ngPhonegap.poem"
    "ngPhonegap.article"
  ])

  # Default configuraton
  ngPhonegap.config([
    "$urlRouterProvider"
    "$httpProvider"
    "$translateProvider" 
    "$logProvider"
    "$compileProvider"
    (urlRouterProvider, httpProvider, translateProvider, logProvider, compileProvider) ->

      httpProvider.defaults.headers.common['X-Requested-With'];
      httpProvider.defaults.headers.post['Content-type'];
      
      translateProvider.useStaticFilesLoader
        prefix: "./i18n/"
        suffix: ".json"
      translateProvider.preferredLanguage "en_US"
      
      urlRouterProvider.when "", "/home"
      urlRouterProvider.otherwise "/error/404"
      

      # Production mode
      # ================================================

      # Log
      logProvider.debugEnabled true 
      
      # Add debug info (if false unit tests will fail)
      compileProvider.debugInfoEnabled false
      
      # Cluster possible http calls together
      httpProvider.useApplyAsync false

      # ================================================

  ])

  # Default runtime
  ngPhonegap.run(["$rootScope", (rootScope) ->
    rootScope.licenseYear = 2015
  ])
  
  
  # Return
  ngPhonegap
