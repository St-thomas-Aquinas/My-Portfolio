// Fetch achievements JSON and populate the page
fetch('achievements.json')
  .then(res => res.json())
  .then(data => {
    document.getElementById('page-title').textContent = data.pageTitle;
    document.getElementById('page-intro').textContent = data.pageIntro;

    const container = document.getElementById('achievements-list');
    data.achievements.forEach(item => {
      const card = document.createElement('div');
      card.className = 'achievement-card';
      card.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <h3>${item.title}</h3>
        <h4>${item.event}</h4>
        <p>${item.description}</p>
      `;
      container.appendChild(card);
    });
  })
  .catch(err => console.error('Error loading achievements JSON:', err));
