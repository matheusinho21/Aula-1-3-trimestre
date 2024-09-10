const usuarios = [
    {nome:"Carlos",idade:32},
    {nome:"Ana",idade:28},
    {nome:"Felipe",idade:40},
];

// Encontrando um objeto
const ana = usuarios.find(usuario => usuario.nome === "Ana");
console.log(ana);

//Filtrando objetos
const usuariosAcimaDe30 = usuarios.filter(usuario => usuario.idade > 30);
console.log(usuariosAcimaDe30);

//Ordenando objetos por idade
const usuariosOrdenadosPorldade = usuarios.sort((a,b) => a.idade - b.idade);
console.log(usuariosOrdenadosPordade);






