import { Ng2CliVanillaPage } from './app.po';

describe('ng2-cli-vanilla App', function() {
  let page: Ng2CliVanillaPage;

  beforeEach(() => {
    page = new Ng2CliVanillaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
