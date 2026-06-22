const produto = {
    nome: "iphone 11 pro",
    marca: "apple",
    preco: 1500.00,
  };
  for ( let chave in produto ) {
    console.log(chave, produto[chave]);
  }

console.log(Object.keys(produto));
console.log(Object.values(produto));
