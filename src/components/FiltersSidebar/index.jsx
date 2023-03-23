import classNames from 'classnames'
import { FiltersSidebarList } from './subcomponents'

const FiltersSidebar = () => {
  const filtersContainer = classNames('w-[280px]', 'p-4')

  return (
    <nav className={filtersContainer} aria-label="Advanced Filters">
      <FiltersSidebarList />
    </nav>
  )
}

export default FiltersSidebar
