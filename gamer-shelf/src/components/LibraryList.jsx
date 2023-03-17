import classNames from "classnames"
import { useSelector } from "react-redux"
import { Skeleton, LibraryGameCard } from './'
import { VscFolderLibrary } from 'react-icons/vsc'
import { useFetchGamesQuery } from "../store"

const LibraryList = () => {
  const { libraryList } = useSelector((state) => {
    return {
      libraryList: state.library.libraryList
    }
  })

  const { data, error, isLoading } = useFetchGamesQuery({});

  const promptContainer = classNames(
    'flex',
    'items-center',
    'gap-4',
    'text-2xl',
  )

  let content;
  if (isLoading) {
    content = <Skeleton times={6} fullW/>
  } else if (error) {
    content = <div>Error loading games.</div>
  } else {
    let filteredList = data.filter((item) => libraryList.includes(item.id))
    if (filteredList.length === 0) {
      content = (
        <div className={promptContainer}>
          <VscFolderLibrary />
          <span>Empty library</span>
        </div>
      )
    } else {
      content = filteredList.map(game => {
        return <LibraryGameCard key={game.id} game={game}/>
      })
    }
  }

  const gamesList = classNames(
    'mx-auto',
    'flex',
    'items-center',
    'justify-center',
    'flex-wrap',
    'gap-10',
    'p-4',
    'md:w-full',
  )

  return (
    <div className={gamesList}>
      { content }
    </div>
  )
}

export default LibraryList