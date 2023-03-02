import classNames from "classnames"
import { GoChevronDown, GoChevronUp } from "react-icons/go"
import { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleFilters } from "../store";

const FiltersDropdown = ({data}) => {
  const dispatch = useDispatch();

  const isOpen = useSelector((state) => {
    return state.filters.isOpen;
  })

  const handleClick = (dropDownID) => {
    dispatch(toggleFilters(dropDownID));
  }

  const divEl = useRef(null);

  useEffect(() => {
    const handler = (event) => {
      if (!divEl.current.contains(event.target)) {
        dispatch(toggleFilters(''));
      }
    };
  
    document.addEventListener('mousedown', handler);
  
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, [dispatch, divEl]);

  const menuContainer = classNames(
    'absolute',
    'top-[7rem]',
    'bg-frg3',
    'rounded',
    'min-w-[120px]',
    'p-2',
    (isOpen === data.id ? 'flex' : 'hidden')
  )

  const menuTitle = classNames(
    'flex',
    'items-center',
    'gap-1',
    'cursor-pointer'
  )

  const menuIcon = classNames(
    'text-xl',
  )

  const list = data.items.map((item) => <li key={item.id}>{item.title}</li> )
  const iconContent = isOpen === data.id ? <GoChevronUp className={menuIcon} /> : <GoChevronDown className={menuIcon} />

  return (
    <div ref={divEl}>
      <div className={menuTitle}  onClick={() => handleClick(data.id)}>
        {data.title}{iconContent}
      </div>
      <div className={menuContainer}>
        <ul>
          {list}
        </ul>
      </div>
    </div>
  )
}

export default FiltersDropdown