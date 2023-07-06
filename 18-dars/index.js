// function foo(n) {
//   if (n !== 20) {
//     return foo(n + 1)
//   }
//   return n
// }

// console.log(foo(2))

// function count8(n) {
//   if (n === 0) {
//     return n
//   }
//   // let a = n % 10 === 8
//   // let b = Number(Math.floor(n / 10) % 10 === 8 && a)
//   // return Number(a) + b + count8(Math.floor(n / 10))

//   let a = n % 10 === 8
//   let b = Number(n % 100 === 88)
//   return Number(a) + b + count8(Math.floor(n / 10))
// }

// console.log('Result', count8(88788))

// function countX(str) {
//   // return str.match(/x/gi)?.length || 0
//   if (!str) {
//     return 0
//   }
//   return Number(str[0] === 'x') + countX(str.substr(1))
// }

// console.log(countX('hi'))
