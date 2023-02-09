import  express from "express";

const POST = 4000;

const app = express();

const gossipMiddleware = (req, res, next) => {
  console.log(`Someone is going to ${req.url}`);
  next();
};

const handleHome = (req, res) => {
  return res.send("I love middlewares");
};

app.get("/",gossipMiddleware, handleHome);

const handleListening = () => 
  console.log(`Server listening on port http://localhost:${POST}`);

app.listen(POST, handleListening);