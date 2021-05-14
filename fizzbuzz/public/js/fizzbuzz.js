/**
 * FizzBuzz
 * 
 * Divisível por 3 imprime 'Fizz',
 * Divisível por 5 imprime 'Buzz',
 * Divisível por 3 e 5 imprime 'FizzBuzz',
 * Se não for um número imprime 'Não é um número',
 * Se não for divisível por 3 ou 5 imprime o valor.
 */

function init(){
    var valor = document.getElementById("valor"),
        resultado = document.getElementById("oResultado");

    document.getElementById("limpar").onclick = function() {
        valor.value = "";
        resultado.value = "";
    };

    document.getElementById("voltar").onclick = function() {
        window.location.href = "../../../index.html";
    }

    document.getElementById("executar").onclick = function() {
        let obj = {
            "val": valor.value, 
            "elemRes": resultado
        };

        mostrarResultado(obj);
    }
}

function mostrarResultado(obj) {
    
    if (isNaN(obj.val)) {
        obj.elemRes.innerText = "Não é um número.";
    } else if (obj.val % 3 == 0 && obj.val % 5 == 0) {
        obj.elemRes.innerText = "FizzBuzz";
    } else if (obj.val % 3 == 0) {
        obj.elemRes.innerText = "Fizz";
    } else if (obj.val % 5 == 0) {
        obj.elemRes.innerText = "Buzz";
    } else {
        obj.elemRes.innerText = obj.val;
    }
    
}