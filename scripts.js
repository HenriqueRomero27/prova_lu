document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-mode');
    const body = document.body;
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');

    // Check for saved mode preference in local storage
    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode');
        header.classList.add('dark-mode');
        footer.classList.add('dark-mode');
        toggleButton.classList.add('dark-mode');
        toggleButton.textContent = 'Modo Claro';
    }

    toggleButton.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            header.classList.remove('dark-mode');
            footer.classList.remove('dark-mode');
            toggleButton.classList.remove('dark-mode');
            toggleButton.textContent = 'Modo Escuro';
            localStorage.setItem('dark-mode', 'disabled');
        } else {
            body.classList.add('dark-mode');
            header.classList.add('dark-mode');
            footer.classList.add('dark-mode');
            toggleButton.classList.add('dark-mode');
            toggleButton.textContent = 'Modo Claro';
            localStorage.setItem('dark-mode', 'enabled');
        }
    });
});

window.onload = function() {
    var elementBody = document.querySelector('body');
    var elementBtnIncreaseFont = document.getElementById('increase-font');
    var elementBtnDecreaseFont = document.getElementById('decrease-font');
    // Padrão de tamanho, equivale a 100% do valor definido no Body
    var fontSize = 100;
    // Valor de incremento ou decremento, equivale a 10% do valor do Body
    var increaseDecrease = 10;

    // Evento de click para aumentar a fonte
    elementBtnIncreaseFont.addEventListener('click', function(event) {
        fontSize = fontSize + increaseDecrease;
        elementBody.style.fontSize = fontSize + '%';
    });

    // Evento de click para diminuir a fonte
    elementBtnDecreaseFont.addEventListener('click', function(event) {
        fontSize = fontSize - increaseDecrease;
        elementBody.style.fontSize = fontSize + '%';
    });
}