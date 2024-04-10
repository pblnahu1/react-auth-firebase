import { useState } from "react";
import { ButtonSubmit } from "./ButtonSubmit";
import { ButtonGoogle } from "./ButtonGoogle";

// eslint-disable-next-line react/prop-types
export function Formulario({ setUser }) {
  const [email, setEmail] = useState("")
  const [error, setError] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (email === "") {
      setError(true)
      return
    }

    setError(false)
    setUser([email])
  }

  return (
    <div className="max-h-full w-full max-w-xs">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}>
        <div>
          <img
            className=""
            src="src/assets/img.png"
            alt="Logo Login"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email">Email</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            id="email"
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        {error && <p className="text-red-500 mt-2 mb-2 text-center font-bold">Add your Email...</p>}
        <ButtonSubmit />
        <br />
        <ButtonGoogle />
      </form>

      <p className="text-center text-gray-500 text-xs">
        &copy;2020 RT Corp. All rights reserved.
      </p>
    </div>
  )
}