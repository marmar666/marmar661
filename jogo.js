var altura = 0
var largura = 0
var vida = 1
var tempo = 10
var criarMosquitoTempo = 1500
var nivel = window.location.search //busca apenas o ? e os parametros
nivel = nivel.replace('?','')

if(nivel == 'normal')
{
criarMosquitoTempo = 1500
}
else if(nivel == 'dificil')
{
criarMosquitoTempo = 1000
}
else if(nivel == 'chuck')
{
criarMosquitoTempo = 750
}


function AjustaTamanhoPalcoJogo()
{
largura = window.innerWidth
altura = window.innerHeight
console.log(altura,largura)
}

AjustaTamanhoPalcoJogo();
var cronometro = setInterval(function(){
	if(tempo < 0)
	{
		clearInterval(cronometro)
		clearInterval(criaMosquito)
			alert('vitoria')
		window.location.href="vitoria.html"
	}
	else
	{
		document.getElementById('cronometro').innerHTML = tempo
			tempo -=1
	}
	

},1000)
function PosicaoRandom()
{

	if(document.getElementById('mosquito'))
	{

		document.getElementById('mosquito').remove()

		document.getElementById('v' + vida).src = "imagens/coracao_vazio.png"
				vida++
		
		if (vida>3)
		{
			window.location.href="fim_de_jogo.html"
		}
	}
	var PosicaoX = Math.floor(Math.random() * largura) -200
	var PosicaoY = Math.floor(Math.random() * altura) 
	
	if (PosicaoY > window.innerHeight || PosicaoX > window.innerWidth)
	{
		PosicaoY = window.innerWidth
		PosicaoX = window.innerHeight - 200
	}

	PosicaoX = PosicaoX < 0 ? 0 : PosicaoX
	PosicaoY = PosicaoY < 0 ? 0 : PosicaoY
	
	console.log(window.innerWidth,  window.innerHeight)
	var mosquito = document.createElement('img')
	mosquito.src = 'imagens/mosca.png'
	mosquito.className = TamanhoAleatorio() + ' '+ mudarLado()
	mosquito.style.left = PosicaoX + 'px'
	mosquito.style.top = PosicaoY + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito'
	mosquito.onclick = function() {
		this.remove()
	}

	document.body.appendChild(mosquito)
	}

console.log(TamanhoAleatorio())

function TamanhoAleatorio() 
{
	var classe = Math.floor(Math.random() * 3)

	switch(classe)
	{
		case 0:
			return 'mosquito1'

		case 1:
			return 'mosquito2'
		case 2:
			return 'mosquito3'
	}


}
function mudarLado()
{
	var lado = Math.floor(Math.random() * 4)

		switch(lado)
		{
			case 0:
				return 'LadoA'
			case 1:
				return 'LadoB'
			case 2:
				return 'LadoC'
			case 3:
				return 'LadoD'
		}

}



