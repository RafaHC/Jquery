var tempoInicial = $('#tempo-dig').text();

var botaoRenicia = $('#reniciar');

var frase = $('.frase').text();

var numeroPalavras = frase.split(" ").length; 

var tamanhoFrase = $("#tamanho-frase");
tamanhoFrase.text(numeroPalavras);

var campoDig = $('.campo-dig');

function confereDadosDoTexto(){
	
		campoDig.on('input', function(){
		numeroCaracteres = campoDig.val().length + ' caracteres';	
		numeroPalavras = ((campoDig.val().split(' ').length)) + ' palavras';
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
					}
					
					
			},1000);

	});

};
confereDadosDoTexto();
inicializaCronometro();


botaoRenicia.click(function(){
	campoDig.attr('disabled', false);
	campoDig.val('');
	campoDig.css('background-color','white')
	$('#contador-palavras').text(0);
	$('#contador-caracteres').text(0);
	$('#tempo-dig').text(tempoInicial);
	inicializaCronometro();
	confereDadosDoTexto();

});
