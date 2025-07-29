import { getVehicles } from './getVehicles'

export async function deleteVehicle(index: Number) {
    console.log(index)

    const response = await fetch("http://localhost:4020/delete-vehicle", {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ index }),
    })
    if (response.ok) {
        getVehicles();
    }

}