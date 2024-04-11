
import { useState } from 'react'
import './App.css'
import { Formulario } from './components/Formulario'
import { TableData } from './components/TableData'

function App() {
  const [user, setUser] = useState([])

  return (
    <div className='flex flex-col justify-center items-center bg-slate-950' style={{height:"56.9rem", width:"100%"}}>
      {
        !user.length > 0
          ? <Formulario setUser={setUser} />
          : <TableData user={user} setUser={setUser} />
      }
    </div>
  )
}

export default App
