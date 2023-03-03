/*
Anotações sobre declaração e definiciões de classes.
*/

// super classe.
class Automovel {
    // um atributo estático
    static disponivel = true

    // definindo um método.
    constructor(marca) {

        // defindo um atributo.
        this.marca = marca
    }
    
    // definindo outro método.
    apresentar() {
        console.log("-=-=-=-=-=-=-=-=-=-=-=")
        console.log("Apresentacao:")
        console.log(`Marca: ${this.marca}`)
        console.log("-=-=-=-=-=-=-=-=-=-=-=")
    }

    // Um método estático.
    static acelerar() {
        console.log("acelerando veiculo...")
        console.log("vrum...")
    }
}


// sub classe.
class Carro extends Automovel {

    // sobrescrevendo um método.
    constructor(marca, cor) {

        // chamando um método da super classe.
        super(marca)
        this.cor = cor
    }
}


// instanciando classes.
const carro = new Carro()

// chamando um método.
carro.apresentar()

// chamando um método estático.
Automovel.acelerar()

