import { Paragraph } from '.'

const MinimumRequirements = ({ data }) => {
  return (
    <>
      <Paragraph title={'Operational System'} text={data.os} />
      <Paragraph title={'Processor'} text={data.processor} />
      <Paragraph title={'Memory'} text={data.memory} />
      <Paragraph title={'Graphics'} text={data.graphics} />
      <Paragraph title={'Storage'} text={data.storage} />
    </>
  )
}

export default MinimumRequirements
