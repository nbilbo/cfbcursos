
const numero_objetos = document.querySelector('#numero-objetos')
const button_adicionar = document.querySelector('#button-adicionar')
const button_limpar = document.querySelector('#button-limpar')
const input_quantidade = document.querySelector('#input-quantidade')
const palco = document.querySelector(".palco")

let largura_palco = palco.offsetWidth
let altura_palco = palco.offsetHeight
let bolas = []

class Bolinha {
    constructor() {
        // valores rgb.
        let r = Math.floor(Math.random()*255)
        let g = Math.floor(Math.random()*255)
        let b = Math.floor(Math.random()*255)
        
        // tamanho da bolinha.
        this.tamanho = Math.floor(Math.random()*10) + 10

        // posição x e y.
        this.posicao_x = Math.random()*(largura_palco-this.tamanho)
        this.posicao_y = Math.random()*(altura_palco-this.tamanho)

        // velocidade
        this.velocidade_x = Math.floor(Math.random()*2)+0.5
        this.velocidade_y = Math.floor(Math.random()*2)+0.5

        // direcao
        this.direcao_x = Math.random()*10 > 5 ? 1:-1
        this.direcao_y = Math.random()*10 > 5 ? 1:-1
    }
}

/*atuazalida o elemento que mostra a quantidade de bolinhas atual.*/
atualizar_numero_objetos = ()=>{
    numero_objetos.innerText = bolas.length
}

/*
atualiza as variaveis largura_palco e altura_palco sempre que a
tela for redimensionada.
*/
window.addEventListener('resize', ()=>{
    largura_palco = palco.offsetWidth
    altura_palco = palco.offsetHeight
    console.log(largura_palco, altura_palco)
})

/*cria novas bolinhas*/
button_adicionar.addEventListener('click', ()=>{
    // quantidade a ser adicionada.
    const quantidade = input_quantidade.value

    if(quantidade > 0) {
        // instanciar nova bolinha.
        for(indice=0; indice<quantidade; quantidade++) {
        }

        // no fianl atualizamos os elementos.
        atualizar_numero_objetos()
    }
})


/*destroi todas as bolinhas.*/
button_limpar.addEventListener('click', ()=>{
    bolas.map((bola)=>{
        // remover bolinha.
    })
})
