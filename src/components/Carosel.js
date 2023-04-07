import Carousel from 'react-bootstrap/Carousel';
import "./Carosel.css";

const Carosel = () => {
  return (
    <div>
      <Carousel indicators={false}>
        <Carousel.Item interval={1000}>
          <img
            className="carosel"
            src="https://cdn.pixabay.com/photo/2016/12/31/21/22/discus-fish-1943755__340.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="carosel"
            src="https://cdn.pixabay.com/photo/2012/10/25/23/23/perch-62855__340.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="carosel"
            src="https://cdn.pixabay.com/photo/2021/02/01/13/05/fish-5970565__340.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carosel;
