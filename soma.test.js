import { test, expect} from '@jest/globals';

const soma = require('./soma');
test('deve somar dois numeros', () => {
    const resultado = soma(2,5);
    expect(resultado).toBe(7);
});