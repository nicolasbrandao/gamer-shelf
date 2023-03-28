import classNames from 'classnames'
import { BiLoaderAlt } from 'react-icons/bi'

type PropsType = {
  times: number,
  width?: string,
  height?: string
}

const Skeleton = ({ times, width=undefined, height=undefined }: PropsType) => {
  const wrapper = classNames(
    'relative',
    'overflow-hidden',
    'flex',
    'items-center',
    'justify-center',
    'bg-frg1',
    'opacity-90',
    'rounded',
    'flex-auto',
    'shadow-2xl',
    width ? width : 'w-[280px]',
    height ? height : 'h-[300px]'
  )

  const spinner = classNames('animate-spin', 'text-white', 'text-6xl')

  const skeletons = Array(times)
    .fill(0)
    .map((_, i) => {
      return (
        <div className={wrapper} key={i} aria-busy="true">
          <BiLoaderAlt
            className={spinner}
            role="status"
            aria-label="Loading..."
          />
        </div>
      )
    })

  return <>{skeletons}</>
}

export default Skeleton
