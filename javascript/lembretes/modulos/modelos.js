// criando minhas variaveis.
class Usuario {
    constructor(nome, email, senha) {
        this.nome = nome
        this.email = email
        this.senha = senha
    }
}

class Publicacao {
    constructor(titulo, mensagem) {
        this.titulo = titulo
        this.mensagem = mensagem
    }
}


// exportando minhas variaveis (um módulo só pode ter um export default).
export default Usuario
export {Publicacao}
