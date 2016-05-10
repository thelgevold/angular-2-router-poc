export class Angular2RouterPocPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular-2-router-poc-app h1')).getText();
  }
}
