import { AngularTodoList2.4Page } from './app.po';

describe('angular-todo-list2.4 App', () => {
  let page: AngularTodoList2.4Page;

  beforeEach(() => {
    page = new AngularTodoList2.4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
