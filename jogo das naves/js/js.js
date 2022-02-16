function start() {//inicio da funcao start
    $("#inicio").hide();//chama div inicio e hide oculta
    //denro da div fundoGame cria outra div com jogador 
    $("#fundoGame").append("<div id='jogador' class='anima1'></div>");
    //denro da div fundoGame cria outra div com inimigo1
    $("#fundoGame").append("<div id='inimigo1' class='anima2'></div>");
    //denro da div fundoGame cria outra div com inimigo2
    $("#fundoGame").append("<div id='inimigo2'></div>");
    //denro da div fundoGame cria outra div com amigo
    $("#fundoGame").append("<div id='amigo' class='anima3'></div>");
    $("#fundoGame").append("<div id='placar'></div>");
    $("#fundoGame").append("<div id='energia'></div>");

    //principais variaveis do jogo
    var energiaAtual = 3;
    var pontos = 0;
    var salvos = 0;
    var perdidos = 0;
    var fimJogo = false;
    var podeAtirar = true;
    var jogo = {};
    var velocidade = 5;
    var posicaoY = parseInt(Math.random() * 334);// gera valor aleatorio entre 0 e 334
    var TECLA = {
        setaCima: 38,
        setaBaixo: 40,
        d: 68
    }
    jogo.pressionou = [];

    //pega id do audio no html
    var somDisparo = document.getElementById("somDisparo");
    var somExplosao = document.getElementById("somExplosao");
    var musica = document.getElementById("musica");
    var somGameOver = document.getElementById("somGameOver");
    var somPerdido = document.getElementById("somPerdido");
    var somResgate = document.getElementById("somResgate");

    //musica em loop// ended significa fim
    musica.addEventListener("ended", function () {
        musica.currentTime = 0;
        musica.play();
    }, false);
    musica.play();

    //verifica se o usuário pressionou alguma tecla
    $(document).keydown(function (e) {//keydown identifica q o usuario pressionou uma tecla
        //caso tenha uma tecla pressionada, a chama a funcao
        jogo.pressionou[e.which] = true;
    });

    $(document).keyup(function (e) {//
        jogo.pressionou[e.which] = false;
    });


    //gameLoop
    jogo.timer = setInterval(loop, 30);

    function loop() {
        moveFundo();
        moveJogador();
        moveInimigo1();
        moveInimigo2();
        moveAmigo();
        colisao();
        placar();
        energia();
    }//fim da funcao loop

    // funcção que movimenta o fundo do jogo
    function moveFundo() {
        //pega posição do background-position da div fundoGame por padrao é zero
        esquerda = parseInt($("#fundoGame").css("background-position"));
        //posição do background -1
        $("#fundoGame").css("background-position", esquerda - 1);
    }// fim da funcao moveFundo

    function moveJogador() {//inivio funcao moveJogador
        if (jogo.pressionou[TECLA.setaCima]) {
            //topo recebe o valor top da div jogador
            var topo = parseInt($("#jogador").css("top"));
            $("#jogador").css("top", topo - 10);
            if (topo <= 0) {//limita o helicoptero dentro da div  pra cima
                $("#jogador").css("top", topo + 10);
            }
        }
        if (jogo.pressionou[TECLA.setaBaixo]) {
            //topo recebe o valor top da div jogador         
            var topo = parseInt($("#jogador").css("top"));
            $("#jogador").css("top", topo + 10);
            if (topo >= 434) {//limita o helicoptero dentro da div  pra baixo
                $("#jogador").css("top", topo - 10);
            }
        }
        if (jogo.pressionou[TECLA.d]) {
            //chama funcao disparo
            disparo();
        }
    }//fim da funcao moveJogador

    function moveInimigo1() {//inicio funcao moveInimigo1
        posicaoX = parseInt($("#inimigo1").css("left"));
        $("#inimigo1").css("left", posicaoX - velocidade);//posicaoX move para esquerda
        $("#inimigo1").css("top", posicaoY);//posicaoY gera n aleatorio n eixo y

        if (posicaoX <= 0) {
            posicaoY = parseInt(Math.random() * 334);// gera novo valor aleatorio
            $("#inimigo1").css("left", 694);//694 é o limite da div do lado direito
            $("#inimigo1").css("top", posicaoY);
        }
    }//fim funcao inimigo1

    function moveInimigo2() {//inicio da funcao inimigo2
        posicaoX = parseInt($("#inimigo2").css("left"));//pega propriedade left da div inimigo2
        $("#inimigo2").css("left", posicaoX - 3);//subtrai posicaoX-3 da propriedade left
        if (posicaoX <= 0) {
            $("#inimigo2").css("left", 775);
        }
    }//fim da funcao inimigo2

    function moveAmigo() {//inicio da funcio moveAmigo
        posicaoX = parseInt($("#amigo").css("left"));//pega propriedade left da div amgo
        $("#amigo").css("left", posicaoX + 1);
        if (posicaoX > 906) {
            $("#amigo").css("left", 0);
        }
    }//fim da funcao moveAmigo

    function disparo() {//incio da funcao disparo
        if (podeAtirar === true) {//inicio podeAtirar
            somDisparo.play();//dispara som
            podeAtirar = false;

            topo = parseInt($("#jogador").css("top"));//pega posicao top do jogador
            posicaoX = parseInt($("#jogador").css("left"))//pega posicao let do jogador
            tirox = posicaoX + 190;//coloca posicao de tiro a frente do jogador
            topoTiro = topo + 40;//coloca a altura do tiro n msm do jogador
            $("#fundoGame").append("<div id='disparo'></div>");
            $("#disparo").css("top", topoTiro);
            $("#disparo").css("left", tirox);

            //a div dispao vai caminhar
            //window.setInterval comando para criar uma funcao de tempo
            // chama uma funcao(executaDisparo, 30 a cada 30 segundos)
            var tempoDisparo = window.setInterval(executaDisparo, 30)
        }//fim podeAtirar

        function executaDisparo() {//inicio da funcao executaDisparo
            posicaoX = parseInt($("#disparo").css("left"));//pega posicao atual do disparo
            $("#disparo").css("left", posicaoX + 15);//posicaoX + 15 faz caminhar 15 unidades
            if (posicaoX > 900) {//qnd atingir o limite do disparo n div
                window.clearInterval(tempoDisparo);//remove a varialvel
                tempoDisparo = null;//zera a variável
                $("#disparo").remove();//remove o disparo da tela
                podeAtirar = true;//permite o usuario atirar novamente
            }
        }//fim da funcao executaDisparo
    }//fim da funcao disparo

    //inicio da funcao colisao
    function colisao() {
        //  armazena colisao entre personagens
        var colisao1 = ($("#jogador").collision($("#inimigo1")));
        var colisao2 = ($("#jogador").collision($("#inimigo2")));
        var colisao3 = ($("#disparo").collision($("#inimigo1")));
        var colisao4 = ($("#disparo").collision($("#inimigo2")));
        var colisao5 = ($("#jogador").collision($("#amigo")));
        var colisao6 = ($("#inimigo2").collision($("#amigo")));

        //colisao entre jogador com inimigo1
        if (colisao1.length > 0) {//verifica se colisao ta preenchida(se houve colisao)
            energiaAtual--;
            inimigo1X = parseInt($("#inimigo1").css("left")); //pega posicao do inimigo1 n colisao
            inimigo1Y = parseInt($("#inimigo1").css("top"));//pega altura do inimigo1 n colisao

            posicaoY = parseInt(Math.random() * 334);// gera posicao aleatoria
            $("#inimigo1").css("left", 694);//coloca inimigo1 no lado esquerdo
            $("#inimigo1").css("top", posicaoY);//colo inimigo na altura gerada pelo n aleatorio
            explosao1(inimigo1X, inimigo1Y);//chama funcao passando local atual da colisao

        }
        //colisao entre jogador com inimigo2
        if (colisao2.length > 0) {//verifica se houve colisao
            energiaAtual--;
            inimigo2X = parseInt($("#inimigo2").css("left"));//pga posicao d inimigo2
            inimigo2Y = parseInt($("#inimigo2").css("top"));//pga posicao d inimigo2
            explosao2(inimigo2X, inimigo2Y);
            $("#inimigo2").remove();// remove inimigo2
            reposionaInimigo2();
        }
        //colisao entre disparo com inimigo 1
        if (colisao3.length > 0) {
            velocidade += 0.3; //aumenta vlocidade do jogo
            pontos += 100;
            inimigo1X = parseInt($("#inimigo1").css("left"));//pega posi. inimigo1
            inimigo1Y = parseInt($("#inimigo1").css("top"));//pega altura d inimigo1

            explosao1(inimigo1X, inimigo1Y);
            $("#disparo").css("left", 950);//950 finaliza a funcao disparo, tirano d tela

            posicaoY = parseInt(Math.random() * 334);// gera posicao aleatoria
            $("#inimigo1").css("left", 694);//coloca inimigo1 no lado esquerdo
            $("#inimigo1").css("top", posicaoY);//colo inimigo na altura gerada pelo n aleatorio

        }//fim disparo com inimigo1

        //colisao entre disparo com inimigo 2
        if (colisao4.length > 0) {
            pontos += 50;
            inimigo2X = parseInt($("#inimigo2").css("left"));//pega posi inimigo2
            inimigo2Y = parseInt($("#inimigo2").css("top"));
            $("#inimigo2").remove();//remove inimigo2 da tela

            explosao2(inimigo2X, inimigo2Y);//chama a funcao explosao 
            $("#disparo").css("left", 950);//finaliza a funcao disparo, tirando da tela
            reposionaInimigo2();
        }//fim do disparo com inimigo 2

        //colisao entre jogador com amigo
        if (colisao5.length > 0) {
            somResgate.play();
            salvos++;
            reposicionaAmigo();
            $("#amigo").remove();
        }
        //colisao entre inimigo2 e amigo
        if (colisao6.length > 0) {
            perdidos++;
            amigoX = parseInt($("#amigo").css("left"));
            amigoy = parseInt($("#amigo").css("top"));
            explosao3(amigoX, amigoy);
            $("#amigo").remove();
            reposicionaAmigo();
        }

    }//fim da funcao colisao 

    //Explosao 1
    function explosao1(inimigo1X, inimigo1Y) {
        somExplosao.play();
        $("#fundoGame").append("<div id='explosao1'></div");//cria div explosao
        $("#explosao1").css("background-image", "url(imgs/explosao.png)");//pega img explosao e coloca n div explosao
        var div = $("#explosao1");
        div.css("top", inimigo1Y);//relaciona img explosa a posicao do inimigo
        div.css("left", inimigo1X);//relaciona img explosa a posicao do inimigo
        div.animate({ width: 200, opacity: 0 }, "slow");//cria animação da explosão

        var tempoExplosao1 = window.setInterval(removeExplosao1, 1000);
        function removeExplosao1() {
            div.remove();
            window.clearInterval(tempoExplosao1);
            tempoExplosao1 = null;
        }
    }//fim explosao 1

    //inicio da explosao 2
    function explosao2(inimigo2X, inimigo2Y) {
        somExplosao.play();
        $("#fundoGame").append("<div id='explosao2'></div");//cria div explosao
        $("#explosao2").css("background-image", "url(imgs/explosao.png)");//pega img explosao e coloca n div explosao
        var div2 = $("#explosao2");
        div2.css("top", inimigo2Y);//relaciona img explosa a posicao do inimigo
        div2.css("left", inimigo2X);//relaciona img explosa a posicao do inimigo
        div2.animate({ width: 200, opacity: 0 }, "slow");//cria animação da explosão

        var tempoExplosao2 = window.setInterval(removeExplosao2, 1000);
        function removeExplosao2() {
            div2.remove();
            window.clearInterval(tempoExplosao2);
            tempoExplosao2 = null;
        }
    } // Fim da função explosao2()

    //inicio da explosao 3
    function explosao3(amigoX, amigoy) {
        somPerdido.play();
        $("#fundoGame").append("<div id='explosao3' class='anima4'></div>");
        $("#explosao3").css("left", amigoX);
        $("#explosao3").css("top", amigoy);
        var tempoExplosao3 = setInterval(removeExplosao3, 1000);
        function removeExplosao3() {
            $("#explosao3").remove();
            window.clearInterval(tempoExplosao3);
            tempoExplosao3 = null;
        }
    }//fim explosao 3

    //inicio reposicionaInimigo2
    function reposionaInimigo2() {
        // reposicionaInimigo2();
        var tempoColisao4 = window.setInterval(reposiciona4, 2000);//apos 2seg chama reposiciona4
        function reposiciona4() {
            window.clearInterval(tempoColisao4);//limpa a variavel tempoColisao4
            tempoColisao4 = null;
            if (fimJogo === false) {//se jo n acabou
                $("#fundoGame").append("<div id='inimigo2'></div>");//cria inimigo2 
            }
        }
    }//fim da funcao reposicionaInimigo2

    //inicio reposicionaAmigo
    function reposicionaAmigo() {
        var tempoAmigo = window.setInterval(reposiciona6, 6000);// funcao d temo, apos 6 segundos
        function reposiciona6() {
            window.clearInterval(tempoAmigo);
            tempoAmigo = null;
            if (fimJogo === false) {
                //  $("#fundoGame").append("<div id='amigo' class='anima3'></div>");
                $("#fundoGame").append("<div id='amigo' class='anima3'></div>");
            }
        }
    }//fim reposicionaAmigo

    //funcao placar
    function placar() {
        $("#placar").html("<h2> Pontos: " + pontos + " Salvos: " + salvos + " Perdidos: " + perdidos + "</h2>");
    }//fim placar

    //inicio funcao energia
    function energia() {
        if (energiaAtual === 3) {
            $("#energia").css("background-image", "url(imgs/energia3.png)");
        }
        if (energiaAtual === 2) {
            $("#energia").css("background-image", "url(imgs/energia2.png)");
        }
        if (energiaAtual === 1) {
            $("#energia").css("background-image", "url(imgs/energia1.png)");
        }
        if (energiaAtual === 0) {
            $("#energia").css("background-image", "url(imgs/energia0.png");
            //chama funcao Gamer Over
            gameOver();
        }
    }//fim da funcao energia

    //inicio funcao GameOver
    function gameOver() {
        fimJogo = true;
        musica.pause();
        somGameOver.play();

        window.clearInterval(jogo.timer);//pega o loop e para
        jogo.timer = null;

        $("#jogador").remove();
        $("#inimigo1").remove();
        $("#inimigo2").remove();
        $("#amigo").remove();

        $("#fundoGame").append("<div id='fim'></div>")

        //$("#fim").html("<h1>Game Over</h1><p>Sua Pontuação: " + pontos + " </p>" + "<div id='renicia' onClick='reiniciaJogo()'><h3>Jogar Novamente </h3></div>");

        $("#fim").html("<h1> Game Over </h1><p>Sua pontuação foi: " + pontos + " </p>" + "<div id='reinicia' onClick='reiniciaJogo()'><h3>Jogar Novamente</h3></div>");

    }//fim da funcao gameOver
}//fim da funcao start


function reiniciaJogo() {
    start();
    $("#fim").remove();
    somGameOver.pause();

} //Fim da função reiniciaJogo
