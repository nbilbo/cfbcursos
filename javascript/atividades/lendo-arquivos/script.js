const endpoint = './registros.txt'

// fazendo a requisição para o arquivo.
fetch(endpoint)
    // convertendo o resultado para texto.
    .then((response)=>{ return response.text() })
    .then((data)=>{ 
        registros = data.split('\n')
        // obtendo o nome e idade em cada uma das linhas.
        registros.map((registro)=>{
            const split = registro.split(',')
            const nome = split[0]
            const idade = split[1]
            const elemento = document.createElement('p')

            // adicionando um novo elemento ao dom.
            elemento.innerText = `${nome} ${idade}`
            document.querySelector('.main').appendChild(elemento)

        })
    })