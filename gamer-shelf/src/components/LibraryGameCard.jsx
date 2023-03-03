import classNames from "classnames"
import { CgTrash } from 'react-icons/cg'
import { SlSettings } from 'react-icons/sl'
import { Link } from "react-router-dom"

const LibraryGameCard = ({game}) => {

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

  return (
    <div className={gameContainer}>
      <Link to={`/game/${game.id}`} className={gameHeader}>
        <img className={gameThumbnail} src={game.thumbnail} alt={game.title} />
        <p className={gameTitle}>{game.title}</p>
      </Link>
      <div>Currently Playing</div>
      <div>
        <SlSettings />
      </div>
      <div>
        <CgTrash />
      </div>
    </div>
  )
}

export default LibraryGameCard