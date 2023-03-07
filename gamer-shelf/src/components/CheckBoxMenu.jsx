import classNames from 'classnames'
import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im'
import { updateFiltersSelection } from '../store'
import { useSelector, useDispatch } from 'react-redux'

const CheckBoxMenu = ({data}) => {
  const dispatch = useDispatch();
  const { currentSelection } = useSelector((state) => {
    return {
      currentSelection: state.filters.currentSelection
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

  const menuTitle = classNames(
    'font-bold',
    'text-xl'
  )

  const menuItemsContainer = classNames(
    'flex',
    'items-center',
    'gap-2'
  )

  const checkBoxItems = data.items.map(item => {
    const icon = currentSelection.includes(item.id) ?
    <ImCheckboxChecked /> :
    <ImCheckboxUnchecked />

    return (
      <li key={item.id} className={menuItemsContainer} onClick={() => handleClick(item.id)}>
        {icon}{item.title}
      </li>
    )
  })

  return (
    <div className={menuContainer}>
      <div className={menuTitle}>
        {data.title}
      </div>
      <ul>
        {checkBoxItems}
      </ul>
    </div>
  )
}

export default CheckBoxMenu