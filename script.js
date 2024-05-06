//Función que aplica el estilo a la opción seleccionada y quita la previamente seleccionada
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links a');
    opciones.forEach(opcion => opcion.classList.remove("seleccionado"));
    link.classList.add("seleccionado");

    // Obtener el destino del enlace
    var destinoId = link.getAttribute("href");
    var destino = document.querySelector(destinoId);

    // Calcular la posición del destino
    var offsetTop = destino.offsetTop;

    // Realizar el desplazamiento suave
    smoothScrollTo(offsetTop);

    // Ocultar el menú responsive si está abierto
    var x = document.getElementById("nav");
    if (x.classList.contains("responsive")) {
        x.classList.remove("responsive");
    }
}

// Función para hacer el desplazamiento suave
function smoothScrollTo(offset) {
    var startY = window.scrollY;
    var distance = offset - startY;
    var duration = 1000; // Duración en milisegundos

    var start = null;
    window.requestAnimationFrame(function step(timestamp) {
        if (!start) start = timestamp;
        var progress = timestamp - start;
        window.scrollTo(0, easeInOutCubic(progress, startY, distance, duration));
        if (progress < duration) window.requestAnimationFrame(step);
    });
}

// Función para calcular el desplazamiento suave con aceleración
function easeInOutCubic(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t * t + b;
    t -= 2;
    return c / 2 * (t * t * t + 2) + b;
}

//función que muestra el menu responsive
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.classList.contains("responsive")) {
        x.classList.remove("responsive");
    } else {
        x.classList.add("responsive");
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
