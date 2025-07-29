import { ref } from "vue";

let vehicleDisplay = ref(1);

function dbVehiclesDisplay (){
    vehicleDisplay.value = 1;
}

function dbItemsDisplay (){
    vehicleDisplay.value = 0;
}

export {vehicleDisplay, dbVehiclesDisplay, dbItemsDisplay}