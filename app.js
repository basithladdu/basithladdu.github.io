function loadContent(option) {
    const contentDiv = document.getElementById('content');
    contentDiv.textContent = `${option} - coming soon`;
}

function expandCard(clickedCard) {
    document.querySelectorAll('.card').forEach(card => {
        card.classList.remove('expanded');
    });
    clickedCard.classList.add('expanded');
}

document.addEventListener("scroll", function() {
    let cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        let cardPosition = card.getBoundingClientRect().top;
        let screenPosition = window.innerHeight / 1.2;
        
        if (cardPosition < screenPosition) {
            card.classList.add("visible");
        }
    });
});
