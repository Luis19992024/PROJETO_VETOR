let vetor = [2, 3, 4, 7, 8];
let numero = 4;
let saida = " ";


function buscarElemento(){
 numero = 4; 
 vetor = [2, 3, 4, 7, 8];  

for(let i = 0; i<vetor.length; i++){
if(vetor[i]===numero){
saida =("Valor encontrado no vetor! " +"N°: " + vetor[i] + " na posição " + i);
break;
}
if(i===vetor.length-1){
saida =("Valor não encontrado!");
}
return saida;
}
}
let resultado = buscarElemento();
console.log(resultado);