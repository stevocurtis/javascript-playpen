import { SubnetValidatorPage } from './app.po';

describe('subnet-validator App', () => {
  let page: SubnetValidatorPage;

  beforeEach(() => {
    page = new SubnetValidatorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
