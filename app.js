function ConverterDolar() {
  var valorElemento = document.getElementById('valor')
  var valor = valorElemento.value
  var valorEmDolarNumerico = parseFloat(valor)

  var valorEmReal = valorEmDolarNumerico * 5.21
  console.log(valorEmReal)

  var elementoValorConvertido = document.getElementById('valorConvertido')
  var valorConvertido = 'O valor em real é de R$ ' + valorEmReal
  elementoValorConvertido.innerHTML = valorConvertido
}

function ConverterEuro() {
  var valorElemento = document.getElementById('valor')
  var valor = valorElemento.value
  var valorEmEuroNumerico = parseFloat(valor)

  var valorEmReal = valorEmEuroNumerico * 5.2
  console.log(valorEmReal)

  var elementoValorConvertido = document.getElementById('valorConvertido')
  var valorConvertido = 'O valor em real é de R$ ' + valorEmReal
  elementoValorConvertido.innerHTML = valorConvertido
}

function ConverterLibra() {
  var valorElemento = document.getElementById('valor')
  var valor = valorElemento.value
  var valorEmLibraNumerico = parseFloat(valor)

  var valorEmReal = valorEmLibraNumerico * 5.99
  console.log(valorEmReal)

  var elementoValorConvertido = document.getElementById('valorConvertido')
  var valorConvertido = 'O valor em real é de R$ ' + valorEmReal
  elementoValorConvertido.innerHTML = valorConvertido
}

function ConverterCelsius() {
  var valorTemperatura = document.getElementById('grauC')
  var grau = valorTemperatura.value
  var grauEmCelsius = parseFloat(grau)

  var grauEmFahrenheit = grauEmCelsius * 1.8 + 32
  console.log(grauEmFahrenheit)

  var TemperaturaConvertida = document.getElementById('grauConvertido')
  var grauConvertido =
    'A temperatura convertida é de ' + grauEmFahrenheit + '°F'
  TemperaturaConvertida.innerHTML = grauConvertido
}

function ConverterKelvin() {
  var valorTemperatura = document.getElementById('grauK')
  var grau = valorTemperatura.value
  var grauEmCelsius = parseFloat(grau)

  var grauEmKelvin = grauEmCelsius + 273.15
  console.log(grauEmKelvin)

  var TemperaturaConvertida = document.getElementById('grauConvertidoK')
  var grauConvertidoK = 'A temperatura convertida é de ' + grauEmKelvin + 'K'
  TemperaturaConvertida.innerHTML = grauConvertidoK
}

function ConverterFahrenheit() {
  var valorTemperatura = document.getElementById('grauK')
  var grau = valorTemperatura.value
  var grauEmKelvin = parseFloat(grau)

  var grauEmFahrenheit1 = ((grauEmKelvin - 273.15) * 9) / 5 + 32
  console.log(grauEmFahrenheit1)

  var TemperaturaConvertida = document.getElementById('grauConvertidoF')
  var grauConvertidoF =
    'A temperatura convertida é de ' + grauEmFahrenheit1 + '°F'
  TemperaturaConvertida.innerHTML = grauConvertidoF
}

function ConverterBtc() {
  var valorDigitado = document.getElementById('btc')
  var valor = valorDigitado.value
  var valorEmReal = parseFloat(valor)

  var valorEmBtc = valorEmReal * 100060.16
  console.log(valorEmBtc)

  var elementoValorConvertido = document.getElementById('valorConvertido')
  var valorConvertido = 'O valor em real é de R$ ' + valorEmReal
  elementoValorConvertido.innerHTML = valorConvertido
}

function Chutar() {
  var numeroSecreto = parseInt(Math.random() * 11)
  var elementoResultado = document.getElementById('resultado')
  var chute = parseInt(document.getElementById('valor').value)
  console.log(chute)
  if (chute == numeroSecreto) {
    elementoResultado.innerHTML = 'Você acertou!!!'
  } else if (chute > 10 || chute < 0) {
    elementoResultado.innerHTML = 'Você deve digitar um número de 0 a 10'
  } else {
    elementoResultado.innerHTML =
      'Errou, o número secreto era o ' + numeroSecreto
  }
}
