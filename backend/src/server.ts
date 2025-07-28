import express from "express";
import cors from "cors";
import { Response, Request } from 'express'
import indexRoutes from './routes/index'
import newSearchRoutes from './routes/newSeachRoute'

const PORT = 4020;
const app = express();
app.use(cors());
app.use(express.json());


app.use('/', indexRoutes);
app.use('/new-search', newSearchRoutes)


app.listen(PORT, () => {
    console.log(`\n Server running on http://localhost:${PORT} \n`);
});

