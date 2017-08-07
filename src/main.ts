import { enableProdMode } from '@angular/core';
import { bootstrapWorkerUi } from '@angular/platform-webworker';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// bootstrapWorkerUi('../webworker.bundle.js');

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
// console.log('Running JIT compiled');
platformBrowserDynamic().bootstrapModule(AppModule);
