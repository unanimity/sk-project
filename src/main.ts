import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {AppModule} from './app/app.module';
import {environment} from './environments/environment';
import * as mixpanel from "mixpanel-browser";

mixpanel.init('777b5dfb6376ac74fd7475be8ee64426', {debug: false, track_pageview: true, persistence: 'localStorage'});

if (environment.production) {
  enableProdMode();
}


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
