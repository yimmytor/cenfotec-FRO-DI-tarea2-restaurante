'use strict';

(()=>{
    function main() {
        iniciarListeners();
    }

    function iniciarListeners() {
        const opcionesMenu = document.querySelectorAll('nav ul li');
        const solicitarReserva = document.querySelector('#solicitar-reserva');
        const aceptarModal = document.querySelector('#aceptar-modal');

        window.addEventListener('scroll', mostrarFondoHeader);

        opcionesMenu.forEach(opcion => {
            opcion.addEventListener('click', ocultarMenu);
        });

        solicitarReserva.addEventListener('click', rellenarModal);
        aceptarModal.addEventListener('click', ocultarModal);
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

    function mostrarOcultarModal() {
        const modal = document.querySelector('#modal');

        modal.classList.toggle('oculto');
    }

    function rellenarModal(event) {
        event.preventDefault();

        const modalNombre = document.querySelector('#modal-nombre');
        const modalCorreo = document.querySelector('#modal-correo');
        const modalTelefono = document.querySelector('#modal-telefono');
        const modalFechaHora = document.querySelector('#modal-fecha-hora');
        const modalComensales = document.querySelector('#modal-comensales');
        const nombre = document.querySelector('#nombre').value;
        const correo = document.querySelector('#correo').value;
        const telefono = document.querySelector('#telefono').value;
        const fecha = new Date(document.querySelector('#fecha').value);
        const comensales = document.querySelector('#comensales').value;        

        modalNombre.textContent = nombre;
        modalCorreo.textContent = correo;
        modalTelefono.textContent = telefono;
        modalFechaHora.textContent = fecha.toLocaleDateString() + ' ' + fecha.toLocaleTimeString();    
        modalComensales.textContent = comensales;

        mostrarOcultarModal();
    }

    function ocultarModal() {
        limpiarForm();
        limpiarModal();
        mostrarOcultarModal();
    }

    function limpiarForm() {
        const formulario = document.querySelector('#formulario-reserva');

        formulario.reset();
    }

    function limpiarModal() {
        const modalNombre = document.querySelector('#modal-nombre');
        const modalCorreo = document.querySelector('#modal-correo');
        const modalTelefono = document.querySelector('#modal-telefono');
        const modalFechaHora = document.querySelector('#modal-fecha-hora');
        const modalComensales = document.querySelector('#modal-comensales');

        modalNombre.textContent = '';
        modalCorreo.textContent = '';
        modalTelefono.textContent = '';
        modalFechaHora.textContent = '';
        modalComensales.textContent = '';
    }

    main();
})();

