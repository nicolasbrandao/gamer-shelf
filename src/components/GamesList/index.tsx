import {
  useFetchGamesQuery,
  useFetchFilteredGamesQuery,
  RootState,
} from '@/store'
import { useSelector } from 'react-redux'
import classNames from 'classnames'
import { BiCommentError } from 'react-icons/bi'
import { Skeleton, GameCard } from '..'

type DataType = {
  id: string
  thumbnail: string
  title: string
  short_description: string
  genre: string
  platform: string
}

const GamesList = () => {
  const { tags, isFiltered } = useSelector((state: RootState) => {
    return {
      tags: state.filters.tags,
      isFiltered: state.filters.isFiltered,
    }
  })

  const fetchGamesData = isFiltered
    ? useFetchFilteredGamesQuery
    : useFetchGamesQuery

  const { data, error, isLoading } = fetchGamesData(tags.join('.'))

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
        data?.map(
          ({
            id,
            thumbnail,
            title,
            short_description,
            genre,
            platform,
          }: DataType) => {
            return (
              <GameCard
                key={id}
                id={id}
                thumbnail={thumbnail}
                title={title}
                short_description={short_description}
                genre={genre}
                platform={platform}
              />
            )
          }
        )
      )
  }

  return (
    <main>
      <section className={gamesList}>{content}</section>
    </main>
  )
}

export default GamesList
