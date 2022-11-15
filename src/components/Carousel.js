import Carousel from 'react-bootstrap/Carousel';
import image1 from '../images/event1.jpg'
import image2 from '../images/event2.jpg'
import image3 from '../images/event3.jpg'

function Carousal() {
    const img_style={
        width:"300px",
        height:"500px",
        borderRadius: "70px"
    }
    const div_style={
        marginLeft: "40px",
        marginRight: "40px",
        marginTop:"20px"
    }
    return (
        <div style={div_style}>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image1}
                        alt="First slide"
                        style={img_style}
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image2}
                        alt="Second slide"
                        style={img_style}
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image3}
                        alt="Third slide"
                        style={img_style}
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Carousal;