// Mensaje de bienvenida al cargar

alert('¡Bienvenido a mi portafolio profesional!');

// Función para cambiar texto dinámicamente
const btnEnviar = document.querySelector('button[type="submit"]');
if (btnEnviar) {
  btnEnviar.addEventListener('click', (e) => {
    e.preventDefault();
    const contactHeader = document.querySelector('#contact h3');
    contactHeader.textContent = '¡Gracias por contactarme!';
    contactHeader.style.color = 'gold';
  });
}
