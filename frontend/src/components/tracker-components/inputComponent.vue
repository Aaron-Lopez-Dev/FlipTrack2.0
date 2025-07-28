<template>
    <div class="main">
        <div class="buttons">
            <button class="newVehicleButton btn btn-ghost" @click="displayVehicleInputForm">New Vehicle</button>
            <button class="newItemButton btn btn-ghost" @click="displayItemInputForm">New item</button>
        </div>

        <div class="divider divider-neutral"></div>

        <form class="vehicleInputForm" v-if="itemInputForm == 0">
            <h2>Vehicle Details</h2>
            <input type="text" class="input" placeholder="Year">
            <input type="text" class="input" placeholder="Make">
            <input type="text" class="input" placeholder="Model">
            <input type="text" class="input" placeholder="Mileage">
            <input type="text" class="input" placeholder="Purchase Price">
            <button class="submitButton btn btn-outline" type="submit">Submit</button>
        </form>

        <form class="itemInputForm" v-else>
            <h2>Item Details</h2>
            <input type="text" class="input" placeholder="Item Name">
            <input type="text" class="input" placeholder="Purchase Price">

            <button class="submitButton btn btn-outline" type="submit">Submit</button>
        </form>
    </div>
</template>

<script setup>
import { displayItemInputForm, itemInputForm, displayVehicleInputForm } from '@/composables/displayForms';

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