fetch('datasets.json')
  .then(res => res.json())
  .then(data => {
    document.getElementById('page-title').textContent = data.pageTitle;
    document.getElementById('page-intro').textContent = data.pageIntro;

    const container = document.getElementById('dataset-list');

    data.items.forEach(item => {
      const card = document.createElement("div");
      card.className = "dataset-card";

      card.innerHTML = `

        <h3>${item.title}</h3>
        <span class="dataset-type">${item.type}</span>
        <p>${item.description}</p>
        <a href="${item.link}" target="_blank" class="dataset-link">Open →</a>
      `;

      container.appendChild(card);
    });
  })
  .catch(err => console.error("Error loading datasets JSON:", err));
