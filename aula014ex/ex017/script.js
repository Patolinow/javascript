function gerar() {
  var num = document.querySelector('input#numtxt')
  var sel = document.getElementById('seltab')
  if (num.value.length == 0) {
    window.alert('Digita um número ai krl')
  }
  else {
    var n = Number(num.value)
    var c = 1
    var multi = 1
    sel.innerHTML = ''
    while (c <= 10) {
      let item = document.createElement('option')
      multi = n * c
      item.text += `${n} x ${c} = ${multi}`
      item.value = `tab${c}`
      sel.appendChild(item)
      c++
    }
  }
}