document.addEventListener('DOMContentLoaded', () => {
    const playerCards = document.querySelectorAll('.player-card');

    playerCards.forEach(card => {
        card.addEventListener('click', () => {
            const playerName = card.querySelector('h3').innerText;
            alert(`You clicked on ${playerName}`);
        });
    });
});