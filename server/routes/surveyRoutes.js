const requireLogin = require("../middleware/requireLogin");
const requireCredits = require("../middleware/requireCredits");

module.exports = app => {
  app.post("/api/surveys", requireLogin, requireCredits, (req, res) => {
    // add some logic here
  });
};
