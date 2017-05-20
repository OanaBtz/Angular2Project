import { Angular2ExamProjectPage } from './app.po';

describe('angular2-exam-project App', () => {
  let page: Angular2ExamProjectPage;

  beforeEach(() => {
    page = new Angular2ExamProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
