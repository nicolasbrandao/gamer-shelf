import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from '../store'
import { GoChevronDown, GoChevronUp } from "react-icons/go";

const Dropdown = ({data}) => {
  const dispatch = useDispatch();

  const isOpen = useSelector((state) => {
    return state.dropdowns.isOpen;
  })

  const handleClick = (dropDownID) => {
    dispatch(toggle(dropDownID));
  }

  const menuTitle = classNames(
    'flex',
    'items-center',
    'gap-1',
    'cursor-pointer'
  )

  const menuIcon = classNames(
    'text-xl',
  )

  const menuContainer = classNames(
    'absolute',
    'top-[4rem]',
    'bg-frg3',
    'rounded',
    'min-w-[120px]',
    'p-2',
    (isOpen === data.id ? 'flex' : 'hidden')
  )

  const list = data.items.map((item) => <li key={item.id}>{item.title}</li> )
  const iconContent = isOpen === data.id ? <GoChevronUp className={menuIcon} /> : <GoChevronDown className={menuIcon} />

  return (
    <div onClick={() => handleClick(data.id)}>
      <div className={menuTitle}>
        {data.title} {iconContent}
      </div>
      <div className={menuContainer}>
        <ul>
          {list}
        </ul>
      </div>
    </div>
  )
}

export default Dropdown