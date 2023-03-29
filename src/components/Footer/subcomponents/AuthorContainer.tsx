import { useFetchGitHubStatsQuery } from '@/store'
import classNames from 'classnames'
import { AiOutlineStar } from 'react-icons/ai'
import { BiGitRepoForked } from 'react-icons/bi'

const AuthorContainer = () => {
  const { data } = useFetchGitHubStatsQuery({})

  const statsWrapper = classNames(
    'flex',
    'items-center',
    'justify-center',
    'gap-4'
  )

  const statsContainer = classNames('flex', 'items-center', 'justify-center')

  return (
    <a href="https://github.com/nicolasbrandao/gamer-shelf" target="_blank">
      <p>Designed & Built by Nícolas Brandão</p>
      <div className={statsWrapper}>
        {data ? (
          <>
            <div className={statsContainer}>
              <AiOutlineStar aria-label="Number of stars" />
              <span>{data.stargazers_count}</span>
            </div>
            <div className={statsContainer}>
              <BiGitRepoForked aria-label="Number of forks" />
              <span>{data.forks_count}</span>
            </div>
          </>
        ) : (
          <p aria-busy="true">Loading GitHub stats...</p>
        )}
      </div>
    </a>
  )
}

export default AuthorContainer
