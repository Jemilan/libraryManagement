import { browser, by, element, promise } from 'protractor';

export class AppPage {
  logout() {
    return element(by.css('app-login-component .logged'));
  }
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }
  loginPage(){
    return browser.get('/login');
  }
  login(){
    element(by.css('app-login-component .username')).sendKeys("admin")
    element(by.css('app-login-component .password')).sendKeys("s")
   element(by.css('app-login-component .btn-primary')).click() ;
    return element(by.css('app-message .errorMessage'))
  }
  error(){
    return element(by.css('app-message .errorMessage'))
  }
  getHeader(){
    return element(by.css('app-login-component .header')).getText() as Promise<string>
  }
  getTitleText() {
    return element(by.css('app-root .title')).getText() as Promise<string>;
  }
}
