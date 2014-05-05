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
    ($urlRouterProvider, $httpProvider, $translateProvider) ->
      
      $translateProvider.useStaticFilesLoader
        prefix: "../i18n/"
        suffix: ".json"
      $translateProvider.preferredLanguage "en_US"
      
      $urlRouterProvider.when "", "/home"
      $urlRouterProvider.otherwise "/error/404"

  ])

  # Default runtime
  ngGo.run(["$rootScope", ($rootScope) ->

  ])
  
  # Return
  ngGo
