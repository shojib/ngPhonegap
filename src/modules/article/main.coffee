# @shojib

define [
  "angular"
  "article/js/factory"
  "article/js/service"
  "article/js/controller"
], (angular, factory, service, controller) ->

  "use strict";

  # Module
  Article = angular.module("ngPhonegap.article", [
    "ui.router"
    "ngAnimate"
    "ngResource"
  ])

  # Router
  Article.config ["$stateProvider", (state_provider) ->
    state_provider.state "article",
      resolve: 
        service: "service"
      url: "/article"
      templateUrl: "/modules/article/tmpl/article.html"
      controller: controller
  ]

  # Factory
  Article.factory "factory", factory

  # Service
  Article.service "service", service
  
  # Controller
  Article.controller "controller", controller


  # Return
  Article

  
