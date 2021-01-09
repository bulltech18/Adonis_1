'use strict'
const { formatters } = use('Validator')
class StoreUser {
  get rules () {
    return {
      age: 'required|max:10',
      email: 'required|email|max:180|unique:users,email',
      password: 'required|max:100'
    }
  }
  get validateAll(){
    return true
  }

  get formatter(){
    return formatters.JsonApi
  }
}

module.exports = StoreUser
