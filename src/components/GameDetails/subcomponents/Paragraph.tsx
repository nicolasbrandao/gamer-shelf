import classNames from 'classnames'

type PropsType = {
  title: string
  text: string
}

const Paragraph = ({ title, text }: PropsType) => {
  const subtitle = classNames('font-bold')
  const subtext = classNames('text-sm')

  return (
    <>
      <h3 className={subtitle}>{title}</h3>
      <p className={subtext}>{text}</p>
    </>
  )
}

export default Paragraph
