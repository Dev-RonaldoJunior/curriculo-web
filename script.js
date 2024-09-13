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
const volumeLabel = document.getElementById('volume-label'); // Nova label para mostrar a porcentagem

// Função para alternar entre play e pause
function togglePlayPause() {
    if (audio.paused) {
        audio.play();
        playPauseButton.classList.remove('fa-play');
        playPauseButton.classList.add('fa-pause');
    } else {
        audio.pause();
        playPauseButton.classList.remove('fa-pause');
        playPauseButton.classList.add('fa-play');
    }
}

// Atualiza o volume do áudio e mostra a porcentagem
volumeControl.addEventListener('input', function() {
    const volume = this.value;
    audio.volume = volume;
    volumeLabel.textContent = `${Math.round(volume * 100)}%`; // Atualiza a porcentagem
});
