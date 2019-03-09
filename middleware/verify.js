// https://github.com/auth0/node-jsonwebtoken
const  jwt = require('jsonwebtoken')
const config = require('../config')

const VerifyToken = async(ctx, next) => {
  if (ctx.method !== 'OPTIONS') {
    const authorization = ctx.get('Authorization');
    const url = ctx.path
    if (url.indexOf('/auth') < 0) {
      try {
        const tokenContent = await jwt.verify(authorization, config.secret);
        // 全局设置userId，数据库的查找
        ctx.userId = tokenContent.userId
      } catch (error) {
        if ('TokenExpiredError' === error.name) {
            ctx.throw(401, 'token expired！');
        }
        ctx.throw(401, 'invalid token');
      }
    }
    await next()
  }
};

module.exports = VerifyToken