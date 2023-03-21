import { useFetchGamesQuery, useFetchFilteredGamesQuery } from '../../store'
import { useSelector } from 'react-redux'
import classNames from 'classnames'
import { BiCommentError } from 'react-icons/bi'
import { Skeleton, GameCard } from '..'

const GamesList = () => {
  const { tags, isFiltered } = useSelector((state) => {
    return {
      tags: state.filters.tags,
      isFiltered: state.filters.isFiltered,
    }
  })

  const { data, error, isLoading } = isFiltered
    ? useFetchFilteredGamesQuery(tags.join('.'))
    : useFetchGamesQuery()

  const promptContainer = classNames(
    'flex',
    'items-center',
    'gap-4',
    'text-4xl'
  )

  const gamesList = classNames(
    'mx-auto',
    'flex',
    'flex-wrap',
    'items-center',
    'justify-between',
    'gap-10',
    'p-4'
  )

  let content
  if (isLoading) {
    content = <Skeleton times={9} />
  } else if (error) {
    content = <div role="alert">Error loading games.</div>
  } else {
    content =
      data?.status === 0 ? (
        <div className={promptContainer}>
          <p role="alert">No games match the filters</p>
          <BiCommentError size={100} aria-label="No games match the filters" />
        </div>
      ) : (
        data?.map((game) => {
          return <GameCard key={game.id} game={game} />
        })
      )
  }

  return (
    <main>
      <section className={gamesList}>{content}</section>
    </main>
  )
}

export default GamesList
