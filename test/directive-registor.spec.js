import DirectiveRegister from '../src/directive-register.js';

describe('Directive register', function() {
  var directiveRegister = new DirectiveRegister();

  it("Should add and get a validator to a list", function() {
    directiveRegister.register({});
    var list = directiveRegister.getList();
    expect(list.length).toBe(1);
  });
});
