function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = window.document.getElementById('txtano')
  var res = document.querySelector('div#res')
  if (fano.value.length == 0 || fano.value > ano) {
    window.alert('Digita essa poha direito krai')
  }
  else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
      gênero = 'Homem'
      if (idade >= 0 && idade < 12) {
        img.setAttribute('src', 'criancah.jpg')
      }
      else if (idade < 21) {
        img.setAttribute('src', 'jovemh.jpg')
      }
      else if (idade < 50) {
        img.setAttribute('src', 'adultoh.jpg')
      }
      else {
        img.setAttribute('src', 'idosoh.jpg')
      }
    }
    else {
      if (idade >= 0 && idade < 12) {
        img.setAttribute('src', 'criancam.jpg')
      }
      else if (idade < 21) {
        img.setAttribute('src', 'jovemm.jpg')
      }
      else if (idade < 50) {
        img.setAttribute('src', 'adultom.jpg')
      }
      else {
        img.setAttribute('src', 'idosom.jpg')
      }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
    res.appendChild(img)

  }
}