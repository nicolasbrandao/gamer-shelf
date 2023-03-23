import classNames from 'classnames'
import { PlatformIcon } from '../../'
import { Paragraph } from './'

const GameDetailsHeader = ({ data }) => {
  let intlFormatterOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  const formattedReleaseDate = Intl.DateTimeFormat(
    'en-US',
    intlFormatterOptions
  ).format(new Date(data.release_date))

  const containerHeader = classNames('flex', 'flex-col', 'md:flex-row', 'gap-4')
  const thumbnail = classNames('w-[350px]', 'rounded')
  const shortInfo = classNames('flex', 'gap-2', 'justify-end', 'pt-2')
  const gameGenre = classNames('rounded', 'bg-frg2', 'px-1', 'text-xs')
  const title = classNames('font-bold', 'text-2xl')
  const subtext = classNames('text-sm')

  return (
    <div className={containerHeader}>
      <div>
        <img className={thumbnail} src={data.thumbnail} alt={data.title} />
        <div className={shortInfo}>
          <p className={gameGenre}>{data.genre}</p>
          <p className={subtext}>
            <PlatformIcon platform={data.platform} />
          </p>
        </div>
      </div>
      <div>
        <h2 className={title}>{data.title}</h2>
        <Paragraph title={'Developer'} text={data.developer} />
        <Paragraph title={'Publisher'} text={data.publisher} />
        <Paragraph title={'Release Date'} text={formattedReleaseDate} />
      </div>
    </div>
  )
}

export default GameDetailsHeader
