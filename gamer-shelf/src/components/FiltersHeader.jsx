import classNames from 'classnames'
import { GoChevronDown, GoChevronUp } from "react-icons/go";

const FiltersHeader = ({data}) => {

  const filtersContainer = classNames(
    'mt-20',
    'flex',
    'gap-8',
    'w-full',
    'max-w-[50rem]',
    'mx-auto',
    'justify-between',
    'border'
  )

  const dropdownContainer = classNames(
    'flex',
    'gap-2'
  )

  return (
    <div className={filtersContainer}>
      <div className={dropdownContainer}>
        <span>Platform:</span>
        <div>All platforms</div>
      </div>
      <div className={dropdownContainer}>
        <span>Genre/Tag:</span>
        <div>All Genres</div>
      </div>
      <div className={dropdownContainer}>
        <span>Sort By:</span>
        <div>Relevance</div>
      </div>
      <div className={dropdownContainer}>
        <span>Advanced Filters</span>
      </div>
    </div>
  )
}

export default FiltersHeader