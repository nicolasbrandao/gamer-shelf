import classNames from "classnames"
import { BiLoaderAlt } from 'react-icons/bi'

const Skeleton = ({ times }) => {
  const wrapper = classNames(
    'relative',
    'overflow-hidden',
    'flex',
    'items-center',
    'justify-center',
    'bg-frg1',
    'opacity-70',
    'rounded',
    'w-[250px]',
    'h-[220px]',
    'flex-auto',
    'shadow-2xl'    
  )
  const spinner = classNames(
    'animate-spin',
    'text-bcg1',
    'text-6xl'
  )

  const skeletons = Array(times).fill(0).map((_, i) => {
    return (
      <div className={wrapper} key={i}>
        <BiLoaderAlt className={spinner} />
      </div>
    )
  })

  return skeletons
}

export default Skeleton