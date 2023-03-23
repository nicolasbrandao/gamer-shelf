import classNames from 'classnames'
import { ApiLogoContainer, AuthorContainer } from './subcomponents'

const Footer = () => {
  const footerContainer = classNames(
    'flex',
    'flex-col',
    'gap-4',
    'md:flex-row',
    'justify-between',
    'items-center',
    'relative',
    'bottom-0',
    'w-full',
    'h-[10rem]',
    'max-w-[40rem]',
    'mx-auto'
  )

  return (
    <footer className={footerContainer}>
      <ApiLogoContainer />
      <AuthorContainer />
    </footer>
  )
}

export default Footer
