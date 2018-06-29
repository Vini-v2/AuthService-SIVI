import env from 'dotenv'
env.config()
const { } = process.env

import db from './dbUtils'
db.connect()
import { CheckJWT, generateJWT } from './jwt'

export default {
  async UserSugnIn(ctx, next) {
    console.log('UserSugnIn');
    ctx.status = 200

    next()
  },
  async UserSugnUp(ctx, next) {
    ctx.status = 401
    let result = await db.addUser(ctx.request.body)

    if (!result) {
      ctx.status = 400
    }
    if (result.errors) {
      ctx.user = result
    }
    if (!result.errors && result) {
      ctx.status = 201
      ctx.user = result
    }

    next()
  },
  async TokenСheck(ctx, next) {
    ctx.status = 403
    ctx.body = 'token not falid'


    let { authorization } = ctx.headers
    if (!authorization || !authorization.match(/^Bearer\s/)) return
    let Token = authorization.replace(/^Bearer\s/, '')

    if (ctx.query.refresh) {
      let newJWT = await db.refreshUserToken(Token)
      ctx.body = { newJWT, msg: "Все ок" }
      // let { accessToken } = newJWT
      // console.log(newJWT);
      // let { login } = await CheckJWT(accessTokenr)
      // if (login) {
      //   ctx.body = { login, msg: "Все ок" }
      // }
      return
    }

    let { login } = await CheckJWT(Token)
    if (login) {
      ctx.body = { login, msg: "Все ок" }
    }
  }
}