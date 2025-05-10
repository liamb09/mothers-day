var confettiContainer;
document.addEventListener("DOMContentLoaded", function () {
    confettiContainer = document.querySelector('#confetti-container');
});
const showConfetti = () => {
    const confetti = document.createElement('div');
    confetti.textContent = Math.random() < 0.5 ? '🎉' : '❤️';
    confetti.classList.add('confetti');
    confetti.style.left = Math.round(Math.random() * document.documentElement.clientWidth) + 'px';
    confetti.style.fontSize = `${Math.round((Math.random() + 0.5) * 10)/10}rem`;
    confettiContainer.appendChild(confetti);

    setTimeout(() => {
        confetti.remove();
    }, 5000);
};
  
setInterval(() => {
    showConfetti();
}, 500);