/* 
栈结构的常用方法(栈结构先入后出类似于一个瓶子)
push(): 添加一个元素到栈顶
pop(): 出栈
peek(): 返回栈顶
isEmpty()：是否为空
clear()：清除栈
size()：返回栈的长度
toString()：转为字符串
*/
class Stack {
  // constructor(){
  //   this.item = []
  // }
  // 新写法#表示私有属性不会被外界访问
  #items = []
  push(data) {
    return this.#items.push(data)
  }
  pop() {
    return this.#items.pop()
  }
  peek(){
    // return this.#items[this.#items.length-1]
    // at()方法是数组的一个方法，用于返回指定位置的元素。当索引为负数时，它会从数组的末尾开始计数。
    return this.#items.at(-1)
  }
  isEmpty(){
    return this.#items.length === 0
  }
  clear(){
    this.#items =[]
  }
  size(){
    return this.#items.length
  }
  toString(){
    return this.#items.join(' ')
  }
}
let stack = new Stack()

// 栈结构的应用 十进制转任意进制
function convert(decNumber,base){
  let remstack = new Stack()
  let number = decNumber
  let str = ''
  let basestr ='0123456789ABCDEF'
  // 使用辗转相除法
  while(number>0){
    remstack.push(number%base)
    number =Math.floor(number/base) 
  }
  while(!(remstack.isEmpty())){
     str+= basestr[remstack.pop()]
  }
  return str
}
// stack.push(7)
// stack.push(8)
// stack.push(9)
// console.log(stack.peek());
// console.log(stack.isEmpty());
// console.log(stack.size());
// console.log(stack.toString());
// stack.clear()

console.log(convert(49,8));

