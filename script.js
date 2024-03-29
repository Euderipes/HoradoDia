function carregar(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} : ${minutos} horas.`
    if(hora >= 0 && hora < 12){
        img.src = 'image/dia.jpg'
        msg.innerHTML += '<p><strong>Bom Dia!</strong></p>'
        document.body.style.backgroundImage = 'url(./image/foto-manha.jpg)'
    } else if(hora >= 12 && hora < 18){
        img.src = 'image/tarde.jpg'
        msg.innerHTML += '<p><strong>Boa Tarde!</strong></p>'
        document.body.style.backgroundImage = 'url(./image/foto-tarde.jpg)'
    } else{
        img.src = 'image/noite.jpg'
        msg.innerHTML += '<p><strong>Boa Noite!</strong></p>'
        document.body.style.backgroundImage = 'url(./image/foto-noite.jpg)'
    }
}