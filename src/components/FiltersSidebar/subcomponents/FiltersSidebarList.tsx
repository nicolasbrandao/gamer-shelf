import { advancedFiltersContent } from '../../../constants'
import { FiltersSidebarListItem } from '.'

const FiltersSidebarList = () => {
  const filtersMenu = advancedFiltersContent.map((item) => (
    <FiltersSidebarListItem key={item.id} title={item.title} items={item.items} />
  ))

  return (
    <ul role="navigation" aria-label="Advanced Filters Navigation">
      {filtersMenu}
    </ul>
  )
}

export default FiltersSidebarList
