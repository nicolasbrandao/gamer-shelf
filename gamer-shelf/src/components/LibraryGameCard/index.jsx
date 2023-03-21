import { toggleGameInLibrary } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import { CgTrash } from 'react-icons/cg'
import { GoBrowser } from 'react-icons/go'
import { FaWindows } from 'react-icons/fa'
import { toast } from 'react-toastify'

const LibraryGameCard = ({ game }) => {
  const dispatch = useDispatch()

  const { libraryList } = useSelector((state) => {
    return {
      libraryList: state.library.libraryList,
    }
  })

  const handleToggleGame = (gameID) => {
    if (libraryList.includes(gameID)) {
      toast.error(`${game.title} removed from library`, {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
        'aria-live': 'polite', // added aria-live
      })
    } else {
      toast.success(`${game.title} added to library`, {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
        'aria-live': 'polite', // added aria-live
      })
    }

    dispatch(toggleGameInLibrary(gameID))
  }

  let infoContent
  if (game.platform === 'PC (Windows)') {
    infoContent = <FaWindows aria-label="Windows" />
  } else {
    infoContent = <GoBrowser aria-label="Browser" />
  }

  const gameContainer = classNames(
    'flex',
    'flex-col',
    'md:flex-row',
    'items-center',
    'justify-between',
    'px-4',
    'bg-frg1',
    'rounded',
    'xl:max-w-[50rem]',
    'w-full',
    'h-[15rem]',
    'p-4',
    'md:h-[8rem]',
    'shadow-2xl'
  )

  const gameHeader = classNames(
    'flex',
    'flex-col',
    'md:flex-row',
    'items-center',
    'gap-2'
  )

  const gameThumbnail = classNames(
    'w-[250px]',
    'md:w-[180px]',
    'h-[130px]',
    'md:h-[100px]',
    'rounded'
  )

  const gameTitle = classNames(
    'w-full',
    'md:w-[10rem]',
    'text-center',
    'font-bold'
  )

  const gameBody = classNames(
    'flex',
    'w-[15rem]',
    'md:w-[10rem]',
    'xl:w-[20rem]',
    'justify-between'
  )

  const gameGenre = classNames(
    'flex',
    'rounded',
    'bg-frg2',
    'px-1',
    'text-xs',
    'w-[5rem]',
    'items-center',
    'justify-center'
  )

  const icon = classNames('text-xl', 'cursor-pointer')

  return (
    <div className={gameContainer}>
      <Link to={`/game/${game.id}`} className={gameHeader}>
        <img className={gameThumbnail} src={game.thumbnail} alt={game.title} />
        <p className={gameTitle}>{game.title}</p>
      </Link>
      <div className={gameBody}>
        <div className={gameGenre}>{game.genre}</div>
        <div>{infoContent}</div>
        <div>
          <CgTrash
            className={icon}
            onClick={() => handleToggleGame(game.id)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleToggleGame(game.id)
              }
            }}
            tabIndex="0"
            role="button"
            aria-label="Remove game from library"
          />
        </div>
      </div>
    </div>
  )
}

export default LibraryGameCard
