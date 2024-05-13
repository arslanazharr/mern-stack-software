require('dotenv').config();
const express = require('express');
const app = express();
const routes = require("./router/routes");
const connectDB = require("./utils/db");

app.use(express.json());

app.use("/api", routes);
app.use((req, res) => {
  res.status(404).send({
    message: "Page not found"
  });
});

const PORT = process.env.PORT;

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
});
