import { useFetchGitHubStatsQuery } from '../../store'
import classNames from 'classnames'
import { AiOutlineStar } from 'react-icons/ai'
import { BiGitRepoForked } from 'react-icons/bi'
import logo from '../../assets/api-logo.png'

const Footer = () => {
  const { data } = useFetchGitHubStatsQuery()

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
    'items-center',
    'cursor-pointer'
  )

  const logoImg = classNames('h-[50px]')

  const statsWrapper = classNames(
    'flex',
    'items-center',
    'justify-center',
    'gap-4'
  )

  const statsContainer = classNames('flex', 'items-center', 'justify-center')

  return (
    <footer className={footerContainer}>
      <a
        className={logoContainer}
        href="https://www.freetogame.com/api-doc"
        target="_blank"
      >
        <img className={logoImg} src={logo} alt="Free-to-game API" />
        <h1>Free-to-Game API</h1>
      </a>
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
    </footer>
  )
}

export default Footer
