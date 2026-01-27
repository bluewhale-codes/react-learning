import { useState } from 'react'
import Header from './Components/Header/Header'
import {HeroCarousel,DiscountHeader,slides,slides2,slides3,slides4} from "./index"


function App() {
  const [count, setCount] = useState(0)
  
  


  return (
    <>
      <Header/>
      <DiscountHeader/>
      <HeroCarousel slides={slides}/>
      <HeroCarousel slides={slides2}/>
      <HeroCarousel slides={slides3}/>
      <HeroCarousel slides={slides4}/>
     
    </>
  )
}

export default App
