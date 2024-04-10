export async function fetchData(setUserData, setLoading) {
  try {
    const res = await fetch("https://63b6e1a74f17e3a931c34175.mockapi.io/test/v1/Users", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json()
    const sliceData = data.slice(0, 10)
    setUserData(sliceData)
    setLoading(false)
    console.log(sliceData)
  } catch (error) {
    console.error('Error al obtener los datos: ', error)
  }
}

fetchData()