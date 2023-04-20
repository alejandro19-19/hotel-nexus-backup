import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/homePage/HomePage"
import Login from "./pages/login/Login"
import Register from "./pages/register/Register"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />}/>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
