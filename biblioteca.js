const biblioteca = {
    estante: [],

    adicionarLivro(livro) {
        this.estante.push(livro);
        console.log(`Livro adicionado: ${livro.nome}`);
    }
};


biblioteca.adicionarLivro({
    nome: "O_Reino_das_Sombras_Violetas",
    autor: "Autor Desconhecido",
    genero: "Fantasia",
    categoria: "Aventura"
});

biblioteca.adicionarLivro({
    nome: "A_Coroa_dos_Dragões",
    autor: "Autor Desconhecido",
    genero: "Fantasia",
    categoria: "Aventura"
});

biblioteca.adicionarLivro({
    nome: "O_Último_Feiticeiro",
    autor: "Autor Desconhecido",
    genero: "Fantasia",
    categoria: "Magia"
});

biblioteca.adicionarLivro({
    nome: "As_Crônicas_de_Eldoria",
    autor: "Autor Desconhecido",
    genero: "Fantasia",
    categoria: "Épico"
});

biblioteca.adicionarLivro({
    nome: "A_Espada_da_Lua_Negra",
    autor: "Autor Desconhecido",
    genero: "Fantasia",
    categoria: "Aventura"
});

console.log("Estante:");
console.log(biblioteca.estante);