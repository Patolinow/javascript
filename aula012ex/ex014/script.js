function carregar() {
  var msg = document.getElementById('msg')
  var img = document.getElementById('img')
  var data = new Date()
  var hora = data.getHours()

  if (hora == 1) {
    msg.innerHTML = `Agora é ${hora} hora`
  }
  else {
    msg.innerHTML = `Agora são ${hora} horas`
  }

  if (hora > 5 && hora < 12) {
    //noite
    img.src = 'manha.jpg'
    document.body.style.background = '#DCC9BB'
  }
  else if (hora < 18 && hora > 5) {
    //tarde
    img.src = 'tarde.jpg'
    document.body.style.background = '#de6361'
  }
  else {
    //noite
    img.src = 'noite.jpg'
    document.body.style.background = '#2f4f4f'
  }
}
