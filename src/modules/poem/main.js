"use strict";

import angular from "angular";
import controller from "./files/controller";

var Poem = angular.module("ngES6.poem", ["ui.router"]);

Poem.config([
  "$stateProvider", function(stateProvider) {
    stateProvider.state("poem", {
      url: "/poem",
      templateUrl: "/modules/poem/tmpl/poem.html",
      controller: controller
    });
  }
]);

Poem.controller("controller", controller);
