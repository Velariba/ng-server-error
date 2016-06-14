
import {inject} from 'angular-mocks';
import index from '../src/index.js';
import FieldErrorInterceptor from '../src/field-error.interceptor.js';
import DirectiveRegister from '../src/directive-register.js';
//import ngServerError from '../src/ng-server-error.directive.js';

//var index = require('angular-mocks');

describe('Directive register', function() {
  var scope, interceptor;
  var mock = {
    config: {
      data: {
        email: "a@a.com",
        invite: undefined,
        role: "client"
      },
      headers: {
        Accept: "application/json, text/plain, */*",
        Authorization: "",
        "Content-Type": "application/json;charset=utf-8"
      },
      method: "POST",
      url: "/api/v1/accounts/signup/"
    },
    data: {
      email: 'a@a.com',
      invite: '123123',
      role: 'client'
    }
  };

  beforeEach(angular.mock.module(index));
  beforeEach(
    inject(function($rootScope, $controller) {
      //scope = $rootScope.$new();
      interceptor = $controller(FieldErrorInterceptor, {$q: '$q', DirectiveRegister: DirectiveRegister});
    })
  );



  //var fieldErrorInterceptor = new FieldErrorInterceptor();
  //console.log(fieldErrorInterceptor);


  it('123', function() {
    var directiveRegister = new DirectiveRegister();

      console.log(interceptor);
  });

  //it("Should add and get a validator to a list", function() {
  //  directiveRegister.register({});
  //  var list = directiveRegister.getList();
  //  expect(list.length).toBe(1);
  //});'
});




