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
    <div className="grid place-content-center max-h-dvh p-8 text-center bg-slate-300 text-black">
      <div className="">
        <h1 className="text-xl">
          ¡Bienvenido!
        </h1>
        <p className="text-gray-900 text-lg mb-1 font-medium title-font">
          {user}
        </p>
      </div>

      <div className="">
        <h3 className="text-lg font-semibold mb-2 text-black">Registros</h3>
        <table>
          <thead>
            <tr>
              <th className="py-2 px-4 border border-gray-300">Created At</th>
              <th className="py-2 px-4 border border-gray-300">Name</th>
              <th className="py-2 px-4 border border-gray-300">Color</th>
              <th className="py-2 px-4 border border-gray-300">Is Leader</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user) => (
              <tr key={user.id}>
                <td className="py-2 px-4 border border-gray-300 text-black">
                  {user.createdAt}
                </td>
                <td className="py-2 px-4 border border-gray-300 text-black">
                  {user.name}
                </td>
                <td className="py-2 px-4 border border-gray-300 text-black">
                  {user.color}
                </td>
                <td className="py-2 px-4 border border-gray-300 text-black">
                  {user.isLeader}
                </td>
                <td className="py-2 px-4 border border-gray-300 text-black">
                  {user.id}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-700 rounded text-lg" onClick={handleLogout}>Cerrar Sesión</button>
    </div>
  )
}