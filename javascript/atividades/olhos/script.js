const olhos = [...document.querySelectorAll(".eye")]
let pos_x = 0
let pos_y = 0

window.addEventListener('mousemove', (event)=>{
    pos_x = event.clientX
    pos_y = event.clientY

    // primeiro, obtemos o valor em radiano
    let rotacao = Math.atan2(pos_y, pos_x)

    // segundo, convertemos de radiano para grau.
    rotacao = rotacao*180/Math.PI

    olhos.map((olho)=>{
        olho.style.transform = `rotate(${rotacao}deg)`
    })
})

