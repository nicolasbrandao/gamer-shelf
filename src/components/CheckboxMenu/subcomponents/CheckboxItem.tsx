import { useSelector, useDispatch } from 'react-redux'
import { RootState, updateFiltersSelection } from '@/store'
import classNames from 'classnames'
import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im'

type PropsType = {
  id: string
  title: string
}

const CheckboxItem = ({ id, title }: PropsType) => {
  const { tags } = useSelector((state: RootState) => {
    return {
      tags: state.filters.tags,
    }
  })

  const dispatch = useDispatch()

  const handleClick = (tag: string) => {
    dispatch(updateFiltersSelection(tag))
  }

  const menuItemsContainer = classNames('flex', 'items-center', 'gap-2')

  const isChecked = tags.includes(id)
  const icon = isChecked ? (
    <ImCheckboxChecked aria-hidden="true" />
  ) : (
    <ImCheckboxUnchecked aria-hidden="true" />
  )

  return (
    <li
      key={id}
      className={menuItemsContainer}
      onClick={() => handleClick(id)}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          handleClick(id)
        }
      }}
      tabIndex={0}
      role="menuitemcheckbox"
      aria-checked={isChecked}
      aria-labelledby={`label-${id}`}
    >
      {icon}
      <span id={`label-${id}`}>{title}</span>
    </li>
  )
}

export default CheckboxItem
