import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { toggle, updateSelection } from '../store'
import { GoChevronDown, GoChevronUp } from "react-icons/go";
import { useRef, useEffect } from "react";

const Dropdown = ({data}) => {
  const dispatch = useDispatch();

  const isOpen = useSelector((state) => {
    return state.dropdowns.isOpen;
  })

  const divEl = useRef(null);

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current.contains(event.target)) {
        dispatch(toggle(''));
      }
    };
  
    document.addEventListener('mousedown', handler);
  
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, [dispatch, divEl]);

  const handleClick = (dropDownID) => {
    dispatch(toggle(dropDownID));
  }

  const handleSelect = (item) => {
    dispatch(toggle(''));
    dispatch(updateSelection(item.id))
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

  const list = data.items.map((item) => <li key={item.id} onClick={() => handleSelect(item)}>{item.title}</li> )
  const iconContent = isOpen === data.id ? <GoChevronUp className={menuIcon} /> : <GoChevronDown className={menuIcon} />

  return (
    <div ref={divEl}>
      <div className={menuTitle} onClick={() => handleClick(data.id)}>
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
