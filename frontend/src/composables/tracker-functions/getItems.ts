import { ref } from 'vue'

let getItemData = ref([])

async function getItems() {
    
    const response = await fetch("http://localhost:4020/get-items")
    const data = await response.json();
    getItemData.value = data;
    //console.log(getData.value)
}

export { getItemData, getItems}