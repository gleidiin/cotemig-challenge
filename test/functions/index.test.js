/**
 * @file Testes Unitários das Functions
 * @author Gleidson Braga 
 */

const { validadorTelefone, validadorNomeSobrenome, validadorDeFormatoDeData, validadorCPF,
        conversorMesNumericoParaString, conversorDeHorasParaDias, conversorDeDiasParaAnos } = require('../../src/functions');

describe("Functions Test", () => {

    test("Validador de Telefone - Deve validar corretamente", () => {
        expect(validadorTelefone("+55 (31) 98585-0202")).toBeTruthy();
        expect(validadorTelefone("+55 (21) 28585-0000")).toBeTruthy();
        expect(validadorTelefone("+55 (11) 80800-0301")).toBeTruthy();
    });

    test("Validador de Telefone - Deve validar corretamente", () => {
        expect(validadorTelefone("+55 (11) 4856-0975")).toBeTruthy();
        expect(validadorTelefone("+55 (31) 9563-9958")).toBeTruthy();
        expect(validadorTelefone("+55 (21) 3252-0081")).toBeTruthy();
    });

    test("Validador de Telefone - Deve acusar erro", () => {
        expect(validadorTelefone("")).toBeFalsy();
        expect(validadorTelefone(null)).toBeFalsy();
        expect(validadorTelefone(undefined)).toBeFalsy();
        expect(validadorTelefone(NaN)).toBeFalsy();
        expect(validadorTelefone("+55 ()")).toBeFalsy();
    });

    test("Validador de telefone - Deve acusar erro", () => {
        expect(validadorTelefone(" +55 (11) 4856-0975")).toBeFalsy();
        expect(validadorTelefone("+55 (11) 48560975")).toBeFalsy();
        expect(validadorTelefone("+55 (00) 3252-0081")).toBeFalsy();
        expect(validadorTelefone("+00 (00) 0000-0000")).toBeFalsy();
        expect(validadorTelefone("+00 (00) 00000-0000")).toBeFalsy();
        expect(validadorTelefone("+55 () 93252-3258")).toBeFalsy();
    });

    test("Validador de Nome e Sobrenome - Deve validar corretamente", () => {
        expect(validadorNomeSobrenome("Gleidson Braga")).toBeTruthy();
        expect(validadorNomeSobrenome("Ana Carolina Dias")).toBeTruthy();
        expect(validadorNomeSobrenome("Fernando Teixeira")).toBeTruthy();
        expect(validadorNomeSobrenome("Mateus Felipe")).toBeTruthy();
        expect(validadorNomeSobrenome("Samuel Rosa")).toBeTruthy();
    }); 

    test("Validador de Nome e Sobrenome - Deve acusar erro", () => {
        expect(validadorNomeSobrenome("Gleidson")).toBeFalsy();
        expect(validadorNomeSobrenome("")).toBeFalsy();
        expect(validadorNomeSobrenome(undefined)).toBeFalsy();
        expect(validadorNomeSobrenome(" Mateus")).toBeFalsy();
        expect(validadorNomeSobrenome(" Mateus ")).toBeFalsy();
        expect(validadorNomeSobrenome("Mateus -")).toBeFalsy();
        expect(validadorNomeSobrenome(null)).toBeFalsy();
    });

    test("Validador de Formato de Data - Deve validar corretamente", () => {
        expect(validadorDeFormatoDeData("07/11/2020")).toBeTruthy();
        expect(validadorDeFormatoDeData("02/10/2019")).toBeTruthy();
        expect(validadorDeFormatoDeData("01/01/2000")).toBeTruthy();
        expect(validadorDeFormatoDeData("12/06/2001")).toBeTruthy();
    });

    test("Validador de Formato de Data - Deve acusar erro", () => {
        expect(validadorDeFormatoDeData(undefined)).toBeFalsy();
        expect(validadorDeFormatoDeData(null)).toBeFalsy();
        expect(validadorDeFormatoDeData("00/00/0000")).toBeFalsy();
        expect(validadorDeFormatoDeData("01/00/0000")).toBeFalsy();
        expect(validadorDeFormatoDeData("00/01/0000")).toBeFalsy();
        expect(validadorDeFormatoDeData("1/1/2020")).toBeFalsy();
        expect(validadorDeFormatoDeData("34/10/2020")).toBeFalsy();
        expect(validadorDeFormatoDeData("29/15/2020")).toBeFalsy();
    });

    test("Validador de CPF - Deve validar corretamente", () => {
        expect(validadorCPF("329.504.630-10")).toBeTruthy();
        expect(validadorCPF("581.464.500-83")).toBeTruthy();
        expect(validadorCPF("399.026.480-02")).toBeTruthy();
        expect(validadorCPF("441.098.100-51")).toBeTruthy();
        expect(validadorCPF("357.537.210-10")).toBeTruthy();
        expect(validadorCPF("999.364.930-95")).toBeTruthy();
        expect(validadorCPF("548.449.970-41")).toBeTruthy();
    });

    test("Validador de CPF - Deve acusar erro", () => {
        expect(validadorCPF(undefined)).toBeFalsy();
        expect(validadorCPF(null)).toBeFalsy();
        expect(validadorCPF("000.000.000-00")).toBeFalsy();
        expect(validadorCPF("165.816.516-80")).toBeFalsy();
        expect(validadorCPF("958.486.513-20")).toBeFalsy();
        expect(validadorCPF("000.396.855-13")).toBeFalsy();
        expect(validadorCPF("659.879.641-35")).toBeFalsy();
        expect(validadorCPF("789.542.162-30")).toBeFalsy();
        expect(validadorCPF("895.416.896-90")).toBeFalsy();
        expect(validadorCPF("986.516.846-51")).toBeFalsy();
    });

});