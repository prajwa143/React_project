import { useState } from 'react'
import './App.css'
import Header from './Components/Header'
import Sidebar from './Components/Slidebar'
import Home from './Pages/Home'


function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Home />
     
    </div>
  )
}

export default App