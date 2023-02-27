import classNames from "classnames"
import { useDispatch } from "react-redux";
import { addGameToLibrary } from '../store'
import { GoPlus, GoBrowser } from "react-icons/go"
import { FaWindows } from "react-icons/fa"

const GameCard = ({game}) => {
  const dispatch = useDispatch();


  const handleAddGame = (gameID) => {
    dispatch(addGameToLibrary(gameID))
  }

  const gameContainer = classNames(
    'flex',
    'flex-col',
    'bg-frg1',
    'items-center',
    'rounded',
    'max-w-[250px]',
    'w-[250px]',
    'h-[300px]',
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
    'w-full',
    'rounded-t',
    'overflow-hidden'
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

  return (
    <div className={gameContainer}>
      <div>
        <img className={gameThumbnail} src={game.thumbnail} alt={game.title} />
      </div>
      <div className={gameBody}>
        <div className={gameTitle}>
          {game.title}
        </div>
        <div className={gameDescription}>
          {game.short_description.substring(0, 25) + '...'}
        </div>
        <div className={gameFooter}>
          <div>
            <GoPlus className={addButton} onClick={() => handleAddGame(game.id)} />
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