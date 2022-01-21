let num = document.getElementById('numtxt')
let lista = document.getElementById('vetor')
let res = document.querySelector('div#res')
let valores = []

//Funções para testar os valores da function analisar()

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true
  } else {
    return false
  }
}

function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true
  } else {
    return false
  }
}

// Capturador de valores da lista

function analisar() {

  if (isNumero(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value))
    let item = document.createElement('option')
    item.text = `Valor ${num.value} adicionado`
    lista.appendChild(item)
    res.innerHTML = ''

  } else {
    window.alert('Digite um valor válido')
  }
  num.value = ''
  num.focus()
}

// Resultados dos números capturados

function finalizar() {
  if (valores.length == 0) {
    window.alert('Adicione os números ai')
  } else {
    var tot = valores.length
    var men = valores[0]
    var mai = valores[0]
    var soma = 0
    var media = 0

    for (let pos in valores) {
      soma += valores[pos]
      if (valores[pos] > mai)
        mai = valores[pos]

      if (valores[pos] < men)
        men = valores[pos]

    }
  }
  media = soma / tot
  res.innerHTML = ''
  res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados </p>`
  res.innerHTML += `<p>O maior número foi ${mai} </p>`
  res.innerHTML += `<p>O menor número foi ${men} </p>`
  res.innerHTML += `<p>Somando td, temos ${soma} </p>`
  res.innerHTML += `<p>A media desses números é ${media} </p>`
}

