import {Component, View} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Header} from './common/header/main';
import {Footer} from './common/footer/main';
import {Home} from './home/main';
import {Article} from './article/main';
import {SpeedTest} from './speedtest/main';

@Component({ 
    selector: 'ng2seed'
})

@View({ 
	directives: [Header, Footer, Article, ROUTER_DIRECTIVES],
	template: `
		<header-widget>header...</header-widget>
        <div class="wrapper">
		  <router-outlet></router-outlet>
        </div>
		<footer-widget>footer...</footer-widget>
		<br/><br/>
	`
})

@RouteConfig([
	{ path: '/', component: Home, name: 'Home' },
	{ path: '/article', component: Article, name: 'Article'},
    { path: '/speedtest/...', component: SpeedTest, name: 'SpeedTest' },
	{ path: '/error', component: Error, name: 'Error' }
])

export class Ng2Seed {}

