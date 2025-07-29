import express from "express";
import cors from "cors";
import newSearchRoutes from './routes/newSeachRoute'
import dbVehiclesRoutes from './routes/dbVehiclesRoutes'
import dbItemsRoutes from './routes/dbItemsRoutes'

const PORT = 4020;
const app = express();
app.use(cors());
app.use(express.json());


app.use('/new-search', newSearchRoutes)

app.use('/add-vehicle', dbVehiclesRoutes)
app.use('/get-vehicles', dbVehiclesRoutes)
app.use('/delete-vehicle', dbVehiclesRoutes)

app.use('/new-item', dbItemsRoutes)
app.use('/delete-item', dbItemsRoutes)
app.use('/get-items', dbItemsRoutes)

app.listen(PORT, () => {
    console.log(`\n Server running on http://localhost:${PORT} \n`);
});

