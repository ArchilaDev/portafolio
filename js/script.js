const botonTema = document.getElementById('cambio_tema');
const iconoTema = botonTema.querySelector('i');
const sonidoClick = new Audio("sounds/clickSound.mp3");

botonTema.addEventListener('click', (e) => {
    e.preventDefault(); 

    document.body.classList.toggle('light-mode');
    sonidoClick.currentTime = 0;
    sonidoClick.play();
    // Comprueba el estado actual para cambiar el icono
    if (document.body.classList.contains('light-mode')) {
        iconoTema.classList.remove('fa-moon-o');
        iconoTema.classList.add('fa-sun-o');
        iconoTema.style.color = '#F59E0B'; 
    } else {
        iconoTema.classList.remove('fa-sun-o');
        iconoTema.classList.add('fa-moon-o');
        iconoTema.style.color = 'white'; 
    }
});


