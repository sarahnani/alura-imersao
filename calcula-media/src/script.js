function calcular () {
	var nome = (document.getElementById ("nome")).value;
	var primeiroBimestre = parseInt(document.getElementById ("primeiroBimestre").value);
	var segundoBimestre = parseInt(document.getElementById ("segundoBimestre").value);
	var terceiroBimestre = parseInt(document.getElementById ("terceiroBimestre").value);
	var quartoBimestre = parseInt(document.getElementById ("quartoBimestre").value);
	var mediaBimestres = (primeiroBimestre + segundoBimestre + terceiroBimestre + quartoBimestre)/4;
	console.log (mediaBimestres);
	
	var mostrarResultado = "";
	if (mediaBimestres < 6) {
		mostrarResultado = "reprovado! Estude mais da próxima vez!";
	} else if (mediaBimestres < 7) {
		mostrarResultado = "de SAC! Mais um pouquinho você tinha passado, por isso te daremos outra chance, então estude mais para a porva ein!";
	} else {
		mostrarResultado = "aprovado! Parabéns!! Aquelas horinhas a mais nos estudos valeram a pena não é mesmo?!";
	}
	console.log (mostrarResultado);
	
	var resposta = "Sua nota é " + mediaBimestres + " e você está " + mostrarResultado;
	console.log(resposta);
	document.getElementById ("resultadoMedia").innerHTML = resposta;
}