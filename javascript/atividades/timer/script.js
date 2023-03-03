// classes
class Timer {
    constructor(hours=0, minutes=0, seconds=0)  {
        this.hours = hours
        this.minutes = minutes
        this.seconds = seconds
    }

    // retorna a representação da hora, minuto e segundos atuais.
    repr(){
        let hours = this.hours
        let minutes = this.minutes
        let seconds = this.seconds

        hours = hours < 10 ? "0" + hours : hours
        minutes = minutes < 10 ? "0" + minutes : minutes
        seconds = seconds < 10 ? "0" + seconds : seconds

        return hours + ":" + minutes + ":" + seconds
    }

    // decrementa em um segundo.
    decrement(){
        if(this.seconds > 0) this.seconds--;

        if(this.minutes > 0 && this.seconds == 0) {
            this.minutes--
            this.seconds = 60
        }

        if(this.hours > 0 && this.minutes == 0) {
            this.hours--
            this.minutes = 60
        }
    }
}

// constantes
const MAX_HOURS = 24
const MAX_MINUTES = 60
const MAX_SECONDS = 60
const DELAY = 1000

// globais
const timer = new Timer()
let timer_interval = null

const fill_selects = (select_id, max)=>{
    const select = document.querySelector(select_id)

    for(count=0; count<=max; count++) {
        const option = document.createElement('option')
        option.setAttribute("value", count)
        option.innerHTML = count
        select.appendChild(option)
    }
}

const bind_options = (select_id, handler)=>{
    const select = document.querySelector(select_id)
    const options = [...select.children]

    options.map((option)=>{
        option.addEventListener('click', handler)
    })
}

const hours_option_click = (event)=>{
    if(timer_interval) clearInterval(timer_interval)
    update_timer()
    set_display(timer.repr())
}

const minutes_option_click = (event)=>{
    if(timer_interval) clearInterval(timer_interval)
    update_timer()
    set_display(timer.repr())
}

const seconds_option_click = (event)=>{
    if(timer_interval) clearInterval(timer_interval)
    update_timer()
    set_display(timer.repr())
}

const set_display = (value)=>{
    const display = document.querySelector('.display')
    display.innerHTML = value
}

const update_timer = ()=> {
    timer.hours = Number(document.querySelector('#select-hours').value)
    timer.minutes = Number(document.querySelector('#select-minutes').value)
    timer.seconds = Number(document.querySelector('#select-seconds').value)
}

const start_click = ()=>{
    countdown()
}

// contagem regressiva.
const countdown = ()=>{
    if(timer_interval) clearInterval(timer_interval)
    timer_interval = setInterval(()=>{
        timer.decrement()
        set_display(timer.repr())

        if(timer.hours == 0 && timer.minutes == 0 && timer.seconds == 0) {
            clearInterval(timer_interval)
            console.log("acabou")
        }
    }, DELAY)
}

const main = ()=>{
    fill_selects('#select-hours', MAX_HOURS)
    fill_selects('#select-minutes', MAX_MINUTES)
    fill_selects('#select-seconds', MAX_SECONDS)

    bind_options('#select-hours', hours_option_click)
    bind_options('#select-minutes', minutes_option_click)
    bind_options('#select-seconds', seconds_option_click)

    const start_button = document.querySelector('#start')
    start_button.addEventListener('click', start_click)
    set_display(timer.repr())
}

main()
