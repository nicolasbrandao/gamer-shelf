import classNames from 'classnames'
import { filtersContent } from '../constants'
import { FiltersDropdown, Dropdown } from './'
import { GoSettings } from 'react-icons/go'

const FiltersHeader = () => {
  const filtersMenus = filtersContent.map(item => {
    return (
      <li key={item.id}>
        <FiltersDropdown data={item} />
      </li>
    )
  })

  const filtersContainer = classNames(
    'mt-20',
    'flex',
    'gap-4',
    'w-full',
    'max-w-[50rem]',
    'mx-auto',
    'items-center',
    'justify-center',
  )

  const filtersList = classNames(
    'list-none',
    'flex',
    'flex-row',
    'items-center',
    'justify-center',
    'gap-[6rem]'
  )
  
  const advancedWrapper = classNames(
    'flex',
    'items-center',
    'gap-2',
    'cursor-pointer'
  )

  return (
    <div className={filtersContainer}>
      <ul className={filtersList}>
        {filtersMenus}
        <li className={advancedWrapper}>
          Advanced Filters
          <GoSettings />
        </li>
      </ul>
    </div>
  )
}

export default FiltersHeader