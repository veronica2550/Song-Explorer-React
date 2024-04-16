import './App.css'
import SongList from './components/SongList'
import SearchBar from './components/SearchBar'

const data = [{
    "brand": "joysound",
    "no": "916281",
    "title": "(NOT JUST) KNEE DEEP",
    "singer": "FUNKADELIC",
    "composer": "G.CLINTON,JR.",
    "lyricist": "G.CLINTON,JR.",
    "release": "2012-06-18"
  },
  {
    "brand": "joysound",
    "no": "227531",
    "title": "(This is not just)Song for me",
    "singer": "Syrup16g",
    "composer": "Takashi Igarashi",
    "lyricist": "Takashi Igarashi",
    "release": "2005-11-10"
  },
  {
    "brand": "joysound",
    "no": "239259",
    "title": "4 MY PEOPLE(BASEMENT JAXX REMIX)",
    "singer": "MISSY ELLIOTT",
    "composer": "ELLIOTT MELISSA A,JEFFERS EVE,NOLEN DANTE MAURICE,STEWART NISAN C",
    "lyricist": "ELLIOTT MELISSA A,JEFFERS EVE,NOLEN DANTE MAURICE,STEWART NISAN C",
    "release": "2006-10-19"
  },]

function App() {

  return (
    <>
      <SearchBar/>
      <SongList data = {data}/>
    </>
  )
}

export default App
