const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  test('Testando funcao etapa por etapa', () => {
    expect(handlerElephants()).toBeUndefined();
    expect(handlerElephants('string')).not.toBe('Parâmetro inválido, é necessário uma string');
    expect(handlerElephants(2)).toBe('Parâmetro inválido, é necessário uma string');
    expect(handlerElephants('count')).toBe(4);
    expect(handlerElephants('names')).toContain('Jefferson');
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
    expect(handlerElephants('location')).toBe('NW');
    expect(handlerElephants('popularity')).toBeGreaterThanOrEqual(5);
    expect(handlerElephants('availability')).not.toContain('Monday');
  });
});
