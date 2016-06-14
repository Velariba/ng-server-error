
import angular from 'angular';
import DirectiveRegister from './directive-register.js';
import FieldErrorInterceptor from './field-error.interceptor.js'
import NgServerError from './ng-server-error.directive.js'
import {directiveFactory} from './utils.js';

export default angular.module('coeApp.ngServerError', [])
  .config(config)
  .service('FieldErrorInterceptor', FieldErrorInterceptor)
  .factory('DirectiveRegister', DirectiveRegister)
  .directive('ngServerError', directiveFactory(NgServerError))
  .name

// @ngInject
function config($httpProvider) {
  $httpProvider.interceptors.unshift('FieldErrorInterceptor');
}