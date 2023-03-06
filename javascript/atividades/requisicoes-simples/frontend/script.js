
const atualizar_clima = ()=>{
    let endpoint = 'http://127.0.0.1:8000/clima/'

    // fazendo a requisição para a api.
    fetch(endpoint)
        // se tudo der certo, obtemos os dados retornados pela api
        // e atualizamos os elementos do dom.
        .then((response)=>{ return response.json() })
        .then((data)=>{
            document.querySelector('#temperature').innerHTML = `${data.temperatura}`
            document.querySelector('#nivel').innerHTML = `${data.nivel}`
            document.querySelector('#pression').innerHTML = `${data.pressao}`
        })
        // se algo der errado, uma mensagem de erro é exibida.
        .catch((reason)=>{
            clearInterval(api_interval)
            window.alert(reason)
        })

}
let api_interval = null
api_interval = setInterval(atualizar_clima, 1000)