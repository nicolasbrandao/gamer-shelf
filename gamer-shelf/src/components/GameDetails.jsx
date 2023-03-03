import classNames from 'classnames'
import { useFetchGameDetailsQuery } from '../store'
import { useParams } from 'react-router-dom';
import { Skeleton } from './'

const GameDetails = () => {
  const { gameId } = useParams();
  const { data, error, isLoading } = useFetchGameDetailsQuery(gameId);

  const gameDetailsContainer = classNames(
    'flex',
    'flex-col',
    'p-4',
    'gap-4',
    'max-w-[50rem]',
    'mx-auto',
    'rounded',
    'bg-frg1'
  )
  
  const containerHeader = classNames(
    'flex',
    'gap-4'
  )
  
  const thumbnail = classNames(
    'w-[350px]',
    'rounded'
  )

  const title = classNames(
    'font-bold',
    'text-2xl'
  )

  const subtitle = classNames(
    'font-bold'
  )

  const subtext = classNames(
    'text-sm'
  )


  let content;
  if (isLoading) {
    content = <Skeleton times={1} />
  } else if (error) {
    content = <div>Error loading games.</div>
  } else {
    content = (
      <div className={gameDetailsContainer}>
        <div className={containerHeader}>
          <div>
            <img className={thumbnail} src={data.thumbnail} alt={data.title} />
            <div>
              <p className={subtext}>{data.genre}</p>
              <p className={subtext}>{data.platform}</p>
            </div>
          </div>
          <div>
            <p className={title}>{data.title}</p>
            <div>
              <p className={subtitle}>Developer</p>
              <p className={subtext}>{data.developer}</p>
            </div>
            <div>
              <p className={subtitle}>Publisher</p>
              <p className={subtext}>{data.publisher}</p>
            </div>
            <div>
              <p className={subtitle}>Release Date</p>
              <p className={subtext}>{data.release_date}</p>
            </div>
          </div>
        </div>

        <div>
          <p className={subtitle}>About {data.title}</p>
          <p className={subtext}>{data.description}</p>
        </div>

        <div>
          <p className={subtitle}>Minimum System Requirements</p>
          <div>
            <p className={subtitle}>Operational System</p>
            <p className={subtext}>{data.minimum_system_requirements.os}</p>
          </div>
          <div>
            <p className={subtitle}>Processor</p>
            <p className={subtext}>{data.minimum_system_requirements.processor}</p>
          </div>
          <div>
            <p className={subtitle}>Memory</p>
            <p className={subtext}>{data.minimum_system_requirements.memory}</p>
          </div>
          <div>
            <p className={subtitle}>Graphics</p>
            <p className={subtext}>{data.minimum_system_requirements.graphics}</p>
          </div>
          <div>
            <p className={subtitle}>Storage</p>
            <p className={subtext}>{data.minimum_system_requirements.storage}</p>
          </div>

        </div>
      </div>
    )
  }

  return (<>{content}</>)
}

export default GameDetails