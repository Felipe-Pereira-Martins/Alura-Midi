    function tocaSomPom () {

    document.querySelector('#som_tecla_pom').play();

    }

    //Refêrencias
    const listaDeTeclas = document.querySelectorAll('.tecla');

    //Tocando som POM
    listaDeTeclas[0].onclick = tocaSomPom;