import { useState,useEffect ,useRef ,useContext} from 'react'
import Header from './Components/Header/Header'
import {HeroCarousel,DiscountHeader,slides,slides2,slides3,slides4} from "./index"
import Parent from './Components/Parent';
import {UseContext} from './ContextAPI/context';

import UserContextProvider from './ContextAPI/UserContextProvider';
function App() {
  const [count, setCount] = useState(0);
  const inputRef = useRef(0);
  const {age,course} = useContext(UseContext);
  const [user,setUser]=useState("Vishal");


  function counter(){
      setCount((prev)=>prev+1);
  }
  const htmlContent = "<img src=x onerror=alert('Hacked') />";

  useEffect(() => {
  const timer = setInterval(() => {
    console.log("Running...");
  }, 1000);

  

  return () => {
    clearInterval(timer);
  };
}, []);

     const onfocus = ()=>{
         inputRef.current+=1;
         console.log(inputRef.current);
      }

  return (
    <>
      {/* <Header/>
      <DiscountHeader/>
      <HeroCarousel slides={slides}/>
      <HeroCarousel slides={slides2}/>
      <HeroCarousel slides={slides3}/>
      <HeroCarousel slides={slides4}/> */}
      <UserContextProvider>

        <Parent/>
      </UserContextProvider>
      
      
    </>
  )
}

export default App
