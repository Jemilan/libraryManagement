import { browser, by, element, promise } from 'protractor';
import {ResponsePromise} from 'protractor-helpers'

export class AppPage {
  credentials={
    userName:"admin",
    password:"admin"
  };
  search(): any {
    browser.get('/searchBook')
    return element(by.css('search'));
  }
  approvelPage() {
    browser.get('/admin/approvel')
    return element(by.css('lendDetail'));
  }
  
  logout() {
    return element(by.css('.logged'));
  }
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }
  loginPage(){
    return browser.get('/login');
  }
  login(credentials:any=this.credentials){
    element(by.css('app-login-component .username')).sendKeys(credentials.userName)
    element(by.css('app-login-component .password')).sendKeys(credentials.password)
    element(by.css('app-login-component .btn-primary')).click() ;
    return;
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
