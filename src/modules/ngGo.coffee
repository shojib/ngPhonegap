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
    (urlRouterProvider, httpProvider, translateProvider, logProvider) ->

      httpProvider.defaults.headers.common['X-Requested-With'];
      httpProvider.defaults.headers.post['Content-type'];
      
      translateProvider.useStaticFilesLoader
        prefix: "../i18n/"
        suffix: ".json"
      translateProvider.preferredLanguage "en_US"
      
      urlRouterProvider.when "", "/home"
      urlRouterProvider.otherwise "/error/404"

      logProvider.debugEnabled true

  ])

  # Default runtime
  ngGo.run ->
  
  
  # Return
  ngGo
