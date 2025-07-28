import { ref } from "vue";

let listingDataPull = ref([]);
let average = ref("");
let isLoading = ref(false)

function fetchData(){
    //console.log("Fetching Data...")
    isLoading.value = true

   // console.log(isLoading.value)
    fetch("http://localhost:4020/get-data")    
    .then(response => response.json())
    .then(data => {
        //console.log("Completed")

        average.value = average.value = `$${Math.floor(data.average).toLocaleString()}`;
        listingDataPull.value = data.listingData
        //console.log(listingDataPull.value)
        isLoading.value = false
    })
    
}

export { fetchData, listingDataPull, average, isLoading}