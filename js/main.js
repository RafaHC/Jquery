/*Nunca esquecer de colocar os caracteres(#,.) para se referenciar com o HTML*/

var frase = $('.frase').text();
var tamanhoFrase = (frase.split(/\S+/).length) - 1;
console.log(tamanhoFrase);
$('#tamanho-frase').text(tamanhoFrase + ' palavras');

var tempoInicial = $('#tempo-dig').text();
var botaoRenicia = $('#reniciar');
var usuario = prompt('Qual o seu nome?','Ex:Rafael');;
var campoDig = $('.campo-dig');

function confereDadosDoTexto(){
	
		campoDig.on('input', function(){
		numeroCaracteres = campoDig.val().length + ' caracteres';	
		numeroPalavras = ((campoDig.val().split(/\S+/).length) - 1) + ' palavras';
		$('#contador-palavras').text(numeroPalavras);
		$('#contador-caracteres').text(numeroCaracteres);
	});

};

function inicializaCronometro(){
	botaoRenicia.attr('disabled', true);
	var tempoDig = $('#tempo-dig').text();
	campoDig.one('focus', function(){
			var cornometroId = setInterval(function(){
					tempoDig--;
					$('#tempo-dig').text(tempoDig);
					if (tempoDig<1) {
						campoDig.attr('disabled', true);
						clearInterval(cornometroId);
						campoDig.css('background-color','lightgray');
						botaoRenicia.attr('disabled', false);
						inserePlacar();
					}
					
					
			},1000);

	});

};

function remover(e){
	e.preventDefault();
	$(this).closest('tr').remove();
}

function inserePlacar(){
	var placar = $('.placar');
	var corpoDaTabela = placar.find('tbody');
	
	var numeroPalavras = $('#contador-palavras').text();
	var linha = novaLinha(usuario,numeroPalavras);
	var botaoRemover = linha.find(".botao-remover");
	botaoRemover.click(remover);
	corpoDaTabela.prepend(linha);
};


$('.botao-remover').on('click',remover);

confereDadosDoTexto();
inicializaCronometro();



function novaLinha(usuario,palavras){
	var linha = $('<tr>');
	var colunaUsuario = $('<td>').text(usuario);
	var colunaPalavra = $('<td>').text(palavras);
	var link = $('<a>').attr("href",'#').addClass('botao-remover');
	var icone = $('<i>').addClass('small').addClass('material-icons').text('delete');
	var colunaRemover = $('<td>');
	link.append(icone);
	colunaRemover.append(link);
	linha.append(colunaUsuario);
	linha.append(colunaPalavra);
	linha.append(colunaRemover);

	return linha;

}


botaoRenicia.click(function(){
	campoDig.attr('disabled', false);
	campoDig.val('');
	campoDig.css('background-color','white')
	$('#contador-palavras').text(0);
	$('#contador-caracteres').text(0);
	$('#tempo-dig').text(tempoInicial);
	confereDadosDoTexto();
	inicializaCronometro();
	usuario = prompt('Qual o seu nome?','Ex:Rafael');
	

});
