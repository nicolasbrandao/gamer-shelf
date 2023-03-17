import 'react-toastify/dist/ReactToastify.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import classNames from "classnames"
import { ToastContainer } from 'react-toastify'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HomePage, AdvancedFiltersPage, LibraryPage } from "./pages"
import { Navbar, GameDetails, Footer } from "./components"

const App = () => {
  
  const appContainer = classNames(
    'font-montserrat',
    'pt-20',
    'md:w-[40rem]',
    'xl:w-[60rem]',
    'w-[20rem]',
    'mx-auto',
    'min-h-screen',
    'flex',
    'flex-col',
    'gap-6',
    'justify-between',
  )
  
  return (
    <BrowserRouter>
      <Navbar />
      <div className={appContainer}>
        <main>
          <Routes>
            <Route exact path={'/'} element={<HomePage />} />
            <Route path={'/library'} element={<LibraryPage />} />
            <Route path={'/game/:gameId'} element={<GameDetails />}/>
            <Route path={'/filters'} element={<AdvancedFiltersPage />}/>
          </Routes>
        </main>
        <Footer />
      </div>
      
      <ToastContainer
          position="bottom-right"
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
    </BrowserRouter>
  )
}

export default App
