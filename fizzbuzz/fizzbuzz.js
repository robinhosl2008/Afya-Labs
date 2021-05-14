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
        resultado = document.getElementById("resultado");

    document.getElementById("limpar").onclick = function() {
        valor.value = "";
        resultado.value = "";
    };

    document.getElementById("voltar").onclick = function() {
        window.location.href = "../index.html";
    }

    document.getElementById("validar").onclick = function() {
        let obj = {
            "val": valor.value, 
            "elemRes": resultado
        };

        mostrarResultado(obj);
    }
}

function mostrarResultado(obj) {
    
    if (isNaN(obj.val)) {
        obj.elemRes.value = "Não é um número.";
    } else if (obj.val % 3 == 0 && obj.val % 5 == 0) {
        obj.elemRes.value = "FizzBuzz";
    } else if (obj.val % 3 == 0) {
        obj.elemRes.value = "Fizz";
    } else if (obj.val % 5 == 0) {
        obj.elemRes.value = "Buzz";
    } else {
        obj.elemRes.value = obj.val;
    }
    
}

/*
trabalho com a linguagem php
mas também javascript. Mais no front-end.
Trabalhei no ministério da saúde e lá 
também trabalhava com php. E ainda estou com
php.
*/