import { useFetchFilteredGamesQuery } from "../store";
import { GameCard, Skeleton } from "../components";

const useFilteredGamesListContent = (platform, tags) => {
  let content;
  
  
  const { data, error, isLoading } = useFetchFilteredGamesQuery({ tag: tags.join('.'), platform })
  
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

export default useFilteredGamesListContent