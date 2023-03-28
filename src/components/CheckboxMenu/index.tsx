import classNames from 'classnames'
import { CheckboxList } from './subcomponents'

type PropsType = {
  title: string
  items: Array<{
    id: string
    title: string
  }>
}

const CheckboxMenu = ({ title, items }: PropsType) => {
  const menuContainer = classNames(
    'bg-frg1',
    'rounded',
    'p-2',
    'mb-4',
    'max-h-[350px]',
    'overflow-y-auto'
  )

  const menuTitle = classNames('font-bold', 'text-xl')

  return (
    <nav className={menuContainer} aria-label={title}>
      <h2 className={menuTitle} aria-label={title}>
        {title}
      </h2>
      <CheckboxList items={items} />
    </nav>
  )
}

export default CheckboxMenu
