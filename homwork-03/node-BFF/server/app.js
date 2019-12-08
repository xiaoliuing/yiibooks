import Koa from 'koa';
import Router from 'koa-router';
import serve from 'koa-static';
import logjs from 'log4js';
import render from 'koa-swig';
import { wrap } from 'co';
import path from 'path';
// import parser from 'koa-bodyparser';
const parser = require('koa-body');
import ErrorHandle from './middleware/error'
import config from './config';
import controller from './controllers';

const app = new Koa();
let router = new Router();

app.use(parser());

// 静态资源入口
app.use(serve(config.staticDir,{
  maxAge: 0
}));

app.context.render = wrap(render({
  root: path.join(__dirname, '../views'),
  autoescape: true,
  cache: 'memory', // disable, set to false
  ext: 'html',
}));

// 配置打印日志
logjs.configure({
  appenders: { cheese: { type: 'file', filename: __dirname + '/../logs/error.log' } },
  categories: { default: { appenders: ['cheese'], level: 'error' } }
});
const logger = logjs.getLogger('cheese');

// 容错中间件
ErrorHandle.err(app, logger);

// 路由控制器
controller(router);

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(config.port, () => {
  console.log('Server is running......');
})