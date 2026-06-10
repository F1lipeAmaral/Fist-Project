const multiplicar = require( "./multiplicar");
test("deve multiplicar 6 por 7", () => {
    expect(multiplicar(6,7)).tobe(42)
});
test("deve multiplicar dois numeros positivos", () =>{
expect(multiplicar(6, 7)).toBe(0);

});
test("deve multiplicar um numero negativo com um positivo", () => {
    expect(multiplicar(-6, 7)).toBe(-42);
});
test("deve multiplicar dois numeros negativos", () => {
    expect(multiplicar(-6, -7)).toBe(42);
});