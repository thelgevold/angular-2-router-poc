import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { Angular2RouterPocAppComponent, environment } from './app/';
import { HTTP_PROVIDERS} from '@angular/http';
import { ROUTER_PROVIDERS } from '@angular/router';

import 'rxjs/add/operator/map';		

if (environment.production) {
  enableProdMode();
}

bootstrap(Angular2RouterPocAppComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS]);
