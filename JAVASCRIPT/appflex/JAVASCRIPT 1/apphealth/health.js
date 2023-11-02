<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>APP - Health</title>
</head>

<body>
    <div id="main">
        <h1>APP - Health</h1>
        <form name="frmIMC">
            <input type="number" name="txtIdade" placeholder="Idade" class="caixa">
            <input type="number" name="txtPeso" placeholder="Peso" class="caixa">
            <input type="number" name="txtAltura" placeholder="Altura" class="caixa">
            <p>
                sexo:
                <input type="radio" name="grupo" id="m">masulino
                <input type="radio" name="grupo" id="f">Femenino

            </p>
            <p>
                <select name="nivel" id="atividade">
                    <option value="">Selecione o nivel de atividade fisica </option>
                    <option value="1.2">Sedentario (trabalho de scritorio)</option>
                    <option value="1.375">Exercicio Leve (1 a 2 dia por semana )</option>
                    <option value="1.55">Exercicio Moderado (3 a 4 dias por semana)</option>
                    <option value="1.725">Exercicio pesado (6 a 7 dias por semana)</option>
                    <option value="1.9">Ativo (7 dias ou mais por semana)</option>
                </select>
            </p>
            <P>
                <input type="button" value="Calcular" onclick="calcular()">
            <input type="reset" value="Limpar" onclick="limpar()">
            </P>
        </form>
        <img src="icons/reset.png" alt="marcador IMC" id="grafico">
        <h3 id="imc"></h3>
        <h4 id="status"></h4>

        <img src="icons/heart.png" alt="coração" id="grafico">
        <h3 id="freq"> </h3>
        <h3>Calorias por dia: </h3> 
        <hr>
        <h4 id="calorias"></h4>
        
    </div>
    <script src="health.js"></script>

</body>

</html>
