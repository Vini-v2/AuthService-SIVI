import env from 'dotenv'
env.config()
const { APP_PORT } = process.env

import Koa from 'koa'
import logger from 'koa-morgan'
import helmet from 'koa-helmet'
import bodyParser from 'koa-bodyparser'

const app = new Koa()

import router from './router'


app
  .use(bodyParser({
    extendTypes: {
      json: ['application/json']
    },
    onerror(err, ctx) {
      console.error('body parse error', err, ctx.request.body);
      ctx.throw(422, 'body parse error');
    }
  }))
  .use(router.routes())
  .use(router.allowedMethods())
  .use(helmet())
  .use(logger('tiny'))
  .listen(APP_PORT, () => {
    console.log('APP START');
  })