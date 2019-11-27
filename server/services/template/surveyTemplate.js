const { redirectDomain } = require("../../config/keys");

module.exports = ({ body }) => {
  const linkUrl = `${redirectDomain}/api/surveys/thanks`;

  return `
  <html>
    <body>
      <div style="text-align: center;">
        <h3>We'd love to hear your input!</h3>
        <p>Please answer the following question:</p>
        <p>${body}</p>
        <div>
          <a href="${linkUrl}">Yes</a>
          <a href="${linkUrl}">No</a>
        </div>
      </div>
    </body>
  </html>
  `;
};
