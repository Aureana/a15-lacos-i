let pedido 
let conta = 0;

pedido = prompt("Deseja mais coxinhas? digite ' s '  para sim e ' n ' para Não ")
while(pedido !== "n" ){
      pedido = prompt("Deseja mais coxinhas? digite ' s '  para sim e ' n ' para Não ")
      conta = conta + 2.50
	
	console.log(pedido);
   
}
console.log("Valor total da conta é: ",conta)

/*
let pedido 
let conta = 0;

pedido = prompt("Deseja mais coxinhas? digite ' s '  para sim e ' n ' para Não ")

while(pedido === "s" ){
      pedido = prompt("Deseja mais coxinhas? digite ' s '  para sim e ' n ' para Não ")
      conta = conta + 2.50
	
	console.log(pedido);
   
}
console.log(conta)
*/

/*
Utilizando o laço `while`, escreva um código que recebe um `prompt` perguntando se a pessoa deseja comer mais coxinhas. “S” deve representar “sim”, e “N” deve representar “não”. Crie também uma `let conta` para guardar o valor total.

Toda vez que a resposta for **sim**, o laço deve se repetir, e devemos adicionar R$2.50 ao valor total. Quando a resposta não for **sim**, devemos imprimir o valor total da conta.
*/