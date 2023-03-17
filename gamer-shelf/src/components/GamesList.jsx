import classNames from "classnames";
import { useSelector } from "react-redux";
import { useFilteredGamesListContent, useGamesListContent } from "../hooks";

const GamesList = () => {
  const { platform, tags, isFiltered } = useSelector((state) => {
    return (
      {
        platform: state.filters.platform,
        tags: state.filters.tags,
        isFiltered: state.filters.isFiltered
      }
    )
  });
  
  const { content } = isFiltered ? 
    useFilteredGamesListContent(platform, tags) : 
    useGamesListContent();

  const gamesList = classNames(
    'mx-auto',
    'flex',
    'flex-wrap',
    'justify-between',
    'gap-10',
    'p-4'
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