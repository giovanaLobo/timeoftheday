function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var time = data.getHours()
    var min = data.getMinutes()
    msg.innerHTML = `It is now  ${time}:${min} `
    if (time >= 0 && time < 12) {
        img.src = 'manha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (time >= 12 && time < 18) {
        img.src = 'tarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        img.src = 'noite.png'
        document.body.style.background = '#515154'
    }
}
