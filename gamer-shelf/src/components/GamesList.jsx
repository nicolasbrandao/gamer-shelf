import classNames from "classnames";
import { useSelector } from "react-redux";
import { useFetchGamesQuery, useFetchFilteredGamesQuery } from "../store";
import { BiCommentError } from 'react-icons/bi'
import { Skeleton, GameCard } from '../components'

const GamesList = () => {
  const { tags, isFiltered } = useSelector((state) => {
    return (
      {
        platform: state.filters.platform,
        tags: state.filters.tags,
        isFiltered: state.filters.isFiltered
      }
    )
  });
  
  const { data, error, isLoading } = isFiltered ? 
    useFetchFilteredGamesQuery(tags.join('.')) : 
    useFetchGamesQuery();

  const promptContainer = classNames(
    'flex',
    'items-center',
    'gap-4',
    'text-4xl',
  )

  let content;
  if (isLoading) {
    content = <Skeleton times={9} />
  } else if (error) {
    content = <div>Error loading games.</div>
  } else {
    content = data?.status === 0 ?
      <div className={promptContainer}>
        <p>No games match the filters</p><BiCommentError size={100} /> 
      </div> :
      data?.map(game => {
        return <GameCard key={game.id} game={game}/>
      })
  }
  
  const gamesList = classNames(
    'mx-auto',
    'flex',
    'flex-wrap',
    'items-center',
    'justify-between',
    'gap-10',
    'p-4',
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