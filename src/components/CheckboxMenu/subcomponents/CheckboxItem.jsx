import { useSelector, useDispatch } from 'react-redux'
import { updateFiltersSelection } from '../../../store'
import classNames from 'classnames'
import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im'

const CheckboxItem = ({ item }) => {
  const { tags } = useSelector((state) => {
    return {
      tags: state.filters.tags,
    }
  })

  const dispatch = useDispatch()

  const handleClick = (tag) => {
    dispatch(updateFiltersSelection(tag))
  }

  const menuItemsContainer = classNames('flex', 'items-center', 'gap-2')

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
}

export default CheckboxItem
