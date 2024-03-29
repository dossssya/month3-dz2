document.addEventListener('DOMContentLoaded', async () => {
    try {
        const mainContent = document.getElementById('main-content');

        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();

        data.forEach(post => {
            const card = document.createElement('div');
            card.classList.add('card');

            const image = document.createElement('img');
            image.src = 'data:image/jpeg;base64,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'; // Пример URL изображения
            card.appendChild(image);

            const title = document.createElement('h3');
            title.textContent = post.title;
            title.classList.add('card-title');
            card.appendChild(title);

            const description = document.createElement('p');
            description.textContent = post.body;
            description.classList.add('card-description');
            card.appendChild(description);

            mainContent.appendChild(card);
        });
    } catch (error) {
        console.error('Error fetching and rendering data:', error);
    }
});
