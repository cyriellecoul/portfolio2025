/* Tools And FrameWorks */

const expertList = document.getElementById("expert-tools");
const regularList = document.getElementById("regular-tools");
const notionList = document.getElementById("notion-tools");


function generateStars(stars) {
  let starsHTML = "";

  for (let i = 0; i < 5; i++) {
    starsHTML += `<i class="bi ${
      i < stars ? "bi-star-fill" : "bi-star"
    } text-warning"></i>`;
  }
  return starsHTML;
}

fetch("datas/toolsAndFrameworks.json")
  .then((res) => res.json())
  .then((data) => {
    data.tools.forEach((tool, idx) => {
      const card = document.createElement("div");
      card.classList.add("tool-card");

      const img = document.createElement("img");
      img.src = tool.icon;
      img.alt = tool.name;
      img.classList.add("tool-icon");
      card.appendChild(img);

      const content = document.createElement("div");
      const name = document.createElement("div");
      name.textContent = tool.name;
      name.style.fontWeight = "bold";
      content.appendChild(name);

      const badge = document.createElement("span");
      badge.classList.add("badge", "text-white", `badge-${tool.level}`);
      badge.textContent =
        tool.level === "expert"
          ? "Maîtrisé"
          : tool.level === "regular"
          ? "Régulier"
          : "Notion";
      content.appendChild(badge);

      const starsDiv = document.createElement("div");
      starsDiv.classList.add("stars");
      starsDiv.innerHTML = generateStars(tool.stars);
      content.appendChild(starsDiv);

      const progress = document.createElement("div");
      progress.classList.add("progress", "mt-2");
      progress.style.height = "8px";
      const bar = document.createElement("div");
      bar.classList.add("progress-bar");
      bar.style.width = "0%";
      progress.appendChild(bar);
      content.appendChild(progress);

      card.appendChild(content);

      if (tool.level === "expert") expertList.appendChild(card);
      else if (tool.level === "regular") regularList.appendChild(card);
      else notionList.appendChild(card);

      // Animation
      setTimeout(() => {
        card.classList.add("show");
        const stars = starsDiv.querySelectorAll("i");
        stars.forEach((star, i) => {
          setTimeout(() => {
            star.style.opacity = 1;
          }, i * 200);
        });
        const finalWidth =
          tool.level === "expert"
            ? "100%"
            : tool.level === "regular"
            ? "70%"
            : "40%";
        let width = 0;
        const interval = setInterval(() => {
          width += 2;
          bar.style.width = width + "%";
          if (width >= parseInt(finalWidth)) clearInterval(interval);
        }, 15);
      }, idx * 100);
    });
  })
  .catch((err) => console.error(err));
