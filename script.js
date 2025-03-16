
document.addEventListener("DOMContentLoaded", () => {
  const articles = [
    {
      headline: "AI Revolutionizes Healthcare Industry",
      summary: "AI-based diagnostics and patient management are improving outcomes.",
      sentiment: "positive"
    },
    {
      headline: "Stock Markets Fall Amid Global Uncertainty",
      summary: "Economic factors cause investor panic across regions.",
      sentiment: "negative"
    }
  ];

  const container = document.getElementById("articles-container");
  container.innerHTML = "";
  articles.forEach(article => {
    const el = document.createElement("div");
    el.className = "article";
    el.innerHTML = `
      <h2>${article.headline}</h2>
      <p>${article.summary}</p>
      <span class="sentiment ${article.sentiment}">${article.sentiment.charAt(0).toUpperCase() + article.sentiment.slice(1)}</span>
    `;
    container.appendChild(el);
  });
});
