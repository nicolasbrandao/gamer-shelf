import { GamesList, Navbar } from "./components"
import classNames from "classnames"

const App = () => {
  const appContainer = classNames(
    'font-montserrat'
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
