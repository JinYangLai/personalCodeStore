function ajax(type, url) {
  const res = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(type, url, true)
    xhr.send();
    xhr.onreadystatechange = function() {
      if(xhr.readyState === 4){
        if(xhr.status === 200){
          resolve(JSON.parse(xhr.responseText))
        }else if(xhr.status === 404){
          reject(new Error('404 not found'))
        }
      }
    }
  })
  return res
}
// 1、定义一个Promise函数
// 2、定义XMLHttpRequest
// 3、使用xhl方法 open()设置请求方式、url，send()方法发送。
// 4、在onreadystatechange方法里判断 readyState是否=4，判断status是否为200，200 resove返回数据，404 reject抛出异常。 