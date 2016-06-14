@Inject('$q', 'DirectiveRegister')
export default class FieldErrorInterceptor {
  constructor () {
    this.responseError = (resp) => {
      // FIXME: remove constants .splice(3,3)
      var url = resp.config.url.split('/').splice(3,3).join('/'),
        validators = this.DirectiveRegister.getList(),
        defers = _.map(validators, (validate) => {
          return validate(url, resp);
        });

      // if there isn't an interceptor for a filed add a promise
      _.forOwn(resp.data, (value, key)=> {
        if(value) defers.push(this.$q.reject(resp))
      });

      return this.$q.all(defers);
    };
  }
}

