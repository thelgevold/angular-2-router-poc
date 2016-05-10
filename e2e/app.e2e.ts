import { Angular2RouterPocPage } from './app.po';

describe('angular-2-router-poc App', function() {
  let page: Angular2RouterPocPage;

  beforeEach(() => {
    page = new Angular2RouterPocPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angular-2-router-poc works!');
  });
});
