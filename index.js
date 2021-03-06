function dropdown() {
  let isMenuOpen = false;
  const mobileNavDisplay = document.getElementById("mobile-nav");
  const menuBtn = document.getElementById("menu-btn");

  menuBtn.addEventListener("click", () => {
    isMenuOpen = !isMenuOpen;
    if (isMenuOpen) {
      mobileNavDisplay.style.display = "block";
      menuBtn.innerHTML = "X";
    } else {
      mobileNavDisplay.style.display = "none";
      menuBtn.innerHTML = "&#9776;";
    }
  });
}

function toggleDarkMode(event) {
  console.log(event.target.checked);
  const isDarkmode = event.target.checked;

  if (isDarkmode) {
    document.documentElement.setAttribute("data-theme", "dark");
    document.getElementById("slider").classList.add("dark");
  } else {
    document.documentElement.setAttribute("data-theme", "");
    document.getElementById("slider").classList.remove("dark");
  }
}

async function getArticle() {
  const response = await fetch(
    "https://dev.to/search/feed_content?per_page=15&page=0&user_id=297524&class_name=Article&sort_by=published_at&sort_direction=desc&approved="
  );
  const data = await response.json();
  const articles = data.result;

  for (const article of articles) {
    document
      .getElementById("article-posts")
      .insertAdjacentHTML(
        "beforeend",
        `<div class='article'><a href='https://dev.to${article.path}' target='_blank' rel="noopener" rel="noreferrer"><img src='${article.main_image}' alt="article banner"/><br/><h2>${article.title}</h2></a></div>`
      );
  }
}

dropdown();
getArticle();
