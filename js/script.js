const botonTema = document.getElementById('cambio_tema');
const iconoTema = botonTema.querySelector('i');

botonTema.addEventListener('click', (e) => {
    e.preventDefault(); // 'D' mayúscula corregida

    // Alterna la clase en el body (la pone si no está, la quita si ya está)
    document.body.classList.toggle('light-mode');

    // Comprueba el estado actual para cambiar el icono
    if (document.body.classList.contains('light-mode')) {
        iconoTema.classList.remove('fa-moon-o');
        iconoTema.classList.add('fa-sun-o');
        iconoTema.style.color = '#F59E0B'; // Sol dorado
    } else {
        iconoTema.classList.remove('fa-sun-o');
        iconoTema.classList.add('fa-moon-o');
        iconoTema.style.color = 'white'; // Luna blanca
    }
});