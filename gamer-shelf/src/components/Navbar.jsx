import { Dropdown } from './'
import { useSelector } from 'react-redux'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { dropDownContent } from '../constants'
import { VscLibrary } from 'react-icons/vsc'
import { IoGameControllerOutline } from 'react-icons/io5'


const Navbar = () => {
  const navMenus = dropDownContent.map(item => {
    return (
      <li key={item.id}>
        <Dropdown data={item} />
      </li>
    )
  })

  const libraryLength = useSelector((state) => {
    return state.library.libraryList.length < 10 ? state.library.libraryList.length : '9+'
  });

  const navbar = classNames(
    'flex',
    'justify-between',
    'fixed',
    'top-0',
    'z-10',
    'w-full',
    'p-4',
    'bg-frg1',
    'shadow-2xl'
  )

  const navBrand = classNames(
    'flex',
    'items-center',
    'justify-center',
    'gap-2',
    'cursor-pointer'
  )

  const brandText = classNames(
    'text-xl',
    'font-bold'
  )

  const brandIcon = classNames(
    'text-2xl'
  )

  const navList = classNames(
    'list-none',
    'flex',
    'items-center',
    'gap-4'
  )

  const libraryIcon = classNames(
    'text-2xl',
    'cursor-pointer'
  )

  const libCounter = classNames(
    'rounded-full',
    'bg-red-600',
    'absolute',
    'top-7',
    'right-2',
    'h-[18px]',
    'w-[18px]',
    'text-[10px]',
    'justify-center',
    'items-center',
    'border-2',
    'border-frg1',
    libraryLength === 0 ? 'hidden' : 'flex'
  )
  
  return (
    <nav className={navbar}>
      
      <Link to={'/'}>
        <div className={navBrand}>
          <span className={brandText}>GamerShelf</span> 
          <IoGameControllerOutline className={brandIcon} />
        </div>
      </Link>
      <div>
        <ul className={navList}>
          {navMenus}
          <li>
            <Link to='/library'>
              <VscLibrary className={libraryIcon} />
              <div className={libCounter}>{libraryLength}</div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar