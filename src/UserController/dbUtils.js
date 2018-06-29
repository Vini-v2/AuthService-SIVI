import env from 'dotenv'
env.config()
const { DB_HOST, DB_PORT, DB_COLLECTION } = process.env

import mongoose from 'mongoose'
import User from './UserSchema'
import { generateJWT, CheckJWT } from './jwt'



const db = {
  connect() {
    mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_COLLECTION}`);
    let db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
      console.log('DB START');
    });
  },

  async addUser(body) {
    let JWT = await generateJWT(body.login)
    try {
      let refreshTokens = { refreshTokens: JWT.refreshToken }
      let user = await User(Object.assign(body, refreshTokens)).save()

      return { user, JWT }
    } catch (error) {
      return error
    }
  },




  async refreshUserToken(tk) {
    try {
      let newJWT = await generateJWT( CheckJWT(tk).login )
      
      let d = await User.find({refreshTokens: [tk]}).update({refreshTokens: [newJWT.refreshToken]})
      if (d.n) {
        return newJWT
      }
    } catch (error) {
      console.log(error);
      return error
    }


  }
}


export default db