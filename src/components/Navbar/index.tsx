import { updateQueryType, RootState } from '@/store'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import { VscLibrary } from 'react-icons/vsc'
import { GoSettings } from 'react-icons/go'
import { IoGameControllerOutline } from 'react-icons/io5'

const Navbar = () => {
  const dispatch = useDispatch()

  const libraryLength = useSelector((state: RootState) => {
    return state.library.libraryList.length < 10
      ? state.library.libraryList.length
      : '9+'
  })

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

  const brandText = classNames('text-xl', 'font-bold')

  const brandIcon = classNames('text-2xl')

  const navList = classNames('list-none', 'flex', 'items-center', 'gap-4')

  const advancedFilters = classNames('flex', 'items-center', 'gap-2')

  const libraryIcon = classNames('text-2xl', 'cursor-pointer')

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
    <nav className={navbar} role="navigation">
      <Link
        to={'/'}
        onClick={() => dispatch(updateQueryType(false))}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            dispatch(updateQueryType(false))
          }
        }}
      >
        <div className={navBrand}>
          <span className={brandText}>GamerShelf</span>
          <IoGameControllerOutline className={brandIcon} aria-hidden="true" />
        </div>
      </Link>
      <div>
        <ul className={navList}>
          <li>
            <Link className={advancedFilters} to={'/filters'}>
              Filters
              <GoSettings aria-hidden="true" />
            </Link>
          </li>
          <li>
            <Link to="/library">
              <VscLibrary
                className={libraryIcon}
                aria-labelledby="library-icon-label"
              />
              <p id="library-icon-label" style={{ display: 'none' }}>
                Library
              </p>
              <div
                className={libCounter}
                aria-label={`${libraryLength} games in the library`}
              >
                {libraryLength}
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
