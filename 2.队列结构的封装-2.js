// 队列的关键在于只能在队列顶部删除以及队列尾部添加
class Queue {
  #items = {}
  #count = 0//对象的键
  #lowCount = 0//记录删除的元素个数这也同时是首个的索引

  dequeue() {
      if(this.isEmpty()){
          return undefined
      }
      let res = this.#items[this.#lowCount]
      delete this.#items[this.#lowCount]
      this.#lowCount++
      return res
  }

  enqueue(data) {
      this.#items[this.#count] = data
      this.#count++
  }

  front() {
      return this.#items[this.#lowCount]
  }

  isEmpty() {
      return this.size() === 0
  }

  size() {
      return this.#count-this.#lowCount
  }

  clear() {
      this.#items = {}
      this.#count = 0;
      this.#lowCount = 0
  }

  toString() {
      let str = ""
      for(let i =this.#lowCount;i<this.#count;i++){
          str += `${this.#items[i]} `
          }
      return str
  }
}
let queue = new Queue()

// queue.enqueue('张三')
// queue.enqueue('李四')
// queue.enqueue('王五')
// console.log(queue.toString());
// console.log(queue.size());
// console.log(queue.isEmpty());
// console.log(queue.front());
// queue.dequeue()
// console.log(queue.toString());
// 击鼓传花小游戏
function game(list,num){
  let queue = new Queue()
  for(let i=0;i<list.length;i++){
      queue.enqueue(list[i])
  }

  while(queue.size()>1){
      for(let i=0;i<num;i++){
          queue.enqueue(queue.dequeue())
      }
      console.log(queue.dequeue(),"淘汰了")
  }
  console.log(`获胜者为:${queue.front()}`);
  return {
      winner:queue.dequeue()
  }
}
game(["张三","李四","王五","赵六","小明"],6)
