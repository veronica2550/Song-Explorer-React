import './App.css'
import SongList from './components/SongList'
import SearchBar from './components/SearchBar'
import { useState } from 'react'


function App() {
  const [data, setData] = useState([]);
  return (
    <>
      <SearchBar setData = {setData}/>
      <SongList data = {data}/>
    </>
  )
}

export default App
