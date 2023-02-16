import classNames from "classnames";
import { useState } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";

const Dropdown = ({data}) => {
  const [toggle, setToggle] = useState(false)

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
    (toggle ? 'flex' : 'hidden')
  )

  const list = data.items.map((item) => <li key={item.id}>{item.title}</li> )

  return (
    <div>
      <div className={menuTitle} onClick={() => setToggle(prev => !prev)}>
        {data.title} <GoChevronDown className={menuIcon} />
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