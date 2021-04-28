(()=>{
    function main() {
        iniciarListeners();
    }

    function iniciarListeners() {
        const opcionesMenu = document.querySelectorAll('nav ul li');
        window.addEventListener('scroll', mostrarFondoHeader);

        opcionesMenu.forEach(opcion => {
            opcion.addEventListener('click', ocultarMenu);
        });
    }   

    function mostrarFondoHeader() {
        if(document.documentElement.scrollTop > 20){
            document.querySelector('header').classList.add('header-semisolid');
        }else{
            document.querySelector('header').classList.remove('header-semisolid');
        }
    }

    function ocultarMenu() {
        document.querySelector('#menu-bar').checked = false;        

        
    }

    main();
})();

