import Carousel from 'react-bootstrap/Carousel';
import image1 from '../images/event1.jpg'
import image2 from '../images/event2.jpg'
import image3 from '../images/event3.jpg'
import image4 from '../images/event4.jpg'

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
                    <a href="https://in.bookmyshow.com/events/vaibhav-sethia-live/ET00327697" target = "_blank">
                    <img
                        className="d-block w-100"
                        src={image1}
                        alt="First slide"
                    /></a>
                </Carousel.Item>
                <Carousel.Item>
                    <a href='https://in.bookmyshow.com/events/stand-up-sunday-live/ET00338307' target="_blank">
                    <img
                        className="d-block w-100"
                        src={image2}
                        alt="Second slide"
                    /></a>

                </Carousel.Item>
                <Carousel.Item>
                    <a href='https://in.bookmyshow.com/events/comic-con-india-2022-23/ET00337513' target="_blank">
                    <img
                        className="d-block w-100"
                        src={image3}
                        alt="Third slide"
                    /></a>
                </Carousel.Item>
                
                <Carousel.Item>
                    <a href='https://in.bookmyshow.com/events/prateek-kuhad-the-way-that-lovers-do-india-tour/ET00340884' target="_blank">
                    <img
                        className="d-block w-100"
                        src={image4}
                        alt="Fourth Slide"
                    /></a>
                </Carousel.Item>
                
            </Carousel>
        </div>
    );
}

export default Carousal;