import { toggleGameInLibrary, RootState } from '@/store'
import { useSelector, useDispatch } from 'react-redux'
import classNames from 'classnames'
import { toast } from 'react-toastify'
import { GoPlus, GoX } from 'react-icons/go'

type PropsType = {
  id: string
  title: string
}

const ToggleInLibraryIcon = ({ id, title }: PropsType) => {
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
        role: 'alert',
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

  return libraryList.includes(id) ? (
    <GoX
      className={addButton}
      onClick={() => handleToggleGame(id)}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          handleToggleGame(id)
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`Remove ${title} from library`}
    />
  ) : (
    <GoPlus
      className={addButton}
      onClick={() => handleToggleGame(id)}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          handleToggleGame(id)
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`Add ${title} to library`}
    />
  )
}

export default ToggleInLibraryIcon
