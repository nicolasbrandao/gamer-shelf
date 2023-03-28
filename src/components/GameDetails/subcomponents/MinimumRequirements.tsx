import { Paragraph } from '.'

type PropsType = {
  os: string
  processor: string
  memory: string
  graphics: string
  storage: string
}

const MinimumRequirements = ({
  os,
  processor,
  memory,
  graphics,
  storage,
}: PropsType) => {
  return (
    <>
      <Paragraph title={'Operational System'} text={os} />
      <Paragraph title={'Processor'} text={processor} />
      <Paragraph title={'Memory'} text={memory} />
      <Paragraph title={'Graphics'} text={graphics} />
      <Paragraph title={'Storage'} text={storage} />
    </>
  )
}

export default MinimumRequirements
