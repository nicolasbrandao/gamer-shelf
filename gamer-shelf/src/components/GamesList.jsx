import { useFetchGamesQuery } from "../store";
import { GameCard, Skeleton } from ".";
import classNames from "classnames";


const GamesList = () => {
  const gamesList = classNames(
    'mt-20',
    'mx-auto',
    'flex',
    'flex-wrap',
    'gap-10',
    'p-4',
    'w-[60rem]',
  )

  const { data, error, isLoading } = useFetchGamesQuery();

  let content;
  if (isLoading) {
    content = <Skeleton times={9} />
  } else if (error) {
    content = <div>Error loading games.</div>
  } else {
    content = data.map(game => {
      return <GameCard key={game.id} game={game}/>
    })
  }

  return (
    <div className={gamesList}>
      {content}
    </div>
  )
}

export default GamesList