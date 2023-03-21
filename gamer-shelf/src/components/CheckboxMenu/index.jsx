import { updateFiltersSelection } from '../../store'
import { useSelector, useDispatch } from 'react-redux'
import classNames from 'classnames'
import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im'

const CheckboxMenu = ({ data }) => {
  const dispatch = useDispatch()
  const { tags } = useSelector((state) => {
    return {
      tags: state.filters.tags,
    }
  })

  const handleClick = (tag) => {
    dispatch(updateFiltersSelection(tag))
  }

  const menuContainer = classNames(
    'bg-frg1',
    'rounded',
    'p-2',
    'mb-4',
    'max-h-[350px]',
    'overflow-y-auto'
  )

  const menuTitle = classNames('font-bold', 'text-xl')

  const menuItemsContainer = classNames('flex', 'items-center', 'gap-2')

  const checkBoxItems = data.items.map((item) => {
    const isChecked = tags.includes(item.id)
    const icon = isChecked ? (
      <ImCheckboxChecked aria-hidden="true" />
    ) : (
      <ImCheckboxUnchecked aria-hidden="true" />
    )

    return (
      <li
        key={item.id}
        className={menuItemsContainer}
        onClick={() => handleClick(item.id)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleClick(item.id)
          }
        }}
        tabIndex="0"
        role="menuitemcheckbox"
        aria-checked={isChecked}
        aria-labelledby={`label-${item.id}`}
      >
        {icon}
        <span id={`label-${item.id}`}>{item.title}</span>
      </li>
    )
  })

  return (
    <nav className={menuContainer} aria-label={data.title}>
      <h2 className={menuTitle} aria-label={data.title}>
        {data.title}
      </h2>
      <ul role="menu">{checkBoxItems}</ul>
    </nav>
  )
}

export default CheckboxMenu
