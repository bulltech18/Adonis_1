'use strict'
const Route = use('Route')
Route.post('/login', 'AuthController.login')
Route.resource('users', 'UserController')
.apiOnly()
.validator(new Map([
  [['users.store'], ['StoreUser']]
])).middleware(['age'])
Route.delete('/delete', 'UserController.delete')
//Route.post('/user', 'UserController.store')
Route.get('/read', 'UserController.read')
Route.post('/update', 'UserController.update')






