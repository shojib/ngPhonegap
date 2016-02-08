import {Component, View} from 'angular2/core';
import {RouterLink, RouteConfig} from 'angular2/router';

@Component({ 
  selector: 'header-widget'
})

@View({
	directives: [RouterLink],
	templateUrl: './modules/common/header/tmpl/header.html'
})

export class Header {}

