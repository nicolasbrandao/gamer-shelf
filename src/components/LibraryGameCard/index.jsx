import { Link } from 'react-router-dom'
import classNames from 'classnames'
import { PlatformIcon } from '../'
import { RemoveFromLibraryIcon } from './subcomponents'

const LibraryGameCard = ({ game }) => {
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
    'h-[300px]',
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
    'bg-frg3',
    'text-bcg1',
    'px-1',
    'text-xs',
    'w-[5rem]',
    'items-center',
    'justify-center'
  )

  return (
    <div className={gameContainer}>
      <Link to={`/game/${game.id}`} className={gameHeader}>
        <img className={gameThumbnail} src={game.thumbnail} alt={game.title} />
        <p className={gameTitle}>{game.title}</p>
      </Link>
      <div className={gameBody}>
        <div className={gameGenre}>{game.genre}</div>
        <PlatformIcon platform={game.platform} />
        <RemoveFromLibraryIcon game={game} />
      </div>
    </div>
  )
}

export default LibraryGameCard
