import { ref } from "vue";

let itemInputForm = ref(0);

function displayItemInputForm (){
    itemInputForm.value = 1;
}

function displayVehicleInputForm (){
    itemInputForm.value = 0;
}

export {itemInputForm, displayItemInputForm, displayVehicleInputForm}