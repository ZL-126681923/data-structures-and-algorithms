//O(1)表示计算机只要执行一次/占用的空间大小是固定的
let a = 1
console.log(a);
//O(n)表示计算机需要执行n次/占用的空间大小是n
for(let i = 0; i < 10; i++){
  console.log(i);
}
//O(n)+O(1) = O(n)
function sum(n){
  let b = 1;
  for(let i = 0; i < n; i++){
    b += i;
  }
}
//O(n^2)表示计算机需要执行n*n次/占用的空间大小是n*n
function O1(n){
  for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
      console.log(i,j);
    }
  }
}
O1(10);
//O(logn)表示计算机需要执行logn次
function O2(k){
  for(let i = 1; i < k; i *= 2){
    console.log(i);
  }
}
