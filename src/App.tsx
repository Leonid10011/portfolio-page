import './App.css'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import { Outlet } from 'react-router'

export default function App() {

  return (
    <div className='flex flex-col w-full min-h-screen'>
      <Navbar/>
        <div className=' self-center sm:max-w-screen-sm flex-1'>
          <Outlet/>
        </div>
      <Footer/>
    </div>
  )
}
