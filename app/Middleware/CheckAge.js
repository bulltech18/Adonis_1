'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class CheckAge {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request, response }, next) {
    const age = request.only('age')
    if(age['age'] < 18){
      return response.status(401).json({
        message: 'No autorizado'
      })
      
    }
    
    await next()
   
  }
}

module.exports = CheckAge
