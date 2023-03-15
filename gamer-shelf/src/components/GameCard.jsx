import classNames from "classnames"
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from "react-redux"
import { toggleGameInLibrary } from '../store'
import { GoPlus, GoX, GoBrowser } from "react-icons/go"
import { FaWindows } from "react-icons/fa"
import { Link } from 'react-router-dom'

const GameCard = ({game}) => {
  const dispatch = useDispatch();
  const { libraryList } = useSelector((state) => {
    return {
      libraryList: state.library.libraryList
    }
  })

  const handleToggleGame = (gameID) => {
    if (libraryList.includes(gameID)) {
      toast.error(`${game.title} removed from library`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    } else {
      toast.success(`${game.title} added to library`, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
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
    'w-[280px]',
    'h-[300px]',
    'flex-auto',
    'shadow-2xl'
  )

  const gameLink = classNames(
    'flex',
    'flex-col',
    'gap-4'
  )

  const gameTitle = classNames(
    'text-center',
    'text-txt1',
    'text-xl',
    'font-bold',
    'cursor-pointer',
  )

  const gameThumbnail = classNames(
    'w-full',
    'rounded-t',
    'overflow-hidden',
    'cursor-pointer',
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
  )

  const addButton = classNames(
    'flex',
    'items-center',
    'justify-center',
    'rounded-full',
    'text-xl'
  )

  const gameInfo = classNames(
    'flex',
    'gap-3',
    'items-center',
    'justify-center'
  )

  const gameDescription = classNames(
    'text-sm'
  )

  const gameGenre = classNames(
    'rounded',
    'bg-frg2',
    'px-1',
    'text-sm',
    'text-xs'
  )

  let infoContent;
  if (game.platform === 'PC (Windows)'){
    infoContent = <FaWindows />
  } else {
    infoContent = <GoBrowser />;
  }

  let toggleLibraryIcon = libraryList.includes(game.id) ? 
    <GoX className={addButton} onClick={() => handleToggleGame(game.id)} /> : 
    <GoPlus className={addButton} onClick={() => handleToggleGame(game.id)} />

  return (
    
      <div className={gameContainer}>
        <Link className={gameLink} to={`/game/${game.id}`}>
          <div>
            <img className={gameThumbnail} src={game.thumbnail} alt={game.title} />
          </div>
          <div className={gameTitle}>
              {game.title}
          </div>
        </Link>
        <div className={gameBody}>
          <div className={gameDescription}>
            {game.short_description.substring(0, 25) + '...'}
          </div>
          <div className={gameFooter}>
            <div className={buttonContainer}>
              {toggleLibraryIcon}
            </div>
            <div className={gameInfo}>
              <div className={gameGenre}>{game.genre}</div>
              <div>{infoContent}</div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default GameCard