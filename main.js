    function tocaSom (idElementoAudio) { //Função com parâmetros

    document.querySelector(idElementoAudio).play();

    }


    //Refêrencias
    const listaDeTeclas = document.querySelectorAll('.tecla');

    //Tocando som POM

    let contador = 0;

    //enquanto, trabalhando com while

    while (contador < listaDeTeclas.length) {

        const tecla = listaDeTeclas[contador];

        const instrumento = tecla.classList[1];

        //console.log (instrumento)

        // Template string
        const idAudio = `#som_${instrumento}`;

        //'#som_(instrumento)'

        tecla.onclick = function () {
            tocaSom(idAudio);

        };  //Adicionando sons em todas as teclas

        contador = contador + 1;  
        //console.log(contador);
    }