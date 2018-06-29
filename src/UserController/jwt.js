import env from 'dotenv'
env.config()
const { JWT_KEY, JWT_ACC_TIME, JWT_REF_TIME } = process.env

import jwt from 'jsonwebtoken'
import bluebird from 'bluebird'

bluebird.promisifyAll(jwt)


async function generateJWT(login) {
  const accessToken = jwt.sign({ login }, JWT_KEY, { expiresIn: JWT_ACC_TIME })
  const refreshToken = jwt.sign({ login }, JWT_KEY, { expiresIn: JWT_REF_TIME })
  const tokens = {
    accessToken,
    refreshToken,
    expiresIn: jwt.decode(accessToken).exp,
  }

  return tokens
}

async function CheckJWT(token) {
  try {
    const result = await jwt.verifyAsync(token, JWT_KEY)
    return result
  } catch (error) {
    console.log('Cannot verify token:', token)
  }

  return {}
}

export { generateJWT, CheckJWT }