function carregar() {
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('imagem')    
  var data = new Date()
  var hora = data.getHours()
  msg.innerHTML = 'Agora são ${horas} horas'
  if (hora >= 0 && < 12) {
      //BOM DIA !!
      img.src = 'dia.jpg'
  } else if (hora >= 12 && hora < 18 ){
      //BOA TARDE !! 
      img.src = 'tarde.jpg'
  } else {
      //BOA NOITE !!
      img.src = 'noite.jpg'
  }
}

