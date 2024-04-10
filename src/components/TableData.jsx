/* eslint-disable react/prop-types */
import { useState, useEffect } from "react"
import { fetchData } from "../logic/fetching-data"

// eslint-disable-next-line react/prop-types
export function TableData({ user, setUser }) {

  const [userData, setUserData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchData(setUserData, setLoading)
  }, [])

  const handleLogout = () => {
    setUser([])
  }

  if (loading) {
    return <p className="text-white">Loading...</p>
  }

  // eslint-disable-next-line react/prop-types
  if (!userData || !Array.isArray(userData) || userData.length === 0) {
    return <p className="text-white">No hay datos de usuario disponibles</p>
  }

  return (
    <div className="rounded-lg text-center text-white w-11/12 m-auto">
      <div className="flex flex-wrap flex-row justify-around items-center mb-9 mt-9">
        <div className="">
          <h1 className="text-xl">
            ¡Bienvenido!
          </h1>
          <p className="text-white-900 text-lg mb-1 font-medium title-font">
            {user}
          </p>
        </div>
        <div className="">
          <button
            className="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-700 rounded text-lg"
            onClick={handleLogout}>
            Log Out
          </button>
        </div>
      </div>

      <div className="overflow-auto rounded-lg shadow bg-neutral-900 p-5 mb-10">
        <table className="w-full">
          <thead className="border-b-2 border-l-stone-200">
            <tr>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">Created At</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">Name</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">Color</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">Is Leader</th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">ID</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user) => (
              <tr className="whitespace-nowrap" key={user.id}>
                <td className="p-3 text-left text-lg text-gray-300">{user.createdAt}</td>
                <td className="p-3 text-left text-lg text-gray-300">{user.name}</td>
                <td className="p-3 text-left text-lg text-gray-300">{user.color}</td>
                <td className="p-3 text-left text-lg text-gray-300">{user.isLeader}</td>
                <td className="p-3 text-left text-lg text-gray-300">{user.id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}