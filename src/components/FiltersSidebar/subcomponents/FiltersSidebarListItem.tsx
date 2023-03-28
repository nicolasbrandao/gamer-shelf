import { CheckboxMenu } from '../..'

type PropsType = {
  title: string
  items: Array<{
    id: string
    title: string
  }>
}

const FiltersSidebarListItem = ({ title, items }: PropsType) => {
  return (
    <li>
      <CheckboxMenu title={title} items={items} />
    </li>
  )
}

export default FiltersSidebarListItem
