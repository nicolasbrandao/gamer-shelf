import { toggleGameInLibrary } from '../../../store'
import { useSelector, useDispatch } from 'react-redux'
import classNames from 'classnames'
import { toast } from 'react-toastify'
import { GoPlus, GoX } from 'react-icons/go'

const ToggleInLibraryIcon = ({ game }) => {
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
        role: 'alert',
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
        role: 'alert',
      })
    }

    dispatch(toggleGameInLibrary(gameID))
  }

  const addButton = classNames(
    'flex',
    'items-center',
    'justify-center',
    'rounded-full',
    'text-xl'
  )

  return libraryList.includes(game.id) ? (
    <GoX
      className={addButton}
      onClick={() => handleToggleGame(game.id)}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          handleToggleGame(game.id)
        }
      }}
      role="button"
      tabIndex="0"
      aria-label={`Remove ${game.title} from library`}
    />
  ) : (
    <GoPlus
      className={addButton}
      onClick={() => handleToggleGame(game.id)}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          handleToggleGame(game.id)
        }
      }}
      role="button"
      tabIndex="0"
      aria-label={`Add ${game.title} to library`}
    />
  )
}

export default ToggleInLibraryIcon
