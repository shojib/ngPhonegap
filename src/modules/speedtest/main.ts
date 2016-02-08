import {Component, View, OnInit, Inject} from 'angular2/core';
import {RouteConfig, RouterOutlet} from 'angular2/router';
import {NgModel} from 'angular2/common';
import {AngularService} from './files/angular_service';
import {AngularSpeedTest} from './files/angular_directive';

@Component({
    selector: 'speedtest'
})

@View({
    directives: [RouterOutlet, NgModel],
    template: `
        <h4>SpeedTest</h4>
        <router-outlet></router-outlet>
    `
})

@RouteConfig([
	{ 
        path: '/angular/1', 
        component: AngularSpeedTest, 
        name: 'AngularSpeedTest',
        useAsDefault: true 
    }
])
 
export class SpeedTest {
    private searchQuery: String;
    private articles: any;
    private errorMessage: any;

    ngOnInit() {
    }
}

