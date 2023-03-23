import { useFetchGameDetailsQuery } from '../../store'
import { useParams } from 'react-router-dom'
import classNames from 'classnames'
import { Skeleton } from '..'
import { CarouselWrapper, GameDetailsHeader, Paragraph } from './subcomponents'

const GameDetails = () => {
  const { gameId } = useParams()
  const { data, error, isLoading } = useFetchGameDetailsQuery(gameId)

  const gameDetailsContainer = classNames(
    'flex',
    'flex-col',
    'p-4',
    'max-w-[50rem]',
    'mx-auto',
    'rounded',
    'bg-frg1'
  )

  const subtitle = classNames('font-bold')

  let content
  if (isLoading) {
    content = <Skeleton times={1} width={'w-full'} height={'h-[40rem]'} />
  } else if (error) {
    content = <div>Error loading games.</div>
  } else {
    content = (
      <section className={gameDetailsContainer}>
        <GameDetailsHeader data={data} />

        <Paragraph title={`About ${data.title}`} text={data.description} />

        <p className={subtitle}>Screenshots</p>
        <CarouselWrapper screenshots={data.screenshots} />

        {data.platform === 'Windows' && (
          <>
            <h3 className={subtitle}>Minimum System Requirements</h3>
            <Paragraph
              title={'Operational System'}
              text={data.minimum_system_requirements.os}
            />
            <Paragraph
              title={'Processor'}
              text={data.minimum_system_requirements.processor}
            />
            <Paragraph
              title={'Memory'}
              text={data.minimum_system_requirements.memory}
            />
            <Paragraph
              title={'Graphics'}
              text={data.minimum_system_requirements.graphics}
            />
            <Paragraph
              title={'Storage'}
              text={data.minimum_system_requirements.storage}
            />
          </>
        )}
      </section>
    )
  }

  return <>{content}</>
}

export default GameDetails
