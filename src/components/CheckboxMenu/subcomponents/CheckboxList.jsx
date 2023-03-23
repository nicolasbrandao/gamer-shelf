import { CheckboxItem } from './'

const CheckboxList = ({ data }) => {
  const checkboxItems = data.items.map((item) => (
    <CheckboxItem key={item.id} item={item} />
  ))

  return <ul role="menu">{checkboxItems}</ul>
}

export default CheckboxList
