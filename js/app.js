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

        solicitarReserva.addEventListener('click', validarDatosFormulario);
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

    function rellenarModal(reserva) {
        const modalNombre = document.querySelector('#modal-nombre');
        const modalCorreo = document.querySelector('#modal-correo');
        const modalTelefono = document.querySelector('#modal-telefono');
        const modalFechaHora = document.querySelector('#modal-fecha-hora');
        const modalComensales = document.querySelector('#modal-comensales');       

        modalNombre.textContent = reserva.nombre;
        modalCorreo.textContent = reserva.correo;
        modalTelefono.textContent = reserva.telefono;
        modalFechaHora.textContent = reserva.fecha.toLocaleDateString() + ' ' + reserva.fecha.toLocaleTimeString();    
        modalComensales.textContent = reserva.comensales;

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

    function validarDatosFormulario(event) {
        event.preventDefault();

        const nombre = document.querySelector('#nombre').value;
        const correo = document.querySelector('#correo').value;
        const telefono = document.querySelector('#telefono').value;
        const fecha = new Date(document.querySelector('#fecha').value);
        const comensales = document.querySelector('#comensales').value;        
        
        if (nombre !== '' && correo !== '' && telefono !== '' && fecha != 'Invalid Date' && comensales !== '') {
            if(validarEmail(correo)){
                rellenarModal({
                    nombre,
                    correo,
                    telefono,
                    fecha,
                    comensales
                });
            } else {
                mostrarError('Formato de correo incorrecto');
            }            
        } else {
            mostrarError('Debe completar todos los datos.');
        }
    }

    function mostrarError(textoMensaje) {
        const mensaje = document.querySelector('#contenedor-mensaje-error');
        const parrafo = document.createElement('p');
        const texto = document.createTextNode(textoMensaje);

        parrafo.appendChild(texto);
        parrafo.classList.add('mensaje-error');

        while(mensaje.firstChild) {
            mensaje.removeChild(mensaje.firstChild);
        }

        mensaje.appendChild(parrafo);

        setInterval(() => {
            parrafo.remove();
        }, 3000);
    }

    function validarEmail(valor) {
        return /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.exec(valor);
    }
    

    main();
})();

