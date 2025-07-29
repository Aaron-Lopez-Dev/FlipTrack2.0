import { ref } from 'vue'

let getVehicleData = ref([])

async function getVehicles() {
    const response = await fetch("http://localhost:4020/get-vehicles")
    const data = await response.json();
    getVehicleData.value = data;
    //console.log(getData.value)
}

export { getVehicleData, getVehicles }