// Seleciona o botão de menu e a lista de navegação
const menuToggle = document.querySelector("#menu-toggle");
const menu = document.querySelector("#menu");

// Adiciona um evento de clique no botão de menu
menuToggle.addEventListener("click", () => {
    // Alterna a classe "active" para mostrar ou esconder o menu
    menu.classList.toggle("active");
});

// Seleciona o elemento de áudio e os controles
const audio = document.getElementById('background-music');
const playPauseButton = document.getElementById('play-pause');
const volumeControl = document.getElementById('volume');

// Função para alternar entre play e pause
function togglePlayPause() {
    if (audio.paused) {
        audio.play();
        playPauseButton.textContent = 'Pause';
    } else {
        audio.pause();
        playPauseButton.textContent = 'Play';
    }
}

// Atualiza o volume do áudio
volumeControl.addEventListener('input', function() {
    audio.volume = this.value;
});
