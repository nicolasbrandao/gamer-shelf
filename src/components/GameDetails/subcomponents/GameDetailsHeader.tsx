import classNames from 'classnames'
import { PlatformIcon } from '../..'
import { Paragraph } from '.'

type PropsType = {
  release_date: string
  thumbnail: string
  title: string
  genre: string
  platform: string
  developer: string
  publisher: string
}

const GameDetailsHeader = ({
  release_date,
  thumbnail,
  title,
  genre,
  platform,
  developer,
  publisher,
}: PropsType) => {

  const intlOptions: Intl.DateTimeFormatOptions = 
  {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }

  const formattedReleaseDate = Intl.DateTimeFormat('en-US', intlOptions).format(new Date(release_date))

  const containerHeader = classNames('flex', 'flex-col', 'md:flex-row', 'gap-4')
  const thumbnailClass = classNames('w-[350px]', 'rounded')
  const shortInfo = classNames('flex', 'gap-2', 'justify-end', 'pt-2')
  const gameGenre = classNames('rounded', 'bg-frg2', 'px-1', 'text-xs')
  const titleClass = classNames('font-bold', 'text-2xl')
  const subtext = classNames('text-sm')

  return (
    <div className={containerHeader}>
      <div>
        <img className={thumbnailClass} src={thumbnail} alt={title} />
        <div className={shortInfo}>
          <p className={gameGenre}>{genre}</p>
          <p className={subtext}>
            <PlatformIcon platform={platform} />
          </p>
        </div>
      </div>
      <div>
        <h2 className={titleClass}>{title}</h2>
        <Paragraph title={'Developer'} text={developer} />
        <Paragraph title={'Publisher'} text={publisher} />
        <Paragraph title={'Release Date'} text={formattedReleaseDate} />
      </div>
    </div>
  )
}

export default GameDetailsHeader
