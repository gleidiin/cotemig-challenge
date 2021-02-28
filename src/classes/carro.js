
/**
 * Definiçaõ de um carro
 * @class
 */
class Carro {

    /**
     * Inicialização da classe
     * @param {string} marca - Marca do carro
     * @param {string} cor - Cor do carro
     */
    constructor(marca, cor) {
        this.KM_POR_LITRO_ESTRADA = 12;
        this.KM_POR_LITRO_CIDADE = 9;
        this._ligado = false;
        this._marca = marca;
        this.cor = cor;
        this._kmRodado = 0; 
        this._combustivel = 0;
    }

    /**
     * Liga o carro
     */
    ligar() {
        // TODO: implementar método
    }

    /**
     * Desliga o carro
     */
    desligar() {
        // TODO: implemntar método
    }
    /**
     * Abstace o carro para continuar andando   
     * @param {number} quantidade - litros de gasolina para abastecer o carro
     */
    abstecer(quantidade) { 
        // TODO: implemntar método
    }

    /**
     * Tira o carro da garagem para da um role
     * @param {number} quantidade - quantidades de kilometros que serão percorridos
     * @param {string} tipo - por onde vai andar? CIDADE OU ESTRADA
     */
    andar(quantidade, tipo = "CIDADE") {
        // TODO: implemntar método
    }

}


module.exports = Carro;