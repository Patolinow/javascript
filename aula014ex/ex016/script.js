function contar() {
  var ini = document.getElementById('initxt')
  var fim = document.getElementById('fimtxt')
  var pas = document.getElementById('pastxt')
  var res = document.querySelector('div#res')
  //verificador de valores vazios
  if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
    window.alert('Coloque os números ai')
    res.innerHTML = 'Impossível contar!'
  }
  else {
    res.innerHTML = 'Contando: '
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(pas.value)
    if (p <= 0) {
      window.alert('Passo errado! vo considerar 1')
      p = 1
    }

    //Contagem crescente
    if (i <= f) {
      for (let c = i; c <= f; c += p) {
        res.innerHTML += `${c} \u{1F449} `
      }
    }
    //Contagem regressiva
    else {
      for (let c = i; c >= f; c -= p) {
        res.innerHTML += `${c} \u{1F449}`
      }
    }

    res.innerHTML += ' \u{1F3C1}'
  }
}
