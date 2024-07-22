
/* 
队列结构的常用方法(队列结构先入先出类似于排队)
dequeue(): 出队列
enqueue(): 添加队列
front(): 返回队列首个元素
isEmpty()：是否为空
clear()：清除队列
size()：返回队列的长度
toString()：转为字符串
*/
class Queue {
  // constructor(){
  //   this.item = []
  // }
  // 新写法#表示私有属性不会被外界访问
  #items = []
  dequeue() {
    // 使用shift方法的性能不是很好所以我们还会采用另一种封装方式
    return this.#items.shift()
  }
  enqueue(data) {
    this.#items.push(data)
  }
  front() {
    // at()方法是数组的一个方法，用于返回指定位置的元素。当索引为负数时，它会从数组的末尾开始计数。
    return this.#items.at(0)
  }
  isEmpty() {
    return this.#items.length === 0
  }
  clear() {
    this.#items = []
  }
  size() {
    return this.#items.length
  }
  toString() {
    return this.#items.join(' ')
  }
}
let queue = new Queue()

queue.enqueue('张三')
queue.enqueue('李四')
queue.enqueue('王五')
console.log(queue.toString());
console.log(queue.size());
console.log(queue.isEmpty());
console.log(queue.front());
queue.dequeue()
console.log(queue.toString());
