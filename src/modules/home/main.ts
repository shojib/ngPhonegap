import {Component, View} from 'angular2/core';
import {RouterLink, RouteConfig} from 'angular2/router';

@Component({ 
  selector: 'home'
})

@View({ 
	directives: [RouterLink],
	templateUrl: './modules/home/tmpl/home.html'
})

export class Home {}