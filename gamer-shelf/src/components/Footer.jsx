import { useFetchGitHubStatsQuery } from '../store'
import classNames from 'classnames'
import { AiOutlineStar } from 'react-icons/ai'
import { BiGitRepoForked } from 'react-icons/bi'
import logo from '../assets/api-logo.png'

const Footer = () => {
  const { data } = useFetchGitHubStatsQuery();
  
  const footerContainer = classNames(
    'flex',
    'flex-col',
    'gap-4',
    'sm:flex-row',
    'justify-between',
    'items-center',
    'relative',
    'bottom-0',
    'w-full',
    'h-[10rem]',
    'max-w-[40rem]',
    'mx-auto'
  )
  
  const logoContainer = classNames(
    'flex',
    'flex-col',
    'items-center'
  )

  const logoImg = classNames(
    'h-[80px]'
  )

  const statsWrapper = classNames(
    'flex',
    'items-center',
    'justify-center',
    'gap-4'
  )

  const statsContainer = classNames(
    'flex',
    'items-center',
    'justify-center'
  )

  return (
    <footer className={footerContainer}>
      <div className={logoContainer}>
        <img className={logoImg} src={logo} alt="Free-to-game API" />
        Free-to-Game API
      </div>
      <div>
        <p>Designed & Built by Nícolas Brandão</p>
        <div className={statsWrapper}>
          {data ? (
              <>
                <div className={statsContainer}>
                  <AiOutlineStar />
                  <span>{data.stargazers_count}</span>
                </div>
                <div className={statsContainer}>
                  <BiGitRepoForked />
                  <span>{data.forks_count}</span>
                </div>
              </>
            ) : (
              <p>Loading stats...</p>
          )}
        </div>
      </div>
    </footer>
  )
}

export default Footer