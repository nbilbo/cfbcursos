const set_message = (message)=>{
    const element_message = document.querySelector('.message')
    element_message.innerText = message
}


const update_message = () => {
    const endpoint = 'https://catfact.ninja/fact'

    fetch(endpoint)
        .then((response) => { return response.json() })
        .then((data) => { set_message(data.fact) })
}


setInterval(update_message, 5000)

