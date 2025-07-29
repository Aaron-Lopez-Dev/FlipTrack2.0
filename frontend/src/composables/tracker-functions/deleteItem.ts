import { getItems } from './getItems'

export async function deleteItem(index: Number) {
    console.log(index)

    const response = await fetch("http://localhost:4020/delete-item", {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ index }),
    })
    if (response.ok) {
        getItems();
    }

}