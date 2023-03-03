import { useFetchGamesQuery } from "../store";
import { GameCard, Skeleton, FiltersHeader, FiltersSideBar } from "./";
import classNames from "classnames";
import { useSelector } from "react-redux";


const GamesList = () => {
  const params = useSelector((state) => state.dropdowns.currentSelection);
  const { data, error, isLoading } = useFetchGamesQuery(params);

  const gamesList = classNames(
    'mx-auto',
    'flex',
    'flex-wrap',
    'justify-between',
    'gap-10',
    'p-4',
    'w-[60rem]',
    'border'
  )

  let content;
  if (isLoading) {
    content = <Skeleton times={9} />
  } else if (error) {
    content = <div>Error loading games.</div>
  } else {
    content = data.map(game => {
      return <GameCard key={game.id} game={game}/> 
    })
  }

  return (
    <div>
      <FiltersHeader />
      <div className="flex">
        <FiltersSideBar />
        <div className={gamesList}>
          {content}
        </div>
      </div>
    </div> 
  )
}

export default GamesList