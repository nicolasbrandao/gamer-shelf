import { toggleGameInLibrary, RootState } from '@/store'
import { useDispatch, useSelector } from 'react-redux'
import classNames from 'classnames'
import { CgTrash } from 'react-icons/cg'
import { toast } from 'react-toastify'

type PropsType = {
  id: string
  title: string
}

const RemoveFromLibraryIcon = ({ title, id }: PropsType) => {
  const dispatch = useDispatch()

  const { libraryList } = useSelector((state: RootState) => {
    return {
      libraryList: state.library.libraryList,
    }
  })

  const handleToggleGame = (gameID: string) => {
    if (libraryList.includes(gameID)) {
      toast.error(`${title} removed from library`, {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      })
    } else {
      toast.success(`${title} added to library`, {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      })
    }

    dispatch(toggleGameInLibrary(gameID))
  }

  const icon = classNames('text-xl', 'cursor-pointer')

  return (
    <>
      <CgTrash
        className={icon}
        onClick={() => handleToggleGame(id)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleToggleGame(id)
          }
        }}
        tabIndex={0}
        role="button"
        aria-label="Remove game from library"
      />
    </>
  )
}

export default RemoveFromLibraryIcon
