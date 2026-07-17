const dados = [123, "texto", true, "palavra", 99, "JS"] ;

//console.log(dados);

for (let valor of dados) {
  if (typeof(valor) == 'string') {
    console.log(valor);
  }
}
