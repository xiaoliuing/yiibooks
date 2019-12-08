// 容错机制
const errHandle = {
  err(app, logger) {
    app.use(async (ctx, next) => {
      try {
        await next();
      } catch (error) {
        logger.error(error);
        ctx.status = error.status || 500;
        ctx.body = 'server error';
      }

      switch(ctx.status) {
        case 301:
          break;
        case 404:
          ctx.body=' <script type="text/javascript" src="//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js" charset="utf-8"></script>';
          break;
      }
    })
  }
}

export default errHandle;