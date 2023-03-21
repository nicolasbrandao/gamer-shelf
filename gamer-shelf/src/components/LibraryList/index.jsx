import { useFetchGamesQuery } from '../../store'
import { useSelector } from 'react-redux'
import classNames from 'classnames'
import { Skeleton, LibraryGameCard } from '..'
import { VscFolderLibrary } from 'react-icons/vsc'

const LibraryList = () => {
  const { libraryList } = useSelector((state) => {
    return {
      libraryList: state.library.libraryList,
    }
  })

  const { data, error, isLoading } = useFetchGamesQuery({})

  const promptContainer = classNames(
    'flex',
    'items-center',
    'gap-4',
    'text-2xl'
  )

  const gamesList = classNames(
    'mx-auto',
    'flex',
    'items-center',
    'justify-center',
    'flex-wrap',
    'gap-10',
    'p-4',
    'md:w-full'
  )

  let content
  if (isLoading) {
    content = <Skeleton times={6} fullW />
  } else if (error) {
    content = <p>Error loading games.</p>
  } else {
    let filteredList = data.filter((item) => libraryList.includes(item.id))
    if (filteredList.length === 0) {
      content = (
        <div className={promptContainer}>
          <VscFolderLibrary aria-hidden="true" />
          <span>Empty library</span>
        </div>
      )
    } else {
      content = filteredList.map((game) => {
        return <LibraryGameCard key={game.id} game={game} />
      })
    }
  }

  return (
    <section className={gamesList} role="region" aria-label="Game library">
      {content}
    </section>
  )
}

export default LibraryList
