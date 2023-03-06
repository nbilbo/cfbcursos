import {User, DataBase} from './models.js'


const get_formulary = ()=>{
    const name = document.querySelector('#name').value
    const telephone = document.querySelector('#telephone').value
    const email = document.querySelector('#email').value

    return {'name': name, 'telephone': telephone, 'email': email}
}


const clear_formulary = ()=>{
    document.querySelector('#name').value = ''
    document.querySelector('#telephone').value = ''
    document.querySelector('#email').value = ''

}


const write_register = ()=>{
    const formulary = get_formulary()
    const user = new User(formulary.name, formulary.telephone, formulary.email)
    database.insert_user(user)
}


const refresh_registers = ()=>{
    const container = document.querySelector(".registers")
    const registers = database.get_users()

    container.innerHTML = ''
    registers.map((user)=>{
        const paragraph = document.createElement('p')
        paragraph.innerHTML = `Name: ${user.name} Telephone: ${user.telephone} Email: ${user.email}`
        container.appendChild(paragraph)
    })

}


const write_button_click = ()=>{
    write_register() 
    refresh_registers()
    clear_formulary()
}


const database = new DataBase('teste.db')
const write_button = document.querySelector('#write-button')
write_button.addEventListener('click', write_button_click)
