document.addEventListener('DOMContentLoaded', () => {
    const flashyButton = document.getElementById('flashy-button');
    const body = document.querySelector('body');

    flashyButton.addEventListener('click', () => {
        flashyButton.textContent = 'Wow! So flashy!';

        // Create a flashy element
        const flashyElement = document.createElement('div');
        flashyElement.textContent = '✨';
        flashyElement.style.position = 'absolute';
        flashyElement.style.left = `${Math.random() * 100}vw`;
        flashyElement.style.top = `${Math.random() * 100}vh`;
        flashyElement.style.fontSize = `${Math.random() * 3 + 1}em`;
        flashyElement.style.animation = 'fadeInOut 2s forwards';
        body.appendChild(flashyElement);

        setTimeout(() => {
            flashyElement.remove();
        }, 2000);
    });

    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes fadeInOut {
            0% { opacity: 0; transform: scale(0); }
            50% { opacity: 1; transform: scale(1.5); }
            100% { opacity: 0; transform: scale(0); }
        }
    `;
    document.head.appendChild(style);
});
