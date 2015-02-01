# @shojib 

requirejs.config
  paths:
    angular: "../libs/angular/angular"
    jquery: "../libs/jquery/dist/jquery"
    framework7: "../libs/framework7/dist/js/framework7"
    ngCookies: "../libs/angular-cookies/angular-cookies"
    ngTranslate: "../libs/angular-translate/angular-translate"
    ngResource: "../libs/angular-resource/angular-resource"
    uiRouter: "../libs/angular-ui-router/release/angular-ui-router"
    ngAnimate: "../libs/angular-animate/angular-animate"
    ngTranslateLoader: "../libs/angular-translate-loader-url/angular-translate-loader-url"
    ngTranslateLoaderStaticFile: "../libs/angular-translate-loader-static-files/angular-translate-loader-static-files"
    ngTranslateStorageCookie: "../libs/angular-translate-storage-cookie/angular-translate-storage-cookie"
    ngTranslateStorageLocal: "../libs/angular-translate-storage-local/angular-translate-storage-local"

  useStrict: true

  shim:

    angular:
      exports: "angular"

    jquery:
      exports: "jquery"

    framework7:
      deps: ["jquery"]
      exports: "framework7"

    ngResource:
      deps: ["angular"]
      exports: "ngResource"

    ngAnimate:
      deps: ["angular"]
      exports: "ngAnimate"

    uiRouter:
      deps: ["angular"]
      exports: "uiRouter"

    ngTranslate:
      deps: ["angular"]
      exports: "ngTranslate"

    ngCookies:
      deps: ["angular"]
      exports: "ngCookies"

    ngTranslateLoader:
      deps: ["angular", "ngTranslate"]
      exports: "ngTranslateLoader"

    ngTranslateLoaderStaticFile:
      deps: ["angular", "ngTranslate"]
      exports: "ngTranslateLoaderStaticFile"

    ngTranslateStorageCookie:
      deps: ["angular", "ngTranslate"]
      exports: "ngTranslateStorageCookie"

    ngTranslateStorageLocal:
      deps: ["angular", "ngTranslate"]
      exports: "ngTranslateStorageLocal"

  priority: ["angular"]

requirejs [
  "angular"
  "ngGo"
  "ngAnimate"
  "ngTranslate"
  "ngTranslateLoader"
  "ngTranslateLoaderStaticFile"
  "ngTranslateStorageCookie"
  "ngTranslateStorageLocal"
  "ngCookies"
  "ngResource"
  "uiRouter"
], (angular, ngGo) ->

  "use strict"
  angular.bootstrap document, [ngGo["name"]]



