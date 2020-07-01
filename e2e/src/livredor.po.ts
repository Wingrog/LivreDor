import { browser, by, element } from 'protractor';


export class LivredorPage {

  sleep() {
    browser.driver.sleep(5000);
  }

  completeForm() {
    let titre = element.all(by.id('titre'));
    let description = element.all(by.id('description'));
    let image = element.all(by.id('test'));

    titre.sendKeys('poiuytreza');
    description.sendKeys('jfjdfjf');
    image.sendKeys('hjkfhjk');
  }
}
