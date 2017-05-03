import { MusinePage } from './app.po';

describe('musine App', () => {
  let page: MusinePage;

  beforeEach(() => {
    page = new MusinePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
