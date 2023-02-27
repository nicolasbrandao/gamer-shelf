import classNames from "classnames"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, GamesList, LibraryList } from "./components"

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
      </div>
    </BrowserRouter>
  )
}

export default App
