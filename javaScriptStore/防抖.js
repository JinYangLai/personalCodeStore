const debounce = (func, wait = 0) => {
  let timeout = null
  let args
  function debounced(...arg) {
    args = arg
    if(timeout){
      clearTimeout(timeout)
      timeout = null
    }
    return new Promise((res, rej) => {
      timeout = setTimeout(async () => {
        try{
          const result = await func.apply(this, args)
          res(result)
        }catch(e){
          rej(e)
        }
      },wait)
    })
  }
  // 取消
  function cancel() {
    clearTimeout(timeout)
    timeout = null
  }

  // 立即执行
  function flush() {
    cancel()
    return func.apply(this, args)
  }

  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced
}
// 1、定义防抖的函数接受两个参数，一个为func，一个为延时
// 2、定义一个timeout变量
// 3、判断timeout变量是否存在
// 4、定一个promise，定义setTimeout函数
// 5、异步获取func结果，有结果promise状态设为resove，没有结果设置为rejected