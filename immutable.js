var arr = ['satu', 'dua', 'tiga']
var numba = [3,2,1,4,5,2]
var b = ['bbb']

//Push : menambahkan 1 item di belakang.
function immutablePush(arr, b){
  return [].concat(arr,b)
}
console.log(immutablePush(arr, b))

//Pop : menghilangkan satu item di belakang.
function immutablePop(arr){
  return arr.slice(0, -1)
}
console.log(immutablePop(arr))


//Shift : menghilangkan 1 element didepan.
function immutableShift(arr){
  return arr.slice(1)
}
console.log(immutableShift(arr))

//Unshift : menambahkan satu didepan.
function immutableUnshift(arr, b){
  return [].concat(b, arr)
}
console.log(immutableUnshift(arr, b))

//Sort : sorting.
function immutableSort(arr, compareFunction) {
  return arr.concat().sort(compareFunction)
}
console.log(immutableSort(numba, function(a, b){ return a - b}))

//Reverse : membalik array.
function immutableReverse(arr) {
  return arr.concat().reverse()
}
console.log(immutableReverse(arr))

//Splice : mengganti index 0 sampai n dengan array baru.
function immutableSplice(arr, start, deleteCount, ...items) {
  return [ ...arr.slice(0, start), ...items, ...arr.slice(start + deleteCount) ]
}
console.log(immutableSplice(arr, 0, 2, ...numba))

//Delete : delete pada index tertentu
function immutableDelete (arr, index) {
   return arr.slice(0,index).concat(arr.slice(index+1))
}
console.log(immutableDelete(arr, 1))

//Copy an Array
var arr = ['a', 'b', 'c']
var newArr = [ ...arr ]

//console.log()
module.exports = {
  immutablePush,
  immutablePop,
  immutableShift,
  immutableUnshift,
  immutableSort,
  immutableReverse,
  immutableSplice,
  immutableDelete
}
