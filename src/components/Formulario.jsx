import { useState } from "react";
import { ButtonSubmit } from "./ButtonSubmit";
import { ButtonGoogle } from "./ButtonGoogle";

import appFirebase from "../logic/credenciales";
// eslint-disable-next-line no-unused-vars
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(appFirebase)

// eslint-disable-next-line react/prop-types
export function Formulario({setUser}) { // { setUser }
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)

  const handleSubmitAuthenticationFirebase = async (e) => {
    e.preventDefault()
    
    if (email === "" || password === "") {
      setError(true)
      return  
    } else {
      try {
        await signInWithEmailAndPassword(auth, email, password)
        setUser(email)
      } catch (error) {
        setError(true)
        console.error('Error signing in: ', error.message)
      }
    }
  }

  return (
    <div className="max-h-full w-full max-w-xs">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmitAuthenticationFirebase}>
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
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="clave">Contraseña</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            id="clave"
            placeholder="example@gmail.com"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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