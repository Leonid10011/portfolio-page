import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Outlet } from 'react-router'

export default function App() {

  return (
    <div className='w-full'>
      <Navbar/>
      <Outlet/>
    </div>
  )
}
