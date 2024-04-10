
import { useState } from 'react'
import './App.css'
import { Formulario } from './components/Formulario'
import { TableData } from './components/TableData'

function App() {
  const [user, setUser] = useState([])

  return (
    <div className='grid place-content-center h-screen bg-slate-950'>
      {
        !user.length > 0
          ? <Formulario setUser={setUser} />
          : <TableData user={user} setUser={setUser} />
      }
    </div>
  )
}

export default App
