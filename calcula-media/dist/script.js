function calcular () {
	var nome = (document.getElementById ("nome")).value;
	var primeiroBimestre = parseInt(document.getElementById ("primeiroBimestre").value);
	var segundoBimestre = parseInt(document.getElementById ("segundoBimestre").value);
	var terceiroBimestre = parseInt(document.getElementById ("terceiroBimestre").value);
	var quartoBimestre = parseInt(document.getElementById ("quartoBimestre").value);
	var mediaBimestres = (primeiroBimestre + segundoBimestre + terceiroBimestre + quartoBimestre)/4;
	console.log (mediaBimestres);

	/* if (primeiroBimestre == null || segundoBimestre == null){
		document.getElementById ("resultadoMedia").innerHTML = "Ops! Parece que você não preencheu todos os campos..";
	} else if (nome == null){
		document.getElementById ("resultadoMedia").innerHTML = "Você poderia preencher seu nome, por favor?";
	} */                            // --> TESTE

	var mostrarResultado = "";
	if (mediaBimestres < 6) {
		mostrarResultado = "reprovade! Estude mais da próxima vez!";
	} else if (mediaBimestres < 7) {
		mostrarResultado = "de SAC! Mais um pouquinho você tinha passado, por isso te daremos outra chance, então estude mais para a prova ein!";
	} else {
		mostrarResultado = "aprovade! Parabéns!! Aquelas horinhas a mais nos estudos valeram a pena não é mesmo?!";
	}
	console.log (mostrarResultado);
	
	var resposta = nome + ", sua nota é " + mediaBimestres + " e você está " + mostrarResultado;
	console.log(resposta);
	document.getElementById ("resultadoMedia").innerHTML = resposta;
}

function limpar () {
	document.getElementById("nome").value = null;
	document.getElementById("primeiroBimestre").value = null;
	document.getElementById("segundoBimestre").value = null;
	document.getElementById("terceiroBimestre").value = null;
	document.getElementById("quartoBimestre").value = null;
	document.getElementById ("resultadoMedia").innerHTML = null;
}