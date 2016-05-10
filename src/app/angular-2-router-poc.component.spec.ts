import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Angular2RouterPocAppComponent } from '../app/angular-2-router-poc.component';

beforeEachProviders(() => [Angular2RouterPocAppComponent]);

describe('App: Angular2RouterPoc', () => {
  it('should create the app',
      inject([Angular2RouterPocAppComponent], (app: Angular2RouterPocAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'angular-2-router-poc works!\'',
      inject([Angular2RouterPocAppComponent], (app: Angular2RouterPocAppComponent) => {
    expect(app.title).toEqual('angular-2-router-poc works!');
  }));
});
