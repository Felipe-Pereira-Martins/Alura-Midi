    function tocaSomPom () {

    document.querySelector('#som_tecla_pom').play();

    }

    //Refêrencias
    const listaDeTeclas = document.querySelectorAll('.tecla');

    //Tocando som POM

    let contador = 0;

    //enquanto, trabalhando com while

    while (contador < listaDeTeclas.length) {

        listaDeTeclas[contador].onclick = tocaSomPom; //Adicionando sons em todas as teclas
        contador = contador + 1;  

    }