import classNames from "classnames"
import { advancedFiltersContent } from "../constants"
import { CheckBoxMenu } from './'

const FiltersSideBar = () => {
  const filtersContainer = classNames(
    'w-[280px]',
    'p-4',
  )

  const filtersMenu = advancedFiltersContent.map(item => {
    return <li key={item.id}><CheckBoxMenu data={item}/></li>
  })

  return (
    <div className={filtersContainer}>
      <ul>
        {filtersMenu}
      </ul>
    </div>
  )
}

export default FiltersSideBar