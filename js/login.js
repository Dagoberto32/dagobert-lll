document.addEventListener('DOMContentLoaded', function() {
    const abrirBtn = document.getElementById('abrir-login');
    const modal = document.getElementById('modal-login');
    const cerrarBtn = document.getElementById('cerrar-modal');
    const form = document.getElementById('login-form');

    abrirBtn.addEventListener('click', function() {
        modal.style.display = 'flex';
    });

    cerrarBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Aquí podrías validar el correo y la contraseña si lo deseas
    localStorage.setItem('ingresoSegunda', 'true');
    window.location.href = 'segunda.html';
    });
});
