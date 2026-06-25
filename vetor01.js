let vetorA= [20, 5, 50, 40, 80];
let vetorB= [10, 30, 50, 40, 8];


function buscar(vA, vB){
let resultado = [];
for(let i = 0; i<vetorA.length; i++){
 let elemento = vA[i]; 

if(vB.includes(elemento)){
resultado.push("Elemento encontrado no vetor B " + elemento);
}else{
resultado.push("Elemento não encontrado no vetor B");   
}
}
return resultado;
}
let resultadoFinal = buscar(vetorA, vetorB);

console.log(resultadoFinal.join("\n"));

