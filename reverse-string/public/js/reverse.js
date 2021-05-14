function init() {
    var reverseStringElem = document.getElementById('texto');

    document.getElementById("voltar").onclick = function() {
        window.location.href = "../../../index.html";
    }

    document.getElementById('reverter').onclick = function() {
        reverseStringNow(reverseStringElem.value);
    }

    document.getElementById('limpar').onclick = function() {
        document.getElementById('oResultado').innerText = "";
    }
}

function reverseStringNow(text) {
    let newStringReverted = "";

    for (let i = text.length - 1; i >= 0; i--) {
        newStringReverted += text[i];
    }

    showResult(newStringReverted);
}

function showResult(text) {
    let resultElem = document.getElementById('oResultado')
    resultElem.innerText = resultElem.innerText + "\n" + text;
}