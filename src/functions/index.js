/**
 * @file Arquivo que representa funções de negocio ou validações de campos
 * @author Gleidson Braga 
 */


/**
 * Recebe um CPF e valida sua autenciadade de acordo com as normas
 * @see http://www.dbins.com.br/dica/como-funciona-a-logica-da-validacao-do-cpf
 * @param {string} cpf - CPF para validação
 * @returns {boolean} expressão booleana com resultado da validação
 */
const validadorCPF = (cpf) => {
    // TODO: Implementar função
}

/**
 * Recebe um número telefonico formatado e valida sua formatação
 * @example
 * +55 (31) 98585-0202, +55 (11) 3333-4444
 * @param {string} telefone - número telefonico formatado 
 * @returns {boolean} expressão booleana com resultado da validação
 */

const validadorTelefone = (telefone) => {

}

/**
 * Recebe nome e sobre nome e valida se está tudo certo
 * @param {string} nome - string com nome e sobre nome
 * @returns {boolean} expressão booleana com resultado da validação
 */
const validadorNomeSobrenome = (nome) => {
    // TODO: Implementar função
}
/**
 * Verifica se a data passada tem o formado DD/MM/YYYY
 * @param {string} data - data no formato dd/mm/yyyy 
 * @returns {boolean} expressão booleana com resultado da validação
 */
const validadorDeFormatoDeData = (data) => {
    // TODO: Implementar função
}

/**
 * Converte mês numerico do ano em string.
 * @example
 * 0 = Janeiro, 1 = Fevereiro ...
 * @param {number} mes - mês do ano 
 * @returns {string} nome do mês enviado
 */
const conversorMesNumericoParaString = (mes) => {
    // TODO: Implementar função
}
/**
 * Converte uma quantidade de dias em anos
 * @example
 * 365 = 1, ...
 * @param {number} dias - horas passadas
 * @param {boolean} bissexto - o ano é bisexto? 
 * @returns {number} número relativo a dias
 */
const conversorDeDiasParaAnos = (dias, bissexto = false) => {
    // TODO: Implementar função
}

/**
 * Converte uma quantidade de horas em dias
 * @example
 * 24 = 1, 48 = 2, 0 = 0, 12 = 0.5
 * @param {number} horas - dias passados
 * @returns {number} número relativos em horas
 */
const conversorDeHorasParaDias = (horas) => {
    // TODO: Implementar função
}

module.exports = {
    validadorCPF,
    conversorMesNumericoParaString,
    validadorTelefone,
    validadorDeFormatoDeData,
    validadorNomeSobrenome,
    conversorDeHorasParaDias,
    conversorDeDiasParaAnos
}