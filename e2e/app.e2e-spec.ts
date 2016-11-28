import { FedExUILocalPage } from './app.po';

describe('fed-ex-ui-local App', function() {
  let page: FedExUILocalPage;

  beforeEach(() => {
    page = new FedExUILocalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
