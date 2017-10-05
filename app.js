var tarjetaArray = [];
var arrayInverso = [];
var number = 0;
var pedir = true;
var isvalid = false;
var suma = 0;
var resto = 0;
var par = false;

while (pedir){														// Se solicita numero de tarjeta
	var texto = prompt("Ingrese su número de tarjeta de credito");
	if (validaTexto(texto)){										// se valida que sea numerico
		pedir = false;
	}
}

document.write("El número de tarjeta Ingresado es: " + texto + "<br/><br/>");

// numero de prueba valido 0123765443210 // 0446667651

isvalid = isValidcard(texto);										// se valida numero de tarjeta
if (isvalid) {
	document.write("El número de Tarjeta es Válido");				// si valor retornado es true es valida
}
else{
	document.write("El número de Tarjeta NO es Válido");			// si valor retornado es false NO es valida
}

function isValidcard(texto) {										//función declarada
	for (var i = 0; i < texto.length; i++){
		tarjetaArray.push(texto.charAt(i));							// se guarda numero en un array
	}
	arrayInverso = tarjetaArray.reverse();							// se invierte array

	for (var j = 0; j < arrayInverso.length; j++){					// se recorre el array inverso
		if (par){													// se valida posicion par
			arrayInverso[j] *= 2;									// se duplica valor en posicion par
			if (arrayInverso[j] > 9){								// si valor es de dos digitos
				arrayInverso[j] = (arrayInverso[j] % 10) + 1;		// se suman los digitos
			}
		} 
		par = !par;													// se cambia valor a par/impar
		suma += arrayInverso[j];									// se suman numeros del array 
	}

	resto = suma % 10;												// se calcula el resto
	if (resto == 0) {												// si el resto es 0, se retorna true
		return true;
	}
}

console.log(arrayInverso);

function validaTexto(texto){										//se valida texto
	texto = texto.toString();
	var patronLetras = /^[a-zA-Z]*$/;								//patron solo permite letras
	var patronNumeros = /^\d*$/;									//patron solo permite numeros
	if(texto.search(patronLetras) && !texto.search(patronNumeros) && texto != ""){// se valida que solo permita numeros, no letras, no espacios
		return true;
	}
	else{
		return false;
	}
}

//module.exports = listAllValues;
