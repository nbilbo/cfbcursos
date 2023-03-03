
const user_input = ()=>{
    return document.querySelector('#user-input').value
}

const copy_click = ()=>{
    navigator.clipboard.writeText(user_input())
}

const create_binds = ()=>{
    const copy_button = document.querySelector('#copy')
    copy_button.addEventListener('click', copy_click)
}

const main = ()=>{
    create_binds()
}

main()
