require("dotenv").config();
//asynnc errors
require("express-async-errors");

const express = require("express");
const app = express();

const connectDB = require("./db/connect");
const productRouter = require("./routes/products");
const notFoundMiddleware = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");

//middleware
app.use(express.json());

app.use("/api/v1/products", productRouter);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

//routes
app.get("/", (req, res) => {
  res.send(`<h1>Store API</h1><a href="/api/v1/products">Products routes</a>`);
});

const PORT = process.env.PORT || 8000;

const start = async () => {
  try {
    //connect db
    await connectDB(process.env.MONGO_URI);
    console.log("connected");
    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
