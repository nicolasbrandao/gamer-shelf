import { advancedFiltersContent } from '../../../constants'
import { FiltersSidebarListItem } from '.'

const FiltersSidebarList = () => {
  const filtersMenu = advancedFiltersContent.map((item) => (
    <FiltersSidebarListItem key={item.id} data={item} />
  ))

  return (
    <ul role="navigation" aria-label="Advanced Filters Navigation">
      {filtersMenu}
    </ul>
  )
}

export default FiltersSidebarList
