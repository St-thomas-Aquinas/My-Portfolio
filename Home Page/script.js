// Fetch JSON content and populate the page
fetch('content.json')
  .then(res => res.json())
  .then(data => {
    // Home page content
    document.getElementById('name').textContent = data.name;
    document.getElementById('title').textContent = data.title;
    document.getElementById('intro').textContent = data.intro;

    // Social links
    const socialList = document.getElementById('social-list');
    data.socials.forEach(social => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="${social.url}" target="_blank">${social.platform}</a>`;
      socialList.appendChild(li);
    });

    // Bottom Dock buttons
    const dock = document.getElementById('menu-container');
    data.menu.forEach(item => {
      const button = document.createElement('a');
      button.href = item.link;
      button.textContent = item.label;
      button.className = 'dock-button';
      dock.appendChild(button);
    });

    // Smooth Mac-style Dock hover effect
    const buttons = document.querySelectorAll('.dock-button');
    dock.addEventListener('mousemove', e => {
      const dockRect = dock.getBoundingClientRect();
      const mouseX = e.clientX - dockRect.left;

      buttons.forEach(button => {
        const btnRect = button.getBoundingClientRect();
        const btnX = btnRect.left - dockRect.left + btnRect.width / 2;
        const distance = Math.abs(mouseX - btnX);
        const scale = Math.max(1, 1.5 - distance / 150); // adjust max size and spread
        button.style.transform = `scale(${scale})`;
        button.style.zIndex = Math.floor(scale * 100); // make larger buttons appear on top
        button.style.boxShadow = scale > 1 ? `0 8px 20px rgba(0,0,0,${(scale-1)/2})` : 'none';
      });
    });

    dock.addEventListener('mouseleave', () => {
      buttons.forEach(button => {
        button.style.transform = 'scale(1)';
        button.style.zIndex = '1';
        button.style.boxShadow = 'none';
      });
    });

  })
  .catch(err => console.error('Error loading JSON:', err));
