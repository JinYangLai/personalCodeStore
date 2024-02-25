// 计算字符串最后一个单词的长度，单词以空格隔开，字符串长度小于5000。（注：字符串末尾不以空格为结尾）
// 输出一个整数，表示输入字符串最后一个单词的长度。
// 输入：hello nowcoder  输出：8
function arrLength(str) {
  if(str) {
    let array = []
    array = str.split(' ')
    let last = array.length - 1
    console.log(array[last].length) 
  }else{
    return 0
  }
}
//console.log(arrLength('Yon jiayou nishizuibangd hello nowcoder')) 
arrLength('dqwdsa wd1')
function getLastWordLength(str) {
  let arr = []
  for(let i = 0; i<str.length; i++) {
    if(str[i] === ' ') {
      arr.push(i)
    } 
  }
  let len = arr.length
  if(len === 0) {
    return str.length
  } else {
    return parseInt((str.length) - arr[len-1] -1)
  }
}
console.log(getLastWordLength('cadca 1231'))