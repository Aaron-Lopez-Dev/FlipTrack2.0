import { ref } from 'vue'
import { getVehicles } from './getVehicles'

export async function addVehicle({
    year,
    make,
    model,
    mileage,
    price,
}: {
    year: number;
    make: string;
    model: string;
    mileage: number;
    price: number;
}) {
    console.log("Add Vehicle Function Began")

    const response = await fetch("http://localhost:4020/add-vehicle", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ year, make, model, mileage, price })
    });

    if(response.ok){
        getVehicles();
    }

}