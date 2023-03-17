import classNames from "classnames";
import { useFetchGamesQuery } from "../store";
import { GameCard, Skeleton } from "../components";

const useGamesListContent = () => {
  let content;
  
  const { data, error, isLoading } = useFetchGamesQuery()
  
  const promptContainer = classNames(
    'flex',
    'items-center',
    'gap-4',
    'text-4xl',
  )

  if (isLoading) {
    content = <Skeleton times={9} />
  } else if (error) {
    content = <div>Error loading games.</div>
  } else {
    content = data?.status === 0 ?
      <div className={promptContainer}>
        No games match the filters<BiCommentError /> 
      </div> :
      data?.map(game => {
        return <GameCard key={game.id} game={game}/>
    })
  }
  
  return { content }
}

export default useGamesListContent