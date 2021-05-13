<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="fizzbuzz.css">
    <script src="fizzbuzz.js"></script>
    <title>FizzBuzz</title>
</head>
<body>
    <div class="form">
        <h2>Exercício FizzBuzz <button class="volvar"><a href="../index.php">Voltar</a></button></h2>
        <label for="valor">Informe um valor</label>
        <input type="number" name="valor" id="valor">
        <button onclick="">Validar</button>
        <button id="botao-limpar">Limpar</button>
    </div>
    <div class="res">
        <label for="resultado">Resultado</label>
        <input type="text" name="resultado" id="resultado">
    </div>

    <script>init();</script>
</body>
</html>