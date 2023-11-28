import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import SelectBar from './components/SelectBar/SelectBar'

const items = [
  {
      id:0,
      name: "test 1"
  }, {
      id: 1,
      name: "test 2"
  }, {
      id: 2,
      name: "test 3"
  }
]

export default function App() {

  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div className='w-full'>
      <Navbar/>
      <SelectBar items={items} selectTab={setActiveTab} />
    </div>
  )
}
