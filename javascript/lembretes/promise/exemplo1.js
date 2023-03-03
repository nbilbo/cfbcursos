const minha_promesa = new Promise((resolve, reject)=>{
    let resultado = false

    if(resultado) 
        resolve({'frase': 'Tudo certo'})
    else
        reject({'frase': 'Tudo errado'})
    
})

minha_promesa.then((resultado)=>{
    console.log(`Resultado: ${resultado}`)
})

minha_promesa.catch((resultado)=>{
    console.log(`Resultado: ${resultado}`)
})

