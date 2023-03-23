import { Carousel } from 'react-responsive-carousel'

const CarouselWrapper = ({ screenshots }) => {
  return (
    <Carousel aria-label="Game screenshots carousel">
      {screenshots.map((image) => (
        <div key={image.id}>
          <img src={image.image} alt="Game screenshot" />
        </div>
      ))}
    </Carousel>
  )
}

export default CarouselWrapper
