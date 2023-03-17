import classNames from "classnames"
import { BiLoaderAlt } from 'react-icons/bi'

const Skeleton = ({ times, fullW, fullH }) => {
  const wrapper = classNames(
    'relative',
    'overflow-hidden',
    'flex',
    'items-center',
    'justify-center',
    'bg-frg1',
    'opacity-70',
    'rounded',
    'flex-auto',
    'shadow-2xl',
    fullW ? 'w-full' : 'w-[250px]',
    fullH ? 'h-[30rem]' : 'h-[300px]'    
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