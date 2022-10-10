import express from "express"
import bodyParse from 'body-parser'
import router from "./Routes/reservation.js";
import  cors  from "cors";
const app = express();
app.use( cors() );
const PORT = 5001;
app.use( bodyParse.json() );
app.use('/',router)

app.listen(PORT,()=> console.log(`Server running on port http://localhost:${PORT}`))