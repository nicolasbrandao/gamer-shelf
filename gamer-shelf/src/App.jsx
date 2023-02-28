import classNames from "classnames"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Navbar, GamesList, LibraryList, Footer } from "./components"

const App = () => {
  const appContainer = classNames(
    'font-montserrat'
  )
  return (
    <BrowserRouter>
      <div className={appContainer}>
        <Navbar />
        <div>
          <Routes>
            <Route exact path={'/'} element={<GamesList />} />
            <Route path={'/library'} element={<LibraryList />} />
          </Routes>
        </div>
        <div>
          <Footer />
        </div>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    </BrowserRouter>
  )
}

export default App
