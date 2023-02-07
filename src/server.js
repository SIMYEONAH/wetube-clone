import  express from "express";

const POST = 4000;

const app = express();

const handleListening = () => 
  console.log(`Server listening on port http://localhost:${POST}`);

app.listen(POST, handleListening);