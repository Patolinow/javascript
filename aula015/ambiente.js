let num = [7, 2, 4]
num[3] = 6
num.push(3)
console.log(num)
console.log(num.length)
num.sort()
console.log(num)
console.log(`o primeiro valor do vetor é ${num[0]}`)
for (let c in num) {
  console.log(`esse é o número ${num[c]} do vetor, na posição ${c}`)
}
let pos = num.indexOf(3)
console.log(pos)