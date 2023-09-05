"use strict";
let imgsrc = 1;
let clicks = 0;
let comumCards = [`imagens/cartas/cachorro.jpg`,`imagens/cartas/pombo.jpg`,`imagens/cartas/gato.jpg`,`imagens/cartas/coelho.jpg`,`imagens/cartas/lesma.jpg`];
let comumNomes = [`Cachorro`,`Pombo`,`Gato`,`Coelho`,`Lesma`];
let albumc = [];
let incomumCards = [`imagens/cartas/esquilo.jpg`,`imagens/cartas/arara.jpg`,`imagens/cartas/cobra.jpg`,`imagens/cartas/lagartixa.jpg`,`imagens/cartas/barata.jpg`];
let incomumNomes = [`Esquilo`, `Arara`,`Cobra`,`Lagartixa`,`Barata`];
let albumi = [];
let rareCards = [`imagens/cartas/escorpiao.jpg`,`imagens/cartas/tucano.jpg`,`imagens/cartas/girafa.jpg`,`imagens/cartas/morcego.jpg`,`imagens/cartas/corvo.jpg`];
let rareNomes = [`Escorpião`,`Tucano`,`Girafa`,`Morcego`,`Corvo`];
let albumr = [];
let epicCards = [`imagens/cartas/cobraazul.jpg`,`imagens/cartas/baleia.jpg`,`imagens/cartas/onca.jpg`,`imagens/cartas/lesmadomar.jpg`,`imagens/cartas/iguana.jpg`];
let epicNomes = [`Cobra-Azul`,`Baleia`,`Onça`,`Lesma-do-Mar`,`Iguana`];
let albume = [];
let legendaryCards =[`imagens/cartas/megalodon.jpg`,`imagens/cartas/trex.jpg`,`imagens/cartas/dragão.jpg`,`imagens/cartas/godzilla.jpg`,`imagens/cartas/ness.jpg`];
let legendaryNomes = [`Megalodon`,`T-Rex`,`Dragão`,`Godzilla`,`Ness`];
let albuml = [];
let allcards = 0;
let clickPlayer = 0;
let xpplayer = 0;
let lvlplayer = 1;
let dinheiro = 0;
let maxcards = comumCards.length+incomumCards.length+rareCards.length+epicCards.length+legendaryCards.length;
document.getElementById("moneyJogador").innerHTML=`${dinheiro}`;

document.getElementById("xpJogador").innerHTML=`${xpplayer}<br>Próximo Nível: ${0}`;


document.getElementById("btnFarm").addEventListener("click",function(){
    if(lvlplayer > 1){
        clicks++
        xpplayer+=lvlplayer
        dinheiro+=lvlplayer
    }else{
        clicks++
        xpplayer++
        dinheiro++
    }
    document.getElementById("moneyJogador").innerHTML=`${dinheiro}`;
    document.getElementById("clicksJogador").innerHTML=String(clicks);
    document.getElementById("moneyFicha").innerHTML=`${dinheiro}`;
    document.getElementById("xpJogador").innerHTML=`${xpplayer}<br>Próximo Nível: ${(100*(lvlplayer*lvlplayer))-xpplayer}`;
});

document.getElementById("btnUp").addEventListener("click",function(){
    if(xpplayer>=(100*(lvlplayer*lvlplayer))){
        xpplayer = xpplayer-(100*(lvlplayer*lvlplayer));
        lvlplayer++;
    }
    document.getElementById("xpJogador").innerHTML=`${xpplayer}<br>Próximo Nível: ${(100*(lvlplayer*lvlplayer))-xpplayer}`;
    document.getElementById("levelJogador").innerHTML=`${lvlplayer}`;
});

document.getElementById("fotojogador").src = `imagens/foto1.png`;

document.getElementById("ant").addEventListener("click",function(){
    if(imgsrc > 1){
        imgsrc--
    }else{
        imgsrc = 5
    }
    imagemSelect();
});
document.getElementById("prox").addEventListener("click",function(){
    if(imgsrc < 5){
        imgsrc++
    }else{
        imgsrc = 1
    }
    imagemSelect();
});

function imagemSelect(){
    let img = `foto${imgsrc}.png`;
    document.getElementById("fotojogador").src = `imagens/${img}`
}

document.getElementById("btnPronto").addEventListener("click", function(){
    let nomejogador = String(document.getElementById("nomeJogador").value);
    document.getElementById("nomePerfil").innerHTML = nomejogador;
    let apelidojogador = String(document.getElementById("apelidoJogador").value);
    document.getElementById("nomePerfil").innerHTML += ' "'+apelidojogador+'"';
    document.getElementById("fotoPerfil").src = `imagens/foto${imgsrc}.png`;
    document.getElementById("moneyFicha").innerHTML=`${dinheiro}`;
    document.getElementById("clicksJogador").innerHTML=String(clicks);
    document.getElementById("levelJogador").innerHTML=`${lvlplayer}`;
    document.getElementById("xpJogador").innerHTML=`${xpplayer}<br>Próximo Nível: ${(100*(lvlplayer*lvlplayer))-xpplayer}`;
});

document.getElementById("btnPack").addEventListener("click",function(){
    if(dinheiro>=100){
        for(let i=1;i<=5;i++){
            let cardgen = parseInt(Math.random()*100);
            if(cardgen >= 0 && cardgen <=50){
                let numb = comumCards.length;
                let sort = parseInt(Math.random()*numb);
                document.getElementById(`fig${i}`).src=`${comumCards[sort]}`;
                document.getElementById(`figcap${i}`).innerHTML=`<p id="comum">Carta Comum</p>`;
                albumc[sort] = comumCards[sort];
                if(albumc.length>0){
                    for(let contac=1;contac<=5;contac++){
                        let index = contac-1;
                        if(albumc[index] != null){
                            document.getElementById(`figAlbum${contac}c`).src=`${comumCards[index]}`
                            document.getElementById(`figAlbumT${contac}c`).innerHTML =`${comumNomes[index]}`
                        }
                    }
                }
                allcards += 1
                xpplayer += 10
            }else if(cardgen > 50 && cardgen <=80){
                let numb = incomumCards.length;
                let sort = parseInt(Math.random()*numb);
                document.getElementById(`fig${i}`).src=`${incomumCards[sort]}`;
                document.getElementById(`figcap${i}`).innerHTML=`<p id="incomum">Carta Incomum</p>`;
                albumi[sort] = incomumCards[sort];
                if(albumi.length>0){
                    for(let contac=1;contac<=5;contac++){
                        let index = contac-1;
                        if(albumi[index]!= null){
                            document.getElementById(`figAlbum${contac}i`).src=`${incomumCards[index]}`
                            document.getElementById(`figAlbumT${contac}i`).innerHTML =`${incomumNomes[index]}`
                        }
                    }
                }
                allcards += 1
                xpplayer += 30
            }else if(cardgen > 80 && cardgen <=90){
                let numb = rareCards.length;
                let sort = parseInt(Math.random()*numb);
                document.getElementById(`fig${i}`).src=`${rareCards[sort]}`;
                document.getElementById(`figcap${i}`).innerHTML=`<p id="raro">Carta Rara</p>`;
                albumr[sort] = rareCards[sort];
                if(albumr.length>0){
                    for(let contac=1;contac<=5;contac++){
                        let index = contac-1;
                        if(albumr[index]!= null){
                            document.getElementById(`figAlbum${contac}r`).src=`${rareCards[index]}`
                            document.getElementById(`figAlbumT${contac}r`).innerHTML =`${rareNomes[index]}`
                        }
                    }
                }
                xpplayer+= 50
                allcards += 1
            }else if(cardgen > 90 && cardgen <99){
                let numb = epicCards.length;
                let sort = parseInt(Math.random()*numb);
                document.getElementById(`fig${i}`).src=`${epicCards[sort]}`;
                document.getElementById(`figcap${i}`).innerHTML=`<p id="epico">Carta Épica</p>`;
                albume[sort] = epicCards[sort];
                if(albume.length>0){
                    for(let contac=1;contac<=5;contac++){
                        let index = contac-1;
                        if(albume[index]!= null){
                            document.getElementById(`figAlbum${contac}e`).src=`${epicCards[index]}`
                            document.getElementById(`figAlbumT${contac}e`).innerHTML =`${epicNomes[index]}`
                        }
                    }
                }
                xpplayer+=1000
                allcards += 1
            }else if(cardgen >= 99){
                let numb = legendaryCards.length;
                let sort = parseInt(Math.random()*numb);
                document.getElementById(`fig${i}`).src=`${legendaryCards[sort]}`;
                document.getElementById(`figcap${i}`).innerHTML=`<p id="lendario">CARTA LENDÁRIA!!!</p>`;
                albuml[sort] = legendaryCards[sort];
                if(albuml.length>0){
                    for(let contac=1;contac<=5;contac++){
                        let index = contac-1;
                        if(albuml[index]!= null){
                            document.getElementById(`figAlbum${contac}l`).src=`${legendaryCards[index]}`
                            document.getElementById(`figAlbumT${contac}l`).innerHTML=`${legendaryNomes[index]}`
                        }
                    }
                }
                allcards += 1
                xpplayer += 10000
            }
        }
        dinheiro = dinheiro-100
        document.getElementById("moneyJogador").innerHTML=`${dinheiro}`;
        document.getElementById("moneyFicha").innerHTML=`${dinheiro}`;
        document.getElementById("levelJogador").innerHTML=`${lvlplayer}`;
        document.getElementById("xpJogador").innerHTML=`${xpplayer}<br>Próximo Nível: ${(100*(lvlplayer*lvlplayer))-xpplayer}`;
    }
});
