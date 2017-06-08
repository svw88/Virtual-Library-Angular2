import { browser, by, element } from 'protractor';

export class VirtualLibraryPage {
  navigateTo(url) {
    return browser.get(url);
  }

  getParagraphText() {
    return element(by.css('h1')).getText();
  }
  
  getCount(elementType) {
  return element.all(by.css(elementType)).count();
  }

  getFirstElement(elementType) {
   return element(by.css(elementType));
  }
}
