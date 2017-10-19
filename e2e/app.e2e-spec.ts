import { NgCashflowPage } from './app.po';

describe('ng-cashflow App', () => {
  let page: NgCashflowPage;

  beforeEach(() => {
    page = new NgCashflowPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
