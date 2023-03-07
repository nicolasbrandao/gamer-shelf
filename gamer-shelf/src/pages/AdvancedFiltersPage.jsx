import classNames from "classnames"
import { FiltersSideBar, GamesList } from "../components"

const AdvancedFiltersPage = () => {
  const mainContainer = classNames(
    'flex',
    'w-[60rem]',
    'mx-auto'
  )

  return (
    <div className={mainContainer}>
      <aside>
        <FiltersSideBar />
      </aside>
      <section>
        <GamesList />
      </section>
    </div>
  )
}

export default AdvancedFiltersPage