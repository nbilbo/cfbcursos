class Carro {
    constructor() {
        this.x = 200
        this.y = 0
        this.largura = 50
        this.altura = 25
        this.velocidade = 10
        this.cor = 'red'
    }
}


const get_campo = ()=>{
    return document.querySelector('.campo')
}


const get_botao_esquerda = ()=>{
    return document.querySelector('#esquerda')
}


const get_botao_direta = ()=>{
    return document.querySelector('#direita')
}


const limpar_campo = ()=>{
    const campo = get_campo()
    campo.innerHTML = ''
}


const posicionar_carro = (carro)=>{
    const div_carro = document.createElement('div')
    div_carro.classList.add('carro')
    div_carro.style.backgroundColor = carro.cor
    div_carro.style.width = `${carro.largura}px`
    div_carro.style.height = `${carro.altura}px`
    div_carro.style.left = `${carro.x}px`

    const campo = get_campo()
    campo.appendChild(div_carro)
}


const mover_esquerda = (carro)=>{
    if(carro.x-carro.velocidade >= 0)
        carro.x -= carro.velocidade

    limpar_campo();
    posicionar_carro(carro)
}


const mover_direita = (carro)=>{
    if((carro.x+carro.largura)+carro.velocidade <= get_campo().offsetWidth)
        carro.x += carro.velocidade

    limpar_campo();
    posicionar_carro(carro)
}


const botao_esquerda_click = (carro)=>{
    clearInterval(animacao)
    animacao = setInterval(mover_esquerda, 20, carro)
}


const botao_direita_click = (carro)=>{
    clearInterval(animacao)
    animacao = setInterval(mover_direita, 20, carro)
}

const bind_botoes = (carro)=>{
    get_botao_esquerda().addEventListener('click', ()=>{
        botao_esquerda_click(carro)
    })

    get_botao_direta().addEventListener('click', ()=>{
        botao_direita_click(carro)
    })
}


const main = ()=>{
    const carro = new Carro()
    bind_botoes(carro)
    posicionar_carro(carro)
}

let animacao = null
main()
