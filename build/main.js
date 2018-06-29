require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dotenv__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dotenv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_dotenv__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_koa_morgan__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_koa_morgan___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_koa_morgan__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_koa_helmet__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_koa_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_koa_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_koa_bodyparser__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_koa_bodyparser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_koa_bodyparser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__router__ = __webpack_require__(8);

__WEBPACK_IMPORTED_MODULE_0_dotenv___default.a.config();
const { APP_PORT } = process.env;






const app = new __WEBPACK_IMPORTED_MODULE_1_koa___default.a();



app.use(__WEBPACK_IMPORTED_MODULE_4_koa_bodyparser___default()({
  extendTypes: {
    json: ['application/json']
  },
  onerror(err, ctx) {
    console.error('body parse error', err, ctx.request.body);
    ctx.throw(422, 'body parse error');
  }
})).use(__WEBPACK_IMPORTED_MODULE_5__router__["a" /* default */].routes()).use(__WEBPACK_IMPORTED_MODULE_5__router__["a" /* default */].allowedMethods()).use(__WEBPACK_IMPORTED_MODULE_3_koa_helmet___default()()).use(__WEBPACK_IMPORTED_MODULE_2_koa_morgan___default()('tiny')).listen(APP_PORT, () => {
  console.log('APP START');
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("koa");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("koa-morgan");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("koa-helmet");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("koa-bodyparser");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dotenv__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dotenv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_dotenv__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_router__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__UserController__ = __webpack_require__(10);
// Выносится в конфиги (или еще куда)
const service = {
  name: 'API AuthVI',
  version: '1.0.0',
  msg: "Hello Auth service"
  // Все о запрсе
  // + еще инф.
};


__WEBPACK_IMPORTED_MODULE_0_dotenv___default.a.config();
const { APP_MAIN_ROUTS_PREFIX } = process.env;




const { UserSugnIn, UserSugnUp, TokenСheck } = __WEBPACK_IMPORTED_MODULE_2__UserController__["a" /* default */];

const router = new __WEBPACK_IMPORTED_MODULE_1_koa_router___default.a({
  prefix: APP_MAIN_ROUTS_PREFIX
});

router.get('/', (ctx, next) => {
  ctx.status = 201;
  ctx.body = {
    service
  };
}).post('/signin', UserSugnIn, (ctx, next) => {}).post('/signup', UserSugnUp, (ctx, next) => {
  let { user, JWT, errors } = ctx.user;
  console.log(errors);

  ctx.body = { service, user, JWT, errors };
}).get('/test', TokenСheck, (ctx, next) => {});

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("koa-router");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dotenv__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dotenv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_dotenv__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dbUtils__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__jwt__ = __webpack_require__(15);

__WEBPACK_IMPORTED_MODULE_0_dotenv___default.a.config();
const {} = process.env;


__WEBPACK_IMPORTED_MODULE_1__dbUtils__["a" /* default */].connect();


/* harmony default export */ __webpack_exports__["a"] = ({
  async UserSugnIn(ctx, next) {
    console.log('UserSugnIn');
    ctx.status = 200;

    next();
  },
  async UserSugnUp(ctx, next) {
    ctx.status = 401;
    let result = await __WEBPACK_IMPORTED_MODULE_1__dbUtils__["a" /* default */].addUser(ctx.request.body);

    if (!result) {
      ctx.status = 400;
    }
    if (result.errors) {
      ctx.user = result;
    }
    if (!result.errors && result) {
      ctx.status = 201;
      ctx.user = result;
    }

    next();
  },
  async TokenСheck(ctx, next) {
    ctx.status = 403;
    ctx.body = 'token not falid';

    let { authorization } = ctx.headers;
    if (!authorization || !authorization.match(/^Bearer\s/)) return;
    let Token = authorization.replace(/^Bearer\s/, '');

    if (ctx.query.refresh) {
      let newJWT = await __WEBPACK_IMPORTED_MODULE_1__dbUtils__["a" /* default */].refreshUserToken(Token);
      ctx.body = { newJWT, msg: "Все ок"
        // let { accessToken } = newJWT
        // console.log(newJWT);
        // let { login } = await CheckJWT(accessTokenr)
        // if (login) {
        //   ctx.body = { login, msg: "Все ок" }
        // }
      };return;
    }

    let { login } = await Object(__WEBPACK_IMPORTED_MODULE_2__jwt__["a" /* CheckJWT */])(Token);
    if (login) {
      ctx.body = { login, msg: "Все ок" };
    }
  }
});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dotenv__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dotenv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_dotenv__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__UserSchema__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jwt__ = __webpack_require__(15);

__WEBPACK_IMPORTED_MODULE_0_dotenv___default.a.config();
const { DB_HOST, DB_PORT, DB_COLLECTION } = process.env;





const db = {
  connect() {
    __WEBPACK_IMPORTED_MODULE_1_mongoose___default.a.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_COLLECTION}`);
    let db = __WEBPACK_IMPORTED_MODULE_1_mongoose___default.a.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function () {
      console.log('DB START');
    });
  },

  async addUser(body) {
    let JWT = await Object(__WEBPACK_IMPORTED_MODULE_3__jwt__["b" /* generateJWT */])(body.login);
    try {
      let refreshTokens = { refreshTokens: JWT.refreshToken };
      let user = await Object(__WEBPACK_IMPORTED_MODULE_2__UserSchema__["a" /* default */])(Object.assign(body, refreshTokens)).save();

      return { user, JWT };
    } catch (error) {
      return error;
    }
  },

  async refreshUserToken(tk) {
    try {
      let newJWT = await Object(__WEBPACK_IMPORTED_MODULE_3__jwt__["b" /* generateJWT */])(Object(__WEBPACK_IMPORTED_MODULE_3__jwt__["a" /* CheckJWT */])(tk).login);

      let d = await __WEBPACK_IMPORTED_MODULE_2__UserSchema__["a" /* default */].find({ refreshTokens: [tk] }).update({ refreshTokens: [newJWT.refreshToken] });
      if (d.n) {
        return newJWT;
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  }
};

/* harmony default export */ __webpack_exports__["a"] = (db);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dotenv__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dotenv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_dotenv__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bcrypt__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_bcrypt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_bcrypt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mongoose_beautiful_unique_validation__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mongoose_beautiful_unique_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_mongoose_beautiful_unique_validation__);

__WEBPACK_IMPORTED_MODULE_0_dotenv___default.a.config();
const { DB_BCRYPT_SALT_ROUNDS } = process.env;




const Schema = __WEBPACK_IMPORTED_MODULE_2_mongoose___default.a.Schema;
const ObjectId = Schema.ObjectId;

const userSchema = new Schema({
  login: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    first: String,
    last: String
  },
  role: {
    type: String,
    required: true,
    default: 'user'
  },
  refreshTokens: [String]
});
userSchema.plugin(__WEBPACK_IMPORTED_MODULE_3_mongoose_beautiful_unique_validation___default.a);
userSchema.pre('save', function (next) {
  var user = this;
  __WEBPACK_IMPORTED_MODULE_1_bcrypt___default.a.hash(user.password, 10, function (err, hash) {
    if (err) return next(err);
    user.password = hash;
    next();
  });
});

const User = __WEBPACK_IMPORTED_MODULE_2_mongoose___default.a.model('User', userSchema);
/* harmony default export */ __webpack_exports__["a"] = (User);

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("bcrypt");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("mongoose-beautiful-unique-validation");

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return generateJWT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckJWT; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dotenv__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dotenv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_dotenv__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jsonwebtoken__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jsonwebtoken___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jsonwebtoken__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bluebird__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_bluebird___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_bluebird__);

__WEBPACK_IMPORTED_MODULE_0_dotenv___default.a.config();
const { JWT_KEY, JWT_ACC_TIME, JWT_REF_TIME } = process.env;




__WEBPACK_IMPORTED_MODULE_2_bluebird___default.a.promisifyAll(__WEBPACK_IMPORTED_MODULE_1_jsonwebtoken___default.a);

async function generateJWT(login) {
  const accessToken = __WEBPACK_IMPORTED_MODULE_1_jsonwebtoken___default.a.sign({ login }, JWT_KEY, { expiresIn: JWT_ACC_TIME });
  const refreshToken = __WEBPACK_IMPORTED_MODULE_1_jsonwebtoken___default.a.sign({ login }, JWT_KEY, { expiresIn: JWT_REF_TIME });
  const tokens = {
    accessToken,
    refreshToken,
    expiresIn: __WEBPACK_IMPORTED_MODULE_1_jsonwebtoken___default.a.decode(accessToken).exp
  };

  return tokens;
}

async function CheckJWT(token) {
  try {
    const result = await __WEBPACK_IMPORTED_MODULE_1_jsonwebtoken___default.a.verifyAsync(token, JWT_KEY);
    return result;
  } catch (error) {
    console.log('Cannot verify token:', token);
  }

  return {};
}



/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("bluebird");

/***/ })
/******/ ]);
//# sourceMappingURL=main.map