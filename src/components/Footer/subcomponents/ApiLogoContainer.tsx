import classNames from 'classnames'
import logo from '@/assets/api-logo.png'

const ApiLogoContainer = () => {
  const logoContainer = classNames(
    'flex',
    'flex-col',
    'items-center',
    'cursor-pointer'
  )

  const logoImg = classNames('h-[50px]', 'w-[50px]')

  return (
    <a
      className={logoContainer}
      href="https://www.freetogame.com/api-doc"
      target="_blank"
    >
      <img className={logoImg} src={logo} alt="Free-to-game API" />
      <h1>Free-to-Game API</h1>
    </a>
  )
}

export default ApiLogoContainer
