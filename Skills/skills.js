fetch('skills.json')
  .then(res => res.json())
  .then(data => {
    document.getElementById("page-title").textContent = data.pageTitle;
    document.getElementById("page-intro").textContent = data.pageIntro;

    const container = document.getElementById("skills-container");

    data.skills.forEach(skill => {
      const card = document.createElement("div");
      card.className = "skill-card";

      card.innerHTML = `
        <h3>${skill.title}</h3>
        <p>${skill.description}</p>
      `;

      container.appendChild(card);
    });
  })
  .catch(err => console.error("Error loading skills JSON:", err));
