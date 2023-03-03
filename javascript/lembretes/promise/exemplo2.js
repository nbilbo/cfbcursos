// Sim, uma função que retorna um objeto to tipo promise.
const promessa = ()=>{

    // definindo um objeto do tipo promise.
    const promessa_interna = new Promise((resolve, reject)=>{
        const resultado = false

        if(resultado) {
            resolve("Tudo certo") 
        }
        else {
            reject("Tudo errado")
        }
    })
    
    // retornando um objeto do tipo promise.
    return promessa_interna
}

// chamando nossa função.
promessa()

// chamando o método then.
// (lembre-se, nossa função retorna um objeto do tipo promise.)
.then((resultado)=>{
    console.log(resultado)
})

// chamando o método reject.
.catch((resultado)=>{
    console.log(resultado)
})

// observação final: Cara. isso me parece bem caotico.

