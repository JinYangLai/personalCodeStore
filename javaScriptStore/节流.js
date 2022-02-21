const throttle = (func, wait = 0, execFirstCall) => {
  let timeout = null
  let args
  let firstCallTimestamp

  function throttled(...arg) {
    if(!firstCallTimestamp) firstCallTimestamp = new Date().getTime()
    if(!execFirstCall || !args){
      console.log('set args', arg)
      args = arg
    }
    if(timeout){
      clearTimeout(timeout)
      timeout = null
    }
    return new Promise(async(res, rej) => {
      if(new Date().getTime() - firstCallTimestamp >= wait){
        try{
          const result = await func.apply(this, args)
          res(result)
        }catch(e){
          rej(e)
        }finally{
          cancel()
        }
      }else{
        timeout = setTimeout(async () => {
          try{
            const result = await func.apply(this, args)
            res(result)
          }catch(e){
            rej(e)
          }finally{
            cancel()
          }
        }, firstCallTimestamp + wait - new Date().getTime())
      }
    })
  }
  //取消
  function cancel() {
    clearTimeout(timeout)
    args = null
    timeout = null
    firstCallTimestamp = null
  }
  // 立即执行
  function flush(){
    cancel()
    return func.apply(this, args)
  }
  throttle.cancel = cancel
  throttle.flush = flush
  return throttle
}
// 1、获取当前时间
// 2、定义延时时间
// 3、声明一个timeout变量，判断timeout是否存在，存在就clearTimeout，不存在就设置为null。
// 4、定义一个promise，判断延时是否超过了定义的延迟时间，true执行函数，false就继续执行setTimeout函数。
