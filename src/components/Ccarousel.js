import {Carousel} from 'react-bootstrap';
import newn from '../images/new.png'

const Ccarousel = () => {
    return (
        <div>
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={newn}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={newn}
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={newn}
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
        </div>
    )
}

export default Ccarousel
