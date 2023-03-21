import { toggleGameInLibrary } from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import classNames from 'classnames'
import { toast } from 'react-toastify'
import { GoPlus, GoX, GoBrowser } from 'react-icons/go'
import { FaWindows } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const GameCard = ({ game }) => {
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
        ariaLive: 'polite',
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
        ariaLive: 'polite',
      })
    }

    dispatch(toggleGameInLibrary(gameID))
  }

  const gameContainer = classNames(
    'flex',
    'flex-col',
    'bg-frg1',
    'items-center',
    'rounded',
    'max-w-[280px]',
    'md:max-w-[320px]',
    'w-[280px]',
    'h-[300px]',
    'flex-auto',
    'shadow-2xl'
  )

  const gameLink = classNames('flex', 'flex-col', 'gap-4')

  const gameTitle = classNames(
    'text-center',
    'text-txt1',
    'text-xl',
    'font-bold',
    'cursor-pointer'
  )

  const gameThumbnail = classNames(
    'w-full',
    'rounded-t',
    'overflow-hidden',
    'cursor-pointer'
  )

  const gameBody = classNames(
    'p-4',
    'h-[12rem]',
    'w-full',
    'flex',
    'flex-col',
    'items-center',
    'justify-between'
  )

  const gameFooter = classNames(
    'flex',
    'items-center',
    'justify-between',
    'w-full'
  )

  const buttonContainer = classNames(
    'flex',
    'items-center',
    'justify-center',
    'cursor-pointer',
    'focus:outline-none',
    'focus:ring',
    'focus:border-blue-300'
  )

  const addButton = classNames(
    'flex',
    'items-center',
    'justify-center',
    'rounded-full',
    'text-xl'
  )

  const gameInfo = classNames('flex', 'gap-3', 'items-center', 'justify-center')

  const gameDescription = classNames('text-sm')

  const gameGenre = classNames('rounded', 'bg-frg2', 'px-1', 'text-xs')

  let infoContent
  if (game.platform === 'PC (Windows)') {
    infoContent = <FaWindows aria-label="Platform: PC (Windows)" />
  } else {
    infoContent = <GoBrowser aria-label="Platform: Browser" />
  }

  let toggleLibraryIcon = libraryList.includes(game.id) ? (
    <GoX
      className={addButton}
      onClick={() => handleToggleGame(game.id)}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          handleToggleGame(game.id)
        }
      }}
      role="button"
      tabIndex="0"
      aria-label={`Remove ${game.title} from library`}
    />
  ) : (
    <GoPlus
      className={addButton}
      onClick={() => handleToggleGame(game.id)}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          handleToggleGame(game.id)
        }
      }}
      role="button"
      tabIndex="0"
      aria-label={`Add ${game.title} to library`}
    />
  )

  return (
    <div className={gameContainer}>
      <Link className={gameLink} to={`/game/${game.id}`}>
        <img
          className={gameThumbnail}
          src={game.thumbnail}
          alt={game.title + ' thumbnail'}
        />
        <h2 className={gameTitle}>{game.title}</h2>
      </Link>
      <div className={gameBody}>
        <p className={gameDescription}>
          {game.short_description.substring(0, 25) + '...'}
        </p>
        <div className={gameFooter}>
          <div className={buttonContainer}>{toggleLibraryIcon}</div>
          <div className={gameInfo}>
            <p className={gameGenre}>{game.genre}</p>
            <div>{infoContent}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameCard
