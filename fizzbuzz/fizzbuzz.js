

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

        if (valida()) {
            validarNumero();
        }
    }
}

function valida(params) {
    
}

function validarNumero(obj) {
    
    if (obj.val )
    
}

/*
trabalho com a linguagem php
mas também javascript. Mais no front-end.
Trabalhei no ministério da saúde e lá 
também trabalhava com php. E ainda estou com
php.
*/