<template>
    <div class="main">
        <div class="buttons">
            <button class="newVehicleButton btn btn-ghost" @click="displayVehicleInputForm">New Vehicle</button>
            <button class="newItemButton btn btn-ghost" @click="displayItemInputForm">New item</button>
        </div>

        <div class="divider divider-neutral"></div>

        <form class="vehicleInputForm" v-if="itemInputForm == 0">
            <h2>Vehicle Details</h2>
            <input type="text" class="input" placeholder="Year" v-model="inputYear">
            <input type="text" class="input" placeholder="Make" v-model="inputMake">
            <input type="text" class="input" placeholder="Model" v-model="inputModel">
            <input type="text" class="input" placeholder="Mileage" v-model="inputMileage">
            <input type="text" class="input" placeholder="Purchase Price" v-model="inputPrice">
            <button class="submitButton btn btn-outline" @click.prevent="handleNewVehicle">Submit</button>
        </form>

        <form class="itemInputForm" v-else>
            <h2>Item Details</h2>
            <input type="text" class="input" placeholder="Item Name" v-model="inputItemName">
            <input type="text" class="input" placeholder="Purchase Price" v-model="inputItemPrice">

            <button class="submitButton btn btn-outline" @click.prevent="handleNewItem">Submit</button>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { displayItemInputForm, itemInputForm, displayVehicleInputForm } from '@/composables/displayForms';
import { addVehicle } from '@/composables/tracker-functions/addVehicle'
import { addItem } from '@/composables/tracker-functions/addItem'

const inputYear = ref('')
const inputMake = ref('')
const inputModel = ref('')
const inputMileage = ref('')
const inputPrice = ref('')

const inputItemName = ref('')
const inputItemPrice = ref('')

async function handleNewVehicle(){
    await addVehicle({
        year: inputYear.value,
        make: inputMake.value,
        model: inputModel.value,
        mileage: inputMileage.value,
        price: inputPrice.value
    })

}

async function handleNewItem(){
    await addItem({
        itemName : inputItemName.value,
        itemPrice: inputItemPrice.value
    })
}

</script>

<style scoped>
.main {
    width: 300px;
    height: fit-content;
    margin: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

}
.buttons{
    display:inline-flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
}

.btn{
    font-size: .8rem;
}

input{
    width: 200px;
    margin: 10px 0px;
}

.vehicleInputForm,
.itemInputForm {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 300px;
    margin: auto;
}

h2, .btn{
    margin-top: 15px;
}
</style>