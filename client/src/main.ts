/// <reference types="@angular/localize" />

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import '@assecosolutions/fox-card';
import '@assecosolutions/fox-text';
import '@assecosolutions/fox-button';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
