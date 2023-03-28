import { CheckboxItem } from '.'

type PropsType = {
  items: Array<{
    id: string
    title: string
  }>
}

const CheckboxList = ({ items }: PropsType) => {
  const checkboxItems = items.map((item) => (
    <CheckboxItem key={item.id} id={item.id} title={item.title} />
  ))

  return <ul role="menu">{checkboxItems}</ul>
}

export default CheckboxList
