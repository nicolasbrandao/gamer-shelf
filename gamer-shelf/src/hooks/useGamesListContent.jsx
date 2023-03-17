import { useFetchGamesQuery } from "../store";
import { GameCard, Skeleton } from "../components";

const useGamesListContent = () => {
  let content;
  
  const { data, error, isLoading } = useFetchGamesQuery()
  
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
  
  return { content }
}

export default useGamesListContent