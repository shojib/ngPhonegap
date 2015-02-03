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
  ngGo = angular.module("ngGo", [
    "pascalprecht.translate"
    "ui.router"
    "ngAnimate"
    "ngGo.common"
    "ngGo.header"
    "ngGo.footer" 
    "ngGo.settings"
    "ngGo.error"
    "ngGo.home"
    "ngGo.poem"
    "ngGo.article"
  ])

  # Default configuraton
  ngGo.config([
    "$urlRouterProvider"
    "$httpProvider"
    "$translateProvider" 
    "$logProvider"
    "$compileProvider"
    (urlRouterProvider, httpProvider, translateProvider, logProvider, compileProvider) ->

      httpProvider.defaults.headers.common['X-Requested-With'];
      httpProvider.defaults.headers.post['Content-type'];
      
      translateProvider.useStaticFilesLoader
        prefix: "../i18n/"
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
      httpProvider.useApplyAsync true

      # ================================================

  ])

  # Default runtime
  ngGo.run(["$rootScope", (rootScope) ->
    rootScope.licenseYear = 2015
  ])
  
  
  # Return
  ngGo
