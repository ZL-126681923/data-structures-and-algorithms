/*
 *双端队列的特点是队首可以添加与删除,队尾也可以添加与删除
 */
class DeQueue {
  #items = {}
  #lowCount = 0
  #count = 1

// 队首删除
  removeFront() {
    if (this.isEmpty()) {
      return undefined
    }
    let res = this.#items[this.#lowCount]
    delete this.#items[this.#lowCount]
    this.#lowCount++
    return res
  }
// 队尾添加
  addBack(data) {
    this.#items[this.#count] = data
    this.#count++
  }
// 队首添加
  addFront(data) {
    if (this.isEmpty()) {
      this.addBack(data)
    } else if (this.#lowCount > 0) {
      this.#lowCount--;
      this.#items[this.#lowCount] = data
    } else {
      for (let i = this.#count; i > 0; i--) {
        this.#items[i] = this.#items[i - 1]
      }
      this.#count++;
      this.#lowCount = 0;
      this.#items[0] = data
    }
  }
// 队尾删除
  removeBack() {
    if (this.isEmpty()) {
      return undefined
    }

    this.#count--;
    const result = this.#items[this.#count]
    delete this.#items[this.#count]

    return result
  }

  peekFront() {
    return this.#items[this.#lowCount]
  }
  peekBack() {
    if (this.isEmpty()) {
      return undefined
    }
    return this.#items[this.#count - 1]
  }

  isEmpty() {
    return this.size() === 0
  }

  size() {
    return this.#count - this.#lowCount
  }

  clear() {
    this.#items = {}
    this.#count = 0
    this.#lowCount = 0
  }

  toString() {
    let str = ""
    for (let i = this.#lowCount; i < this.#count; i++) {
      str += `${this.#items[i]} `
    }
    return str
  }
}
// 判断回文数字(d   sd)
// 使用双端队列前后拿出数字进行对比
function palindrome(str){
  // 清除字符串两端以及内部的空白字符
const lowstr = str.toLocaleLowerCase().split(' ').join('')
let dequeque = new DeQueue()
for(let i =0;i<lowstr.length;i++){
  dequeque.addBack(lowstr[i])
}
//进行回文判断
let isEqual = true
while(dequeque.size()>1 ){
  if(dequeque.removeFront()!== dequeque.removeBack()){
    isEqual = false
    break;
  }
}
return isEqual

}
console.log(palindrome('Ds  d'));
console.log(palindrome('假做真时真亦假'));


