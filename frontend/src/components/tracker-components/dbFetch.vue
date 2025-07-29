  <template>
    <div class="mainContainer">
      <div class="buttons">
        <button class="newVehicleButton btn btn-ghost" @click="dbVehiclesDisplay">Vehicles</button>
        <button class="newItemButton btn btn-ghost" @click="dbItemsDisplay">Items </button>
      </div>

      <div class="resultsContainer" v-if="vehicleDisplay == 1">
        <transition-group name="fade" tag="div" class="trackerResults">
    
            <div class="card w-96 bg-base-100 card-md shadow-sm" v-for="(vehicles, index) in getVehicleData"
              :key="vehicles.id" @click="deleteVehicle(vehicles.id)">
              <h2 class="card-title">{{ vehicles.year }} {{ vehicles.make }} {{ vehicles.model }}</h2>
              <p>Mileage: {{ vehicles.mileage.toLocaleString('en-US') }}</p>
              <p>Purchase Price: {{ vehicles.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) }}
              </p>
              <div class="justify-end card-actions">

              </div>
            </div>
          
        </transition-group>
      </div>
      <div class="resultsContainer" v-else>
      <div class="trackerResults">
        <transition-group name="fade" tag="div" class="trackerResults">
          <div class="card w-96 bg-base-100 card-md shadow-sm" v-for="(items, index) in getItemData" :key="items.id"
            @click="deleteItem(items.id)">
            <h2 class="card-title">{{ items.name }} </h2>
            <p>Purchase Price: {{ items.price.toLocaleString('en-US', { style: 'currency', currency: 'USD' }) }}</p>
            <div class="justify-end card-actions">

            </div>
          </div>
        </transition-group>
      </div>
      </div>
    </div>




  </template>

<script setup>
import { vehicleDisplay, dbVehiclesDisplay, dbItemsDisplay } from '@/composables/dbDisplay'
import { getVehicles, getVehicleData } from '@/composables/tracker-functions/getVehicles'
import { getItems, getItemData } from '@/composables/tracker-functions/getItems'
import { deleteVehicle } from '@/composables/tracker-functions/deleteVehicle'
import { deleteItem } from '@/composables/tracker-functions/deleteItem'
import { onMounted } from 'vue'

function getAll() {
  getVehicles();
  getItems();
}

onMounted(getAll)
</script>

<style scoped>
.mainContainer {
  width: 1100px;
  height: 600px;

  display: flex;
  flex-direction: column;

}

.resultsContainer {
  width: fit-content;
  height: 550px;

  margin: auto;
  box-sizing: border-box;
  overflow-y: scroll
}

.buttons {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 50px;
}

.trackerResults {
  width: 1000px;
  height: 600px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  box-sizing: border-box;

}

.card {
  padding: 20px;
  border: 2px solid white;
  height: 150px;
  width: 300px;
  transition: 250ms;
  margin: auto;
}

.card:hover {
  opacity: .5;

}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.95);
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
  transform: scale(1);
}
</style>