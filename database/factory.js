'use strict'

const Factory = use('Factory')
const Hash = use('Hash')

 Factory.blueprint('App/Models/User', (faker) => {
   return {
    username: faker.name(),
    age: faker.age(),
    email: faker.email(),
    password: Hash.make(faker.password())
   }
 })
