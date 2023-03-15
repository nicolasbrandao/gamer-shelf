import { useFetchGamesQuery, useFetchFilteredGamesQuery } from "../store";
import { GameCard, Skeleton } from "./";
import classNames from "classnames";
import { useSelector } from "react-redux";

const GamesList = () => {
  const { platform, category, tags } = useSelector((state) => {
    return (
      {
        platform: state.filters.platform,
        category: state.filters.category,
        tags: state.filters.tags
      }
    )
  });


  // const { data, error, isLoading } = useFetchFilteredGamesQuery({ tag: tags.join('.'), platform })
  const { data, error, isLoading } = useFetchGamesQuery({ category, platform });
  
  
  let content;
  if (isLoading) {
    content = <Skeleton times={9} />
  } else if (error) {
    content = <div>Error loading games.</div>
  } else {
    content = data?.status === 0 ? 
      'NO MATCH' :
      data?.map(game => {
        return <GameCard key={game.id} game={game}/> 
      })
  }

  const gamesList = classNames(
    'mx-auto',
    'flex',
    'flex-wrap',
    'justify-between',
    'gap-10',
    'p-4'
  )

  return (
    <div className="flex">
      <div className={gamesList}>
        {content}
      </div>
    </div>
  )
}

export default GamesList