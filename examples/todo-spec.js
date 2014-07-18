describe('angularjs homepage todo list', function() {
  it('should add a todo', function() {
    browser.get('http://www.angularjs.org');

    var addTodo = element(by.model('todoText'));
    var addButton = element(by.css('[value="add"]'));

    addTodo.sendKeys('write a protractor test');
    addButton.click();

    expect(todoList.count()).toEqual(3);
    expect(todoList.get(2).getText()).toEqual('write a protractor test');
  });
});
