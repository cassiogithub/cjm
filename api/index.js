const express = require("express");
const routes = require("./src/routes/userRoutes");
const cors = require("cors");
const app = express();

app.use(cors())
app.use(routes);

app.listen(8080, () => {
  console.log("Server on! :8080");
});
