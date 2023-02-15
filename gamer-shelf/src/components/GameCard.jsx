import classNames from "classnames"
import { GoPlus, GoBrowser } from "react-icons/go"
import { FaWindows } from "react-icons/fa"

const GameCard = ({game}) => {
  const gameContainer = classNames(
    'flex',
    'flex-col',
    'gap-4',
    'bg-frg1',
    'items-center',
    'justify-center',
    'rounded',
    'p-4',
    'w-[250px]',
    'flex-auto',
    'cursor-pointer',
    'shadow-2xl'
  )

  const gameTitle = classNames(
    'text-center',
    'text-txt1',
    'text-xl',
    'font-bold'
  )

  const gameThumbnail = classNames(
    'rounded'
  )

  const gameFooter = classNames(
    'flex',
    'items-center',
    'justify-between',
    'w-full'
  )

  const addButton = classNames(
    'flex',
    'items-center',
    'justify-center',
    'rounded-full',
    'bg-frg2',
    'text-xl'
  )

  const gameInfo = classNames(
    'flex',
    'gap-3',
    'items-center',
    'justify-center'
  )

  const gameGenre = classNames(
    'rounded',
    'bg-frg2',
    'px-1',
    'text-sm'
  )

  let infoContent;
  if (game.platform === 'PC (Windows)'){
    infoContent = <FaWindows />
  } else {
    infoContent = <GoBrowser />;
  }

  return (
    <div className={gameContainer}>
      <div className={gameTitle}>
        {game.title}
      </div>
      <div>
        <img className={gameThumbnail} src={game.thumbnail} alt={game.title} />
      </div>
      <div>
        {game.short_description.substring(0, 30)+'...'}
      </div>
      <div className={gameFooter}>
        <div>
          <GoPlus className={addButton}  />
        </div>
        <div className={gameInfo}>
          <div className={gameGenre}>{game.genre}</div>
          <div>{infoContent}</div>
        </div>
      </div>
    </div>
  )
}

export default GameCard