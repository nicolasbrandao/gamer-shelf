import classNames from "classnames"
import { CgTrash } from 'react-icons/cg'
import { SlSettings } from 'react-icons/sl'
import { Link } from "react-router-dom"
import { toast } from 'react-toastify'
import { toggleGameInLibrary } from '../store'
import { useDispatch, useSelector } from "react-redux"

const LibraryGameCard = ({game}) => {
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
    'items-center',
    'justify-between',
    'px-4',
    'bg-frg1',
    'rounded',
    'max-w-[50rem]',
    'w-[50rem]',
    'h-[8rem]',
    'shadow-2xl'
  )

  const gameHeader = classNames(
    'flex',
    'items-center',
    'gap-2'
  )

  const gameThumbnail = classNames(
    'w-[180px]',
    'h-[100px]',
    'rounded'
  )

  const gameTitle = classNames(
    'w-[10rem]',
    'text-center'
  )

  const icon = classNames(
    'text-xl',
    'cursor-pointer'
  )

  return (
    <div className={gameContainer}>
      <Link to={`/game/${game.id}`} className={gameHeader}>
        <img className={gameThumbnail} src={game.thumbnail} alt={game.title} />
        <p className={gameTitle}>{game.title}</p>
      </Link>
      <div>
        {game.short_description.substring(0, 40) + '...'}
      </div>
      <div>
        <CgTrash className={icon} onClick={() => handleToggleGame(game.id)} />
      </div>
    </div>
  )
}

export default LibraryGameCard