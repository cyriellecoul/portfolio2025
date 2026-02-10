
fetch("datas/softSkills.json")
 .then(res => res.json())
  .then(data => {
    const wrapper = document.getElementById("skills-wrapper");

    // Sort by priority (1 & 2 first)
    const sorted = data.skillCategories.sort((a, b) => {
      return (a.priority || 999) - (b.priority || 999);
    });

    sorted.forEach((cat, index) => {
      const col = document.createElement("div");
      col.classList.add("col-md-6", "col-lg-4");

      const card = document.createElement("div");
      card.classList.add("skill-card");

      // Add priority class if exists
      if (cat.priority) {
        card.classList.add(`priority-${cat.priority}`);
      }

      // Icon
      const icon = document.createElement("i");
      icon.classList.add("bi", cat.icon, "skill-icon");
      card.appendChild(icon);

      // Title
      const title = document.createElement("div");
      title.classList.add("skill-category-title");
      title.textContent = cat.category;
      card.appendChild(title);

      // Skill list
      const ul = document.createElement("ul");
      ul.classList.add("skill-list");

      cat.skills.forEach(skill => {
        const li = document.createElement("li");
        li.textContent = skill;
        ul.appendChild(li);
      });

      card.appendChild(ul);
      col.appendChild(card);
      wrapper.appendChild(col);

      // Fade-in animation staggered
      setTimeout(() => {
        card.classList.add("show");
      }, index * 150);
    });
  })
  .catch(err => console.error(err));