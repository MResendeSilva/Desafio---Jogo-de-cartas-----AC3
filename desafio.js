
    const cartas = [ //Criando array com objetos contendo informações de cada carta
        { 
            nome: "capitao_america",
            forca: 3,
            resistencia: 3,
            img: "./cartas/capitao_america.png"
        },
        {
            nome: "deadpool",
            forca: 1,
            resistencia: 1,
            img: "./cartas/deadpool.png"
        },
        {
            nome: "homem_de_ferro",
            forca: 5,
            resistencia: 0,
            img: "./cartas/homem_de_ferro.png"
        },
        {
            nome: "mercurio",
            forca: 1,
            resistencia: 2,
            img: "./cartas/mercurio.png"
        },
        {
            nome: "mulher_invisivel",
            forca: 2,
            resistencia: 2,
            img: "./cartas/mulher_invisivel.png"
        },
        {
            nome: "sr_fantastico",
            forca: 3,
            resistencia: 2,
            img: "./cartas/sr_fantastico.png"
        },
        {
            nome: "thor",
            forca: 3,
            resistencia: 4,
            img: "./cartas/thor.png"
        },
        {
            nome: "venom",
            forca: 3,
            resistencia: 1,
            img: "./cartas/venom.png"
        },
        {
            nome: "viuva_negra",
            forca: 2,
            resistencia: 1,
            img: "./cartas/viuva_negra.png"
        },
        {
            nome: "wolverine",
            forca: 2,
            resistencia: 3,
            img: "./cartas/wolverine.png"
        },
    ]   //Criando variaveis utilizadas ao decorrer do código
    let baralho_jogador = []
    let baralho_adversario = []
    let baralho_batalha_jogador = []
    let baralho_batalha_adversario = []
    let pontos_jogador = 0
    let pontos_adversario = 0
        //Estrutura de repetição para aparecer cartas o deck geral
    for (let index = 0; index < cartas.length; index++) {
        const cartaPrincipal = cartas[index];
        div_cartas.innerHTML += `<img src="${cartaPrincipal.img}" alt="" width="120px">`
    }

    window.onload = sortear() //Inicia função de sorteio de cartas ao carregar a página

    function sortear() {
        for (let index = 0; index < 5; index++) { //Estrutura de repetição utilizada para escolher quantidade de carta correta para cada jogador
            let sorteada = parseInt(Math.random() * 10) //Variaveis setadas para escolher cada carta dos decks de forma automática
            let sorteadaAdversario = parseInt(Math.random() * 10)

            if (baralho_jogador.indexOf(cartas[sorteada]) > -1) { //Estrutura que identifica possíveis cartas repetidas e as troca
                while (true) {
                    sorteada = parseInt(Math.random() * 10)
                    if (baralho_jogador.indexOf(cartas[sorteada]) < 0) {
                        baralho_jogador.push(cartas[sorteada])
                        break
                    }
                }
            } else {
                baralho_jogador.push(cartas[sorteada])
            }

            if (baralho_adversario.indexOf(cartas[sorteadaAdversario]) > -1) { //Estrutura que identifica possíveis cartas repetidas e as troca
                while (true) {
                    sorteadaAdversario = parseInt(Math.random() * 10)
                    if (baralho_adversario.indexOf(cartas[sorteadaAdversario]) < 0) {
                        baralho_adversario.push(cartas[sorteadaAdversario])
                        break
                    }
                }
            } else {
                baralho_adversario.push(cartas[sorteadaAdversario])
            }
        }

        for (let index = 0; index < 5; index++) { //Estrutura de repetição que faz as cartas de cada deck aparecer
            const cartaAtualJogador = baralho_jogador[index];
            const cartaAtualAdversario = baralho_adversario[index];
            div_baralho_jogador.innerHTML += `<img src="${cartaAtualJogador.img}" alt="" width="120px">`
            div_baralho_adversario.innerHTML += `<img src="${cartaAtualAdversario.img}" alt="" width="120px">`
        }

    }

    function simular() { //Inicio da função de batalha
        div_baralho_jogador.innerHTML = `` //Limpa as cartas que estão na tela
        div_baralho_adversario.innerHTML = ``
        let cartaJogador = parseInt(Math.random() * baralho_jogador.length) //Variaveis que selecionam cartas de forma randomica para a batalha
        let cartaAdversario = parseInt(Math.random() * baralho_adversario.length)

        if (baralho_batalha_jogador.indexOf(baralho_jogador[cartaJogador]) > -1) { //Estrutura utilizada para não selecionar carta que já foi utilizada
            while (baralho_batalha_jogador.indexOf(baralho_jogador[cartaJogador]) > -1) {
                cartaJogador = parseInt(Math.random() * baralho_jogador.length)
            }
            baralho_batalha_jogador.push(baralho_jogador[cartaJogador])
        } else {
            baralho_batalha_jogador.push(baralho_jogador[cartaJogador])
        }

        if (baralho_batalha_adversario.indexOf(baralho_adversario[cartaAdversario]) > -1) { //Estrutura utilizada para não selecionar carta que já foi utilizada
            while (baralho_batalha_adversario.indexOf(baralho_adversario[cartaAdversario]) > -1) {
                cartaAdversario = parseInt(Math.random() * baralho_adversario.length)
            }
            baralho_batalha_adversario.push(baralho_adversario[cartaAdversario])
        } else {
            baralho_batalha_adversario.push(baralho_adversario[cartaAdversario])
        }

        for (let index = 0; index < 5; index++) { //Estrutura de repetição que faz aparecer apenas as cartas que ainda não foram selecionadas
            const cartaAtualJogador = baralho_jogador[index]
            const cartaAtualAdversario = baralho_adversario[index]
            if (baralho_batalha_jogador.indexOf(cartaAtualJogador) < 0) {
                div_baralho_jogador.innerHTML += `<img src="${cartaAtualJogador.img}" alt="" width="120px">`
            }

            if (baralho_batalha_adversario.indexOf(cartaAtualAdversario) < 0) {
                div_baralho_adversario.innerHTML += `<img src="${cartaAtualAdversario.img}" alt="" width="120px">`
            }
        }
        div_batalha.innerHTML = `<img src="${baralho_jogador[cartaJogador].img}" alt="" width="200px"> X <img src="${baralho_adversario[cartaAdversario].img}" alt="" width="200px">` //Mostra as cartas que estão batalhando

        let poder_jogador = baralho_jogador[cartaJogador].forca - baralho_adversario[cartaAdversario].resistencia //Variáveis que calculam poder de cada carta
        let poder_adversario = baralho_adversario[cartaAdversario].forca - baralho_jogador[cartaJogador].resistencia
        if (poder_jogador > poder_adversario) { //Estrutura que valida qual carta ganhou a batalha
            div_batalha.innerHTML += `<br><span style="color:green;font-weight:700">O jogador venceu esse round</span>`
            pontos_jogador += 3
        } else if (poder_jogador < poder_adversario) {
            div_batalha.innerHTML += `<br><span style="color:red;font-weight:700">O adversario venceu esse round</span>`
            pontos_adversario += 3
        } else {
            div_batalha.innerHTML += `<br><span style="color:blue;font-weight:700">Esse round empatou</span>`
            pontos_adversario++
            pontos_jogador++
        }
        s1.innerHTML = pontos_jogador
        s2.innerHTML = pontos_adversario

        if (baralho_batalha_adversario.length == 5 || baralho_batalha_jogador.length == 5) { //Estrutura responsável por setar término do jogo e calcular vencedor
            div_batalha.innerHTML += `<br><h4>Contabilizando pontos...</h4>`
            setInterval(() => {
                if (pontos_jogador > pontos_adversario) {
                    div_background.innerHTML = `<h1><span style="color:green">O jogador é o grande vencedor da partida com ${pontos_jogador} pontos!</span></h1>`
                    div_background.innerHTML += `Para jogar novamente basta reiniciar a página!`
                } else if (pontos_jogador < pontos_adversario) {
                    div_background.innerHTML = `<h1><span style="color:red">O adversário venceu a partida com ${pontos_adversario} pontos!</span></h1>`
                    div_background.innerHTML += `Para jogar novamente basta reiniciar a página!`
                } else {
                    div_background.innerHTML = `<h1><span style="color:blue">Oloco meo! Ambos são igualmente bons!</h1>`
                    div_background.innerHTML += `Para jogar novamente basta reiniciar a página!`
                }
            }, 2000);
        }
    }
