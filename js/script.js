document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.card');
    const totalAmountSpan = document.querySelector('.total__amount');
    totalAmountSpan.textContent = cards[0].querySelector('.price').textContent;
    cards[1].classList.add('expanded');
    cards.forEach(card => {
        card.addEventListener('click', () => {
            cards.forEach(c => c.classList.remove('expanded'));
            card.classList.add('expanded');
            const price = card.querySelector('.price').textContent;
            totalAmountSpan.textContent = price;
        });
    });
});
