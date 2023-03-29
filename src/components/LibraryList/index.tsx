import { useFetchGamesQuery, RootState } from '@/store'
import { useSelector } from 'react-redux'
import classNames from 'classnames'
import { Skeleton, LibraryGameCard } from '..'
import { VscFolderLibrary } from 'react-icons/vsc'

type GameType = {
  id: string
  thumbnail: string
  title: string
  genre: string
  platform: string
}

const LibraryList = () => {
  const { libraryList } = useSelector((state: RootState) => {
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
    content = (
      <Skeleton
        times={6}
        height={'h-[8rem] md:h[300]'}
        width={'w-full md:w-[280]'}
      />
    )
  } else if (error) {
    content = <p>Error loading games.</p>
  } else {
    let filteredList = data.filter(({ id }: GameType) =>
      libraryList.includes(id)
    )
    let isLibraryEmpty = filteredList.length > 0 ? false : true
    if (isLibraryEmpty) {
      content = (
        <div className={promptContainer}>
          <VscFolderLibrary aria-hidden="true" />
          <span>Empty library</span>
        </div>
      )
    } else {
      content = filteredList.map(
        ({ id, thumbnail, title, genre, platform }: GameType) => {
          return (
            <LibraryGameCard
              key={id}
              id={id}
              thumbnail={thumbnail}
              title={title}
              genre={genre}
              platform={platform}
            />
          )
        }
      )
    }
  }

  return (
    <section className={gamesList} role="region" aria-label="Game library">
      {content}
    </section>
  )
}

export default LibraryList
