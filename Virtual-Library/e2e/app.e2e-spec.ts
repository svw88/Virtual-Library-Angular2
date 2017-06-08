import { VirtualLibraryPage } from './app.po';

describe('virtual-library App', () => {
  let page: VirtualLibraryPage;

  beforeEach(() => {
    page = new VirtualLibraryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
