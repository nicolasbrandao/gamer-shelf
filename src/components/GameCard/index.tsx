import classNames from 'classnames'
import { Link } from 'react-router-dom'
import { PlatformIcon } from '..'
import { ToggleInLibraryIcon } from './subcomponents'

type PropsType = {
  id: string
  thumbnail: string
  title: string
  short_description: string
  genre: string
  platform: string
}

const GameCard = ({
  id,
  thumbnail,
  title,
  short_description,
  genre,
  platform,
}: PropsType) => {
  const gameContainer = classNames(
    'flex',
    'flex-col',
    'bg-frg1',
    'items-center',
    'rounded',
    'w-[280px]',
    'h-[300px]',
    'shadow-2xl'
  )

  const gameLink = classNames('flex', 'flex-col', 'gap-4')

  const gameTitle = classNames(
    'text-center',
    'text-xl',
    'font-bold',
    'cursor-pointer'
  )

  const gameThumbnail = classNames(
    'w-[280px]',
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

  const gameInfo = classNames('flex', 'gap-3', 'items-center', 'justify-center')

  const gameDescription = classNames('text-sm')

  const gameGenre = classNames(
    'rounded',
    'bg-frg3',
    'text-bcg1',
    'px-1',
    'text-xs'
  )

  return (
    <div className={gameContainer}>
      <Link className={gameLink} to={`/game/${id}`}>
        <img
          className={gameThumbnail}
          src={thumbnail}
          alt={title + ' thumbnail'}
        />
        <h2 className={gameTitle}>{title}</h2>
      </Link>
      <div className={gameBody}>
        <p className={gameDescription}>
          {short_description.substring(0, 25) + '...'}
        </p>
        <div className={gameFooter}>
          <div className={buttonContainer}>
            <ToggleInLibraryIcon id={id} title={title} />
          </div>
          <div className={gameInfo}>
            <p className={gameGenre}>{genre}</p>
            <PlatformIcon platform={platform} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default GameCard
