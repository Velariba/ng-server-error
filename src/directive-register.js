import _ from 'lodash';

export default DirectiveRegister;

// @ngInject
function DirectiveRegister() {
  this.validators = [];
  return {
    getList: () => {
      return this.validators;
    },
    register: (validator) => {
      return this.validators.push(validator);
    }
  }
}
