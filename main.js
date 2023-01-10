    function tocaSom (idElementoAudio) { //Função com parâmetros

    document.querySelector(idElementoAudio).play();

    }


    //Refêrencias
    const listaDeTeclas = document.querySelectorAll('.tecla');

    //Tocando som POM

    let contador = 0;

    //enquanto, trabalhando com while

    while (contador < listaDeTeclas.length) {

        listaDeTeclas[contador].onclick = tocaSom; //Adicionando sons em todas as teclas
        contador = contador + 1;  

    }