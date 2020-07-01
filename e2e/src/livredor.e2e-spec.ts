import { browser, element, logging, by } from 'protractor';
import { livredor } from './livredor.po';


describe('Test ajout de message', () => {

  // POUR TESTER L'AJOUT DUN MESSAGE
  it('L\'utilisateur peut ajouter un message"', () => {
    element.all(by.id('listPlanets')).then(totalRows => {
      this.nbPlanete = totalRows.length;
      browser.get('/livre/add');
      page.completeForm();
      page.sleep();

      element(by.id('submitterPlanet')).click();
      element.all(by.id('listPlanets')).then(totalRows => {
        page.sleep();
        expect(this.nbPlanete + 1).toEqual(totalRows.length);
      });
    })
  })
})
