
import { useEffect, useState } from 'react'
import './App.css'
import { Formulario } from './components/Formulario'
import { TableData } from './components/TableData'
// Importando módulos de Firebase
import appFirebase from './logic/credenciales'
// eslint-disable-next-line no-unused-vars
import { getAuth, onAuthStateChanged } from 'firebase/auth'
// eslint-disable-next-line no-unused-vars
const auth = getAuth(appFirebase)

function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userFirebase) => {
      if (userFirebase) {
        setUser(userFirebase)
      } else {
        setUser(null)
      }
      setLoading(false)
    })

    return () => unsubscribe
  }, [])

  if (loading) {
    return <p>Loading...</p>
  }

  // onAuthStateChanged(auth, (userFirebase) => {
  //   if (userFirebase) {
  //     setUser(userFirebase)
  //   } else {
  //     setUser(null)
  //   }
  // })

  return (
    <div className='flex flex-col justify-center items-center bg-slate-950' style={{height:"56.9rem", width:"100%"}}>
      {
        user
        ? <TableData user={user} setUser={setUser} />
        : <Formulario setUser={setUser} />
      }
    </div>
  )
}

export default App
