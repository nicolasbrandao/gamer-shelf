import { GoBrowser } from 'react-icons/go'
import { FaWindows } from 'react-icons/fa'

const PlatformIcon = ({ platform }) => {
  return platform.includes('Windows') ? (
    <FaWindows aria-label="Platform: PC (Windows)" />
  ) : (
    <GoBrowser aria-label="Platform: Browser" />
  )
}

export default PlatformIcon
