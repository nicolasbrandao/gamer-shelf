import classNames from 'classnames'
import { FiltersSideBar, GamesList } from '../components'

const AdvancedFiltersPage = () => {
  const mainContainer = classNames(
    'flex',
    'flex-col',
    'items-center',
    'md:flex-row',
    'md:items-start',
    'md:justify-between',
    'w-[20rem]',
    'md:w-[40rem]',
    'xl:w-[60rem]',
    'mx-auto'
  )

  return (
    <div className={mainContainer}>
      <aside>
        <FiltersSideBar />
      </aside>
      <>
        <GamesList />
      </>
    </div>
  )
}

export default AdvancedFiltersPage
