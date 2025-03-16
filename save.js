
const nhostEndpoint = "https://app.nhost.io/orgs/oapxgsfpgcoekdhunmjb/projects/kopobfxmyvhvlhupdhph/graphql";
const nhostAdminSecret = "PASTE_YOUR_ADMIN_SECRET_HERE"; // Replace this only

const articleData = {
  title: "Test News",
  summary: "This is a test article to check if saving works.",
  sentiment: "positive",
  sentiment_explanation: "Test explanation of sentiment"
};

async function saveArticle() {
  const query = `
    mutation InsertArticle($title: String!, $summary: String!, $sentiment: String!, $sentiment_explanation: String!) {
      insert_articles(objects: {
        title: $title,
        summary: $summary,
        sentiment: $sentiment,
        sentiment_explanation: $sentiment_explanation
      }) {
        affected_rows
      }
    }
  `;

  const response = await fetch(nhostEndpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-hasura-admin-secret": nhostAdminSecret
    },
    body: JSON.stringify({
      query,
      variables: articleData
    })
  });

  const result = await response.json();
  console.log("Saved to Nhost:", result);
  alert("Article saved!");
}
