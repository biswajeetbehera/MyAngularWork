import { MyFirstAngularPage } from './app.po';

describe('my-first-angular App', function() {
  let page: MyFirstAngularPage;

  beforeEach(() => {
    page = new MyFirstAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
