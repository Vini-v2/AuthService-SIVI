// Выносится в конфиги (или еще куда)
const service = {
  name: 'API AuthVI',
  version: '1.0.0',
  msg: "Hello Auth service"
  // Все о запрсе
  // + еще инф.
}


import env from 'dotenv'
env.config()
const { APP_MAIN_ROUTS_PREFIX } = process.env

import Router from 'koa-router'

import UC from './UserController'
const { UserSugnIn, UserSugnUp, TokenСheck } = UC

const router = new Router({
  prefix: APP_MAIN_ROUTS_PREFIX
})



router
  .get('/', (ctx, next) => {
    ctx.status = 201
    ctx.body = {
      service
    }
  })
  .post('/signin', UserSugnIn, (ctx, next) => {
    
  })
  .post('/signup', UserSugnUp, (ctx, next) => {
    let {user, JWT, errors} = ctx.user
    console.log(errors);
    
    ctx.body = { service, user, JWT, errors} 
  })
  .get('/test', TokenСheck, (ctx, next) => {

  })

export default router