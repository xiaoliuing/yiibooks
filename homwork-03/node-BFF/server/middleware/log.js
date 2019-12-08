const logHandle = async (ctx, next) => {
  try {
    const t1 = Date.now();
    await next();
    console.log(Date.now() - t1);
  } catch (error) {
    console.log(error);
  }
}

export default logHandle;

