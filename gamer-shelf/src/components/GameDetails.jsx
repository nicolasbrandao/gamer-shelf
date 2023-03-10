import classNames from 'classnames'
import { useFetchGameDetailsQuery } from '../store'
import { useParams } from 'react-router-dom'
import { Skeleton } from './'
import { Carousel } from 'react-responsive-carousel'
import { GoBrowser } from "react-icons/go"
import { FaWindows } from "react-icons/fa"

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

  const gameGenre = classNames(
    'rounded',
    'bg-frg2',
    'px-1',
    'text-sm',
    'text-xs'
  )

  const shortInfo = classNames(
    'flex',
    'gap-2', 
    'justify-end', 
    'pt-2'
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

  let plaftormContent;
  if (data?.platform === 'Windows'){
    plaftormContent = <FaWindows />
  } else {
    plaftormContent = <GoBrowser />;
  }

  let carousel = data?.screenshots.map(item => {
    return (
      <div key={item.id}>
      <img src={item.image} />
      </div>
    )
  })

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
            <div className={shortInfo}>
              <p className={gameGenre}>{data.genre}</p>
              <p className={subtext}>{plaftormContent}</p>
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

        <p className={subtitle}>Screenshots</p>
        <Carousel>
          {carousel}
        </Carousel>
  
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