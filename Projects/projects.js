fetch('projects.json')
  .then(res => res.json())
  .then(data => {
    document.getElementById('page-title').textContent = data.pageTitle;
    document.getElementById('page-intro').textContent = data.pageIntro;

    const container = document.getElementById('projects-list');

    data.projects.forEach(project => {
      const card = document.createElement('div');
      card.className = 'project-card';

      card.innerHTML = `
       
        <h3>${project.title}</h3>
        <h4>${project.year}</h4>
        <p>${project.description}</p>
       <a href="${project.link}" class="project-link"></a>
      `;

      container.appendChild(card);
    });
  })
  .catch(err => console.error('Error loading projects JSON:', err));
