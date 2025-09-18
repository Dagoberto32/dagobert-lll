// Renderizar estrellas y manejar selección
window.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.estrellas').forEach(function(container) {
        let valor = 3;
        for(let i=1; i<=5; i++) {
            const star = document.createElement('span');
            star.className = 'estrella';
            star.setAttribute('tabindex', '0');
            star.setAttribute('role', 'radio');
            star.setAttribute('aria-label', i + ' estrellas');
            star.setAttribute('data-value', i);
            star.innerHTML = '★';
            if(i === valor) star.classList.add('seleccionada');
            star.addEventListener('click', function() {
                valor = i;
                actualizarEstrellas(container, valor);
            });
            star.addEventListener('keydown', function(e) {
                if(e.key === 'Enter' || e.key === ' ') {
                    valor = i;
                    actualizarEstrellas(container, valor);
                    e.preventDefault();
                }
                if(e.key === 'ArrowLeft' && valor > 1) {
                    valor--;
                    actualizarEstrellas(container, valor);
                    e.preventDefault();
                }
                if(e.key === 'ArrowRight' && valor < 5) {
                    valor++;
                    actualizarEstrellas(container, valor);
                    e.preventDefault();
                }
            });
            container.appendChild(star);
        }
        actualizarEstrellas(container, valor);
    });
    function actualizarEstrellas(container, valor) {
        const estrellas = container.querySelectorAll('.estrella');
        estrellas.forEach(function(star, idx) {
            if(idx < valor) {
                star.classList.add('seleccionada');
            } else {
                star.classList.remove('seleccionada');
            }
        });
        container.setAttribute('aria-valuenow', valor);
    }
});
