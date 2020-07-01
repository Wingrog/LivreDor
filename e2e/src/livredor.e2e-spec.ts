import { browser, element, logging, by } from 'protractor';
import { LivredorPage } from './livredor.po';


describe('Test ajout de message', () => {


  let page: LivredorPage;
  let nbMessage: number;


  // POUR TESTER L'AJOUT DUN MESSAGE
  it('L\'utilisateur peut ajouter un message"', () => {
    element.all(by.id('listMessages')).then(totalRows => {
      this.nbMessage = totalRows.length;
      browser.get('/livre/add');
      page.completeForm();
      page.sleep();

      element(by.id('submitterMessage')).click();
      element.all(by.id('listMessages')).then(totalRows => {
        page.sleep();
        expect(this.nbMessage + 1).toEqual(totalRows.length);
      });
    })
  })
});
