// Espera a que el contenido del DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Obtiene la referencia al elemento de la imagen por su ID
    var image = document.getElementById('botonimg');
    // Obtiene la referencia al elemento del párrafo por su ID
    var paragraph = document.getElementById('desplieguebotonimg');
    
    // Añade un escuchador de eventos al hacer clic en la imagen
    image.addEventListener('click', function() {
        // Comprueba si el párrafo tiene la clase 'hidden'
        if (paragraph.classList.contains('hidden')) {
            // Si el párrafo está oculto, quita la clase 'hidden' y añade la clase 'show'
            paragraph.classList.remove('hidden'); /* Quita la clase 'hidden' para hacer visible el párrafo */
            paragraph.classList.add('show'); /* Añade la clase 'show' para aplicar estilos de visibilidad */
        } else {
            // Si el párrafo está visible, quita la clase 'show' y añade la clase 'hidden'
            paragraph.classList.remove('show'); /* Quita la clase 'show' para ocultar el párrafo */
            paragraph.classList.add('hidden'); /* Añade la clase 'hidden' para aplicar estilos de ocultación */
        }
    });

    // Añade un escuchador de eventos al hacer clic en la imagen
    image.addEventListener('click', function() {
        // Alternar la clase 'expanded' para ampliar/reducir y cambiar el color
        if (image.classList.contains('expanded')) {
            // Si la clase 'expanded' está presente, quítala para volver al estado normal
            image.classList.remove('expanded'); /* Quita la clase 'expanded' para volver al tamaño original */
        } else {
            // Si la clase 'expanded' no está presente, añádela para ampliar y cambiar el color
            image.classList.add('expanded'); /* Añade la clase 'expanded' para aumentar el tamaño de la imagen */
        }
    });
});

// Espera a que el contenido del DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Selecciona el primer elemento con la clase 'botoncue'
    const botoncue = document.querySelector(".botoncue");
    // Obtiene la referencia al contenedor de imágenes por su ID
    const imagenesCuerpo = document.getElementById("imagenesCuerpo");

    // Añade un escuchador de eventos al hacer clic en el botón
    botoncue.addEventListener("click", function() {
        // Alternar la visibilidad de las imágenes
        imagenesCuerpo.classList.toggle("hidden"); /* Cambia la clase 'hidden' para mostrar u ocultar las imágenes */
    });
});