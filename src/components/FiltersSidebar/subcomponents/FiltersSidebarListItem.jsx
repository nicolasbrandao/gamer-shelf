import { CheckboxMenu } from '../..'

const FiltersSidebarListItem = ({ data }) => {
  return (
    <li>
      <CheckboxMenu data={data} />
    </li>
  )
}

export default FiltersSidebarListItem
