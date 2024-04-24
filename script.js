//Función que me aplica el estilo a la opción seleccionada y quita la previamente seleccionada
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links a');
    opciones.forEach(opcion => opcion.className = "");
    link.className = "seleccionado";

    // Hacemos desaparecer el menú una vez que se ha seleccionado una opción
    // en modo responsive
    var x = document.getElementById("nav");
    x.className = "";

    // También puedes cerrar el menú responsive si estás en ese modo
    // Esto es opcional y dependerá de cómo quieras gestionar el menú en modo responsive
    var responsiveMenu = document.getElementById("responsive-menu");
    if (responsiveMenu.className !== "") {
        responsiveMenu.className = "";
    }
}





//función que muestra el menu responsive
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

//detecto el scrolling para aplicar la animación de la barra de habilidades
window.onscroll = function() { efectoHabilidades() };

//funcion que aplica la animación de la barra de habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("bd").classList.add("barra-progreso3");
        document.getElementById("ps").classList.add("barra-progreso4");
    }

}

/*
// Obtén todas las imágenes del portafolio
const imagenesPortafolio = document.querySelectorAll('.imagen-portafolio');

// Agrega un manejador de clic a cada imagen
imagenesPortafolio.forEach((imagen) => {
    imagen.addEventListener('click', () => {
        // Crea un elemento de imagen en pantalla completa
        const imagenAmpliada = document.createElement('img');
        imagenAmpliada.src = imagen.src;
        imagenAmpliada.className = 'imagen-ampliada';

        // Crea un fondo oscuro de superposición
        const fondoSuperposicion = document.createElement('div');
        fondoSuperposicion.className = 'fondo-superposicion';

        // Agrega la imagen y el fondo de superposición al cuerpo del documento
        document.body.appendChild(fondoSuperposicion);
        document.body.appendChild(imagenAmpliada);

        // Agrega un manejador de clic para cerrar la imagen ampliada
        const cerrarImagenAmpliada = () => {
            document.body.removeChild(fondoSuperposicion);
            document.body.removeChild(imagenAmpliada);
        };

        const cerrarConEsc = (event) => {
            if (event.keyCode === 27) {
                cerrarImagenAmpliada();
                document.removeEventListener('keydown', cerrarConEsc);
            }
        };

        // Agrega manejador de clic para cerrar la imagen ampliada
        imagenAmpliada.addEventListener('click', cerrarImagenAmpliada);
        fondoSuperposicion.addEventListener('click', cerrarImagenAmpliada);

        // Agrega manejador de tecla para cerrar la imagen ampliada con la tecla "ESC"
        document.addEventListener('keydown', cerrarConEsc);
    });
});



*/




