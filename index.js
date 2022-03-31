//configuração inicial
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
PORT = process.env.PORT;

// ler JSON

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

// rotas da Api

const personRoutes = require("./routes/personRoutes");

app.use("/person", personRoutes);

// rota inicial - endpoint

app.get("/", (req, res) => {
  //mostrar requisição
  res.json({ message: "Oi express" });
});

const user = process.env.DB_USER;
const password = encodeURIComponent(process.env.DB_PASSWORD);

// porta
mongoose
  .connect(
    `mongodb+srv://${user}:${password}@apicluster.43aba.mongodb.net/apiDB?retryWrites=true&w=majority`
  )
  .then(() => {
    app.listen(PORT);
    console.log(`Conectado ao MongoDB na porta ${PORT}`);
  })
  .catch((err) => console.log(err));
