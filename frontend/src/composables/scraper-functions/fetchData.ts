import { ref } from "vue";

let listingDataPull = ref([]);
let average = ref("");
let isLoading = ref(false);

async function fetchData({
  zipInput,
  searchInput,
  radiusInput,
}: {
  zipInput: string;
  searchInput: string;
  radiusInput: string;
}) {
  console.log("Fetching Data...");
  isLoading.value = true;

  try {
    const response = await fetch("http://localhost:4020/new-search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ searchInput, radiusInput, zipInput }),
    });

    const data = await response.json();

    average.value = `$${Math.floor(data.average).toLocaleString()}`;
    listingDataPull.value = data.listingData;


  } catch (error) {
    console.error("Fetch failed:", error);
  } finally {
    isLoading.value = false;
  }
}

export { fetchData, listingDataPull, average, isLoading };
