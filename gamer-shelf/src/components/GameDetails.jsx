import classNames from 'classnames'
import { useFetchGameDetailsQuery } from '../store'
import { useParams } from 'react-router-dom';
import { Skeleton } from './'

const GameDetails = () => {
  const { gameId } = useParams();
  const { data, error, isLoading } = useFetchGameDetailsQuery(gameId);

  let content;
  if (isLoading) {
    content = <Skeleton times={1} />
  } else if (error) {
    content = <div>Error loading games.</div>
  } else {
    content = (
      <div>
        <div>{data.title}</div>
        <div>
          <p>About {data.title}</p>
          <p>{data.description}</p>
        </div>
        <div>
          <p>Additional Information</p>
          <div>
            <div>
              <p>Title</p>
              <p>{data.title}</p>
            </div>
            <div>
              <p>Developer</p>
              <p>{data.developer}</p>
            </div>
            <div>
              <p>Publisher</p>
              <p>{data.publisher}</p>
            </div>
            <div>
              <p>Release Date</p>
              <p>{data.release_date}</p>
            </div>
            <div>
              <p>Genre</p>
              <p>{data.genre}</p>
            </div>
            <div>
              <p>Platform</p>
              <p>{data.platform}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const gameDetailsContainer = classNames(
    'mt-[4rem]',
    'max-w-[50rem]',
    'mx-auto',
    'border'
  )

  return (
    <div className={gameDetailsContainer}>
      {content}
    </div>
  )
}

export default GameDetails