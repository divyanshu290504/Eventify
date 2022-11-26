import Carousel from 'react-bootstrap/Carousel';
import image1 from '../images/event1.jpg'
import image2 from '../images/event2.jpg'
import image3 from '../images/event3.jpg'

function Carousal() {
    const div_style={
        marginLeft: "40px",
        marginRight: "40px",
        marginTop:"20px"
    }
    const carousel_style={
        width:"1000px",
        margin:"auto",
        borderRadius:"1000px"
    }
    return (
        <div style={div_style}>
            <Carousel fade style={carousel_style}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image2}
                        alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Carousal;