import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./views/Home/Home"
import SecureRoute from "./components/SecureRoute/SecureRoute"
import Board from "./views/Board/Board"
import Profile from "./views/Profile/Profile"
import Login from "./views/Login/Login"
import Navbar from "./components/Navbar/Navbar"
import { Provider } from "react-redux"
import store from "./store"
import Footer from "./components/Footer/Footer"
import ToastProvider from "./components/Toast/ToastContext"
import MobileNav from "./components/MobileNav/MobileNav"

function App() {
  return (
    <Provider store={store}>
      <ToastProvider>
        <BrowserRouter>
          <main>
            <Navbar/>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/board" element={
                  <SecureRoute redirectionUrl="/login">
                    <Board/>
                  </SecureRoute>
                }/>
                <Route path="/profile" element={
                  <SecureRoute redirectionUrl="/login">
                    <Profile/>
                  </SecureRoute>
                }/>
                <Route path="/login" element={
                  <SecureRoute redirectionUrl="/board" disabledOnAuth>
                    <Login/>
                  </SecureRoute>
                }/>
              </Routes>
              <Footer/>
          </main>
          <MobileNav/>
        </BrowserRouter>
      </ToastProvider>
    </Provider>
  )
}

export default App
