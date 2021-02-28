/**
 * @file Testes Unitários do Carro
 * @author Gleidson Braga 
 */

const { Carro } = require('../../src/classes');

describe("Carro Test", () => {

    let carro;

    beforeEach(() => {
        carro = new Carro("Tesla Model Y", "Prata");
    });

    test("Carro deverá iniciar inicializar desligado", () => {
        expect(carro._ligado).toBeFalsy();
    });

    test("Carro deve ligar após a solicitação", () => {
        carro.ligar();
        expect(carro._ligado).toBeTruthy();
    });

    test("Carro não pode ser ligado duas vezes", () => {
        carro.ligar();
        expect(carro.ligar()).toThrow("Carro já está ligado");
    });

    test("Carro não pode ser desligado, caso estiver desligado", () => {
        expect(carro.desligar()).toThrow("Carro já está desligado");
    })

    test("Carro liga e desliga normalmente", () => {
        carro.ligar();
        expect(carro._ligado).toBeTruthy();
        carro.desligar();
        expect(carro._ligado).toBeFalsy();
    });
    test("Carro não pode andar desligado", () => {
        expect(carro.andar(100)).toThrow("Carro não está ligado, ligue-o para andar.")
    })

    test("Carro não deve andar sem gasolina", () => {
        carro.ligar();
        expect(carro.andar(100)).toThrow("Carro não possui combustivel suficiente para andar.")
    });

    test("Carro não pode abstecer ligado", () => {
        expect(carro.abstecer(100)).toThrow("Carro não pode ser abastecido ligado");
    });

    test("Carro deve conseguir andar com gasolina", () => {
        carro.abstecer(100);
        expect(carro._combustivel).toBe(100);
        carro.ligar();
        carro.andar(5);
        carro.desligar();
        expect(carro._kmRodado).toBe(5);
        expect(carro._combustivel).toBe(40);
    });

    test("Quantidade gasta de combustivel deve obdecer a regra", () => {
        carro.abstecer(60);
        carro.ligar();
        carro.andar(5);
        carro.desligar();

        carro.abstecer(63);
        carro.ligar();
        carro.andar(7, 'ESTRADA'); 
        carro.desligar();

        expect(carro._kmRodado).toBe(12);
        expect(carro._combustivel).toBe(0);
    });
 });