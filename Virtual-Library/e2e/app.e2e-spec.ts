import { VirtualLibraryPage } from './app.po';

describe('virtual-library App', () => {
  let page: VirtualLibraryPage;

  beforeEach(() => {
    page = new VirtualLibraryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo("/");
    expect(page.getParagraphText()).toEqual('Welcome To The Virtual Library');
  });

   it('should retrieve books', () => {
    page.navigateTo("/search/a");
    expect(page.getCount('bookListObject')).toEqual(5);
  });

   it('should retrieve single book', () => {
    page.navigateTo("/search/a");
    var h1 =  page.getFirstElement('h4').getAttribute('innerText');
    page.getFirstElement('bookListObject').click();
    expect(page.getFirstElement('h4').getAttribute('innerText')).toEqual(h1);

  });
  
  it('should retrieve favorites', () => {
    page.navigateTo("/favorites");
    expect(page.getCount('bookListObject')).toEqual(5);
  });

   it('should add favorites', () => {
    page.navigateTo("/search/a"); 
    page.getFirstElement('i').click();
    page.navigateTo("/favorites");   
    expect(page.getCount('bookListObject')).toEqual(6);
  });

   it('should remove favorites', () => {
    page.navigateTo("/search/a"); 
    page.getFirstElement('i').click();
    page.navigateTo("/favorites");   
    expect(page.getCount('bookListObject')).toEqual(5);
  });
  

});
