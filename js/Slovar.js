document.addEventListener('DOMContentLoaded', () => {
    const glossaryData = [
        { term: "Игра", description: "Зомби апокалипсис ." },
        { term: "Главный герой ", description: "Два гланых героя " },
        { term: "Вирус", description: "Зомби вирус во всем мире " },
        { term: "Локация", description: "Япония" },
        { term: "Части игры", description: "Всего 3 части ." },
        { term: "Оружие ", description: "Арсенал НАТО ." },
        { term: "Представление персонажей", description: "Генерал ФСБ или же морпех" },
        { term: "Мир", description: "Ограниченные локации со своим сюжетом" },
        { term: "START", description: "Название отряда  " },
        { term: "Браво", description: "Отдельная часть из 10 человек ." }
    ];

    const searchInput = document.getElementById('search-input');
    const glossaryList = document.getElementById('glossary-list');
    const descriptionText = document.getElementById('description-text');

    function displayGlossary(terms) {
        glossaryList.innerHTML = '';
        terms.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item.term;
            listItem.addEventListener('click', () => {
                descriptionText.textContent = item.description;
            });
            glossaryList.appendChild(listItem);
        });
    }

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        const filteredTerms = glossaryData.filter(item =>
            item.term.toLowerCase().includes(query)
        );
        displayGlossary(filteredTerms);
    });

    displayGlossary(glossaryData);
});
