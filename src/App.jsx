import { BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Pages/Home"
import Booking from "./Pages/Booking"
import SignUp from "./Pages/SignUp"
import LogIn from "./Pages/LogIn"
import Cars from "./Pages/Cars"

const App = () => {
  const login = window.localStorage.getItem("isLogedIn")
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path='/' element={<Home />} /> */}
          <Route path='/' element={login ? <Home /> : <LogIn />} />
          <Route path='/home' element={<Home/>}/>
          <Route path='/cars' element={<Cars/>}/>
          <Route path='/booking' element={<Booking/>}/>
          <Route path='/login' element={<LogIn/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App