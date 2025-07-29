import { ref } from 'vue'
import { getItems } from './getItems'

export async function addItem({
    itemName,
    itemPrice
}: {
    itemName: string;
    itemPrice: number;
}) {
    console.log("Front End POST")

    const response = await fetch("http://localhost:4020/new-item", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ itemName, itemPrice })
    });

    if (response.ok) {
        getItems();
    }
}