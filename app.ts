import express from 'express';
import router from "./routes/router";
import bodyParser from "body-parser";


const PORT = process.env.PORT || 3000;
const app = express()
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json())
app.use('/api', router)

app.listen(PORT, () => console.log('Server started on PORT ' + PORT))


