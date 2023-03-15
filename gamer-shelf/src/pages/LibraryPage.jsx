import classNames from "classnames"
import { LibraryList } from "../components"

const LibraryPage = () => {
  const mainContainer = classNames(
    ''
  )

  return (
    <section className={mainContainer}>
      <LibraryList />
    </section>
  )
}

export default LibraryPage