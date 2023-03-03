const set_display = (valor)=>{
    const display = document.querySelector('.display')
    display.innerHTML = valor
}

const atualizar_horario = ()=>{
    const date = new Date()
    let hora = date.getHours()
    let minuto = date.getMinutes()
    let segundo = date.getSeconds()

    hora = hora < 10 ? "0" + hora : hora
    minuto = minuto < 10 ? "0" + minuto : minuto
    segundo = segundo < 10 ? "0" + segundo : segundo

    const hora_completa = hora + ":" + minuto + ":" + segundo
    set_display(hora_completa)
}

setInterval(atualizar_horario, 1000)

