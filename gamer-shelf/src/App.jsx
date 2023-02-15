import { GamesList, Navbar } from "./components"
import classNames from "classnames"

const App = () => {
  const appContainer = classNames(
    'font-poppins'
  )
  return (
    <div className={appContainer}>
        <Navbar />
      <div>
        <GamesList />
      </div>
    </div>
  )
}

export default App
