/**
 * @file Testes Unitários das Variaveis
 * @author Gleidson Braga 
 */

const {validarNumerosPrimos, minimoMultiploComum, ordernarListaASC, ordernarListaDESC, somaDeMatriz, somaEntreDoisValores, somarPrimeiroEUltimoValor} = require('../../src/variables');


describe("Variables Test", () => {
    test("Validação dos números primos deve está correta", () => {
        expect(validarNumerosPrimos(2)).toBeTruthy();
        expect(validarNumerosPrimos(3)).toBeTruthy();
        expect(validarNumerosPrimos(7)).toBeTruthy();
        expect(validarNumerosPrimos(11)).toBeTruthy();
        expect(validarNumerosPrimos(53)).toBeTruthy();
        expect(validarNumerosPrimos(97)).toBeTruthy();
        expect(validarNumerosPrimos(1)).toBeFalsy();
        expect(validarNumerosPrimos(0)).toBeFalsy();
        expect(validarNumerosPrimos(21)).toBeFalsy();
        expect(validarNumerosPrimos(33)).toBeFalsy();
        expect(validarNumerosPrimos(78)).toBeFalsy();
    });

    test("O minimo multiplo comum deve está correto", () => {
        expect(minimoMultiploComum([12,9,3,4,2])).toBe(36);
        expect(minimoMultiploComum([5,10,15,22,85])).toBe(5610);
        expect(minimoMultiploComum([2,3,5,7,11])).toBe(2310);
        expect(minimoMultiploComum([2,3])).toBe(6);
        expect(minimoMultiploComum([6,3])).toBe(6);
    });

    test("A ordenação da lista ascendente deve está correta", () => {
        expect(ordernarListaASC(['maçã', 'banana', 'abacate', 'tomate', 'feijão'])).toBe([ 'abacate', 'banana', 'feijão','maçã', 'tomate']);
        expect(ordernarListaASC(['a', 'b'])).toBe(['a', 'b']);
        expect(ordernarListaASC([10, 9, 5, 0, 1, 3])).toBe([ 0, 1, 3, 5, 9, 10]);
        expect(ordernarListaASC(['cadeira', 'mesa', 'suporte', 'cabo', 'quadro'])).toBe([ 'cabo','cadeira', 'mesa', 'quadro', 'suporte']);
        expect(ordernarListaASC(['piso', 'teto', 'janela', 'porta'])).toBe(['janela','piso', 'porta', 'teto']);
        expect(ordernarListaASC(['inglês', 'português', 'espanhol'])).toBe(['espanhol','inglês', 'português']);
    });

    test("A ordenação da lista descendente deve está correta", () => {
        expect(ordernarListaDESC(['maçã', 'banana', 'abacate', 'tomate', 'feijão'])).toBe([ 'tomate','maçã', 'feijão', 'banana', 'abacate']);
        expect(ordernarListaDESC(['a', 'b'])).toBe([ 10, 9, 5, 3, 1, 0]);
        expect(ordernarListaDESC([10, 9, 5, 0, 1, 3])).toBe();
        expect(ordernarListaDESC(['cadeira', 'mesa', 'suporte', 'cabo', 'quadro'])).toBe([ 'suporte', 'quadro', 'mesa','cadeira', 'cabo']);
        expect(ordernarListaDESC(['piso', 'teto', 'janela', 'porta'])).toBe([ 'teto', 'porta','piso', 'janela']);
        expect(ordernarListaDESC(['inglês', 'português', 'espanhol'])).toBe(['português','inglês', 'espanhol']);
    });

    test("A soma de matrizes deve está correta", () => {
        expect(somaDeMatriz([[1,1], [1,1]], [[2,2], [2,2]])).toBe([[3,3], [3,3]]);
        expect(somaDeMatriz([[10, 2, 3], [58, 9, 354], [564, 15, 3]],[[44, 5, 3], [2, 88, 52], [3, 5, 88]])).toBe([[54,7,6], [60,97,406], [567,20,91]]);

    });

    test("A soma entre dois valores deve está correta", () => {
        expect(somaEntreDoisValores(1, 1)).toBe(2);
        expect(somaEntreDoisValores(5, 10)).toBe(15);
        expect(somaEntreDoisValores(1582, 6)).toBe(1588);
        expect(somaEntreDoisValores(15, 35)).toBe(50);
        expect(somaEntreDoisValores(25, 27)).toBe(52);
    });

    test("A soma do primeiro e o último valor deve está correta", () => {
        expect(somarPrimeiroEUltimoValor([1,3])).toBe(3);
        expect(somarPrimeiroEUltimoValor([1,2,,3,5,,5,8,9,,])).toBe(10);
        expect(somarPrimeiroEUltimoValor([1,5,10,10,,5,1,null])).toBe(2);
        expect(somarPrimeiroEUltimoValor([58,5,8,2,9,8,8])).toBe(66);
        expect(somarPrimeiroEUltimoValor([1.5,8,8,9,11,7,6,3.5])).toBe(5);
    });
});