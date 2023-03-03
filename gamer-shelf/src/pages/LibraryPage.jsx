import classNames from "classnames"
import { LibraryList } from "../components"

const LibraryPage = () => {
  const mainContainer = classNames(
    ''
  )

  return (
    <div className={mainContainer}>
      <LibraryList />
    </div>
  )
}

export default LibraryPage