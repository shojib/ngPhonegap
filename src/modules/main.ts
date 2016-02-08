import {enableProdMode, provide} from "angular2/core";
import 'libs/rxjs/add/operator/map';
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {bootstrap} from 'angular2/platform/browser';
import {Ng2Seed} from './ng2seed';

// enableProdMode();

bootstrap(Ng2Seed, [ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy})]);