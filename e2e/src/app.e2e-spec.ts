import { AppPage } from './app.po';
import { browser, logging, element, promise } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;
  let password={
    userName:"wrong",
    password:"wtond"
  }

  let  http=require('protractor-http-client');
  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('libraryManagement');
  });
  it('should display loginPage',()=>{
    page.loginPage();
    
    expect(page.getHeader()).toContain('Login')
    expect(page.login(password));
    expect(page.logout()).toBeTruthy('The logout button should appear')
    expect(page.getHeader()).toContain('Login')
  })
  it('The Login should work',()=>{
    page.loginPage()
    page.login()
    expect(page.logout()).toBeTruthy('The logout button should appear')
    expect(page.search()).toBeTruthy('search')
    expect(page.approvelPage()).toBeTruthy('Approvel');
  })
  it('The search Book Should work',()=>{
    expect(page.search()).toBeTruthy('search');
  });
  
  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
