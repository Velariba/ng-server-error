
@Inject('$q','DirectiveRegister')
export default class NgServerError {
  constructor () {
    this.restrict = 'A';
    this.require = '?ngModel';
  }

  link(scope, element, attrs, ctrl){

    this.DirectiveRegister.register(validate.bind(this));

    scope.$watch(()=>{
        return ctrl.$viewValue;
      },(newValue, oldValue)=>{
        if(newValue !== oldValue) return ctrl.$setValidity("serverError", true);
      }
    );

    function validate (endPoint, resp) {
      var deferred = this.$q.defer();
      if(endPoint == attrs.ngServerError) {
        _.each(resp.data, (val, key)=>{
          if(key == ctrl.$name) {
            ctrl.$setValidity("serverError", false);
            deferred.reject(resp);
            resp.data[key] = null; // prevents processing by another interceptor
          } else {
            deferred.resolve(resp);
          }
        })
      }
      return deferred.promise;
    }
  }


}
