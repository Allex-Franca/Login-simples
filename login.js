const prompt = require('prompt-sync')();

let usuario = prompt("digite seu usuario: ");
let senha = prompt("digite sua senha: ");
if (usuario = usuario === "admin" && senha === "1234"){
    console.log("Login realizado com sucesso")
}
else{console.log("Usuário ou senha inválidos")}
