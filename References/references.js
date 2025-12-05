// Fetch references JSON and populate the References page
fetch('content.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('references-list');

    if (data.references && data.references.length > 0) {
      data.references.forEach(ref => {
        const div = document.createElement('div');
        div.className = 'reference-item';
        div.innerHTML = `
          <strong>${ref.author}</strong><br>
          <span>${ref.institution}</span><br>
          <span>${ref.contact}</span>
        `;
        container.appendChild(div);
      });
    } else {
      container.innerHTML = '<p>No references available.</p>';
    }
  })
  .catch(err => console.error('Error loading references:', err));
