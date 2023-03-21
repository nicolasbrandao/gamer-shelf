import classNames from 'classnames'
import { advancedFiltersContent } from '../../constants'
import { CheckBoxMenu } from '..'

const FiltersSidebar = () => {
  const filtersContainer = classNames('w-[280px]', 'p-4')

  const filtersMenu = advancedFiltersContent.map((item) => {
    return (
      <li key={item.id}>
        <CheckBoxMenu data={item} />
      </li>
    )
  })

  return (
    <nav className={filtersContainer} aria-label="Advanced Filters">
      <ul role="navigation" aria-label="Advanced Filters Navigation">
        {filtersMenu}
      </ul>
    </nav>
  )
}

export default FiltersSidebar
