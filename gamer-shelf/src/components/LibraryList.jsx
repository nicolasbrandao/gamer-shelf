import classNames from "classnames"
import { useSelector } from "react-redux"
import { Skeleton, GameCard } from './'
import { useFetchGamesQuery } from "../store"

const LibraryList = () => {
  const { libraryList } = useSelector((state) => {
    return {
      libraryList: state.library.libraryList
    }
  })

  const { data, error, isLoading } = useFetchGamesQuery({});

  let content;
  if (isLoading) {
    content = <Skeleton times={9} />
  } else if (error) {
    content = <div>Error loading games.</div>
  } else {
    let filteredList = data.filter((item) => libraryList.includes(item.id))
    content = filteredList.map(game => {
      return <GameCard key={game.id} game={game}/>
    })
  }

  const gamesList = classNames(
    'mt-20',
    'mx-auto',
    'flex',
    'flex-wrap',
    'gap-10',
    'p-4',
    'w-[60rem]',
  )

  return (
    <div className={gamesList}>
      { content }
    </div>
  )
}

export default LibraryList