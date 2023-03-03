const bind_buttons = ()=>{
    const symbols =  ['(', ')', ',', '+', '-', '*', '/', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
    const buttons = [... document.querySelectorAll('.button')]
    const clear_button = document.querySelector('#clear')
    const on_button = document.querySelector('#on')
    const equal_button = document.querySelector('#equal')
    const open_close_button = document.querySelector("#open-close")
    
    // binding normals buttons.
    buttons.map((button)=>{
        if(symbols.includes(button.innerText)) {
            button.addEventListener('click', ()=>{
                insert_display(button.innerText)
            })
        }
    })

    // binding the remainings buttons.
    clear_button.addEventListener('click', clear_display)
    equal_button.addEventListener('click', calculate)
    open_close_button.addEventListener('click', toogle_calculator)

}

const calculate = ()=>{
    const display = document.querySelector('.display')
    const result = eval(display.innerText)
    display.innerText = result
}

const insert_display = (value)=>{
    const symbols = ['+', '-', '/', '*', ',']
    const display = document.querySelector('.display')
    const content = [... display.innerText]
    const last_caractere = content.length ? content[content.length-1]:null
    
    //my poor validation :(
    if(symbols.includes(value)) {
        if(last_caractere && !symbols.includes(last_caractere)) {
            display.innerHTML += value
        }
    }else {
        display.innerHTML += value
    }

}

const clear_display = ()=>{
    const display = document.querySelector('.display')
    display.innerHTML = ""
}

const toogle_calculator = ()=>{
    const calculator = document.querySelector('.calculator')
    calculator.classList.toggle("hidden")
}

const main = ()=>{
    bind_buttons()
}

main()
