import classNames from 'classnames'
import { MdOutlineLibraryBooks } from 'react-icons/md'

const Navbar = () => {
  const navbar = classNames(
    'flex',
    'justify-between',
    'fixed',
    'top-0',
    'w-full',
    'p-4',
    'bg-frg1',
    'shadow-2xl'
  )

  const navList = classNames(
    'list-none',
    'flex',
    'items-center',
    'gap-4',
    'pointer'
  )

  return (
    <nav className={navbar}>
      <div>
        GamerShelf
      </div>
      <div>
        <ul className={navList}>
          <li>All Games</li>
          <li>Browser Games</li>
          <li><MdOutlineLibraryBooks /></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar