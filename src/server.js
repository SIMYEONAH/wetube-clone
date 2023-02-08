import  express from "express";

const POST = 4000;

const app = express();

const handleHome = (req, res) => {
  return res.end();
};

app.get("/", handleHome);

const handleListening = () => 
  console.log(`Server listening on port http://localhost:${POST}`);

app.listen(POST, handleListening);