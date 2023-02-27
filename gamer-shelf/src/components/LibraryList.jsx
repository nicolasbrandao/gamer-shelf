import { useSelector } from "react-redux"

const LibraryList = () => {
  const { libraryList } = useSelector((state) => {
    return {
      libraryList: state.library.libraryList
    }
  })

  let renderedList = libraryList.map((item) => {
    return <li key={item}>{item}</li>
  });

  return (
    <div>
      <ul>
        { renderedList }
      </ul> 
    </div>
  )
}

export default LibraryList