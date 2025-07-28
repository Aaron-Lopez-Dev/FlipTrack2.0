// composables/setParameters.ts
export async function setParameters({
  zipInput,
  searchInput,
  radiusInput
}: {
  zipInput: string
  searchInput: string
  radiusInput: string
}) {
  try {
    await fetch("http://localhost:4020/set-parameters", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ radiusInput })
    })

    await fetch("http://localhost:4020/set-zip", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ zipInput })
    })

    await fetch("http://localhost:4020/set-search", {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ searchInput })
    })

   // console.log("All Parameters Passed")
  } catch (err) {
    console.error("Error", err)
  }
}
