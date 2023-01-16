    function tocaSom (seletorAudio) { //Função com parâmetros
      document.querySelector(idElementoAudio);

    }
    //Refêrencia
    
    const listaDeTeclas = document.querySelectorAll('.tecla');

    //Tocando som POM

    //para

     for (let contador = 0 ; contador < listaDeTeclas.length; contador++) {

        const tecla = listaDeTeclas[contador];
        const instrumento = tecla.classList[1];
        const idAudio = `#som_${instrumento}`; // Template string

        tecla.onclick = function () {
            tocaSom(idAudio);
        }  //Adicionando sons em todas as teclas

        tecla.onkeydown = function (event) { //Adicionando

            if (event.code === 'Space' || event.code === 'Enter' ) { //Estrutura de condicoes if e elser
                tecla.classList.add('ativa');
            }

        }    


        tecla.onkeyup = function () { //Removendo
            tecla.classList.remove('ativa');
        }
    }