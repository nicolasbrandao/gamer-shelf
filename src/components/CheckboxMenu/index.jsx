import classNames from 'classnames'
import { CheckboxList } from './subcomponents'

const CheckboxMenu = ({ data }) => {
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
    <nav className={menuContainer} aria-label={data.title}>
      <h2 className={menuTitle} aria-label={data.title}>
        {data.title}
      </h2>
      <CheckboxList data={data} />
    </nav>
  )
}

export default CheckboxMenu
