import { toggleGameInLibrary } from '../../../store'
import { useDispatch, useSelector } from 'react-redux'
import classNames from 'classnames'
import { CgTrash } from 'react-icons/cg'
import { toast } from 'react-toastify'

const RemoveFromLibraryIcon = ({ game }) => {
  const dispatch = useDispatch()

  const { libraryList } = useSelector((state) => {
    return {
      libraryList: state.library.libraryList,
    }
  })

  const handleToggleGame = (gameID) => {
    if (libraryList.includes(gameID)) {
      toast.error(`${game.title} removed from library`, {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
        ariaLive: 'polite',
      })
    } else {
      toast.success(`${game.title} added to library`, {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
        ariaLive: 'polite',
      })
    }

    dispatch(toggleGameInLibrary(gameID))
  }

  const icon = classNames('text-xl', 'cursor-pointer')

  return (
    <>
      <CgTrash
        className={icon}
        onClick={() => handleToggleGame(game.id)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            handleToggleGame(game.id)
          }
        }}
        tabIndex="0"
        role="button"
        aria-label="Remove game from library"
      />
    </>
  )
}

export default RemoveFromLibraryIcon
