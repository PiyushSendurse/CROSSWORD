import { Link } from 'react-router-dom';
import Carousel from "react-bootstrap/Carousel";
// import image1 from "Images/business.jpg";
// import image2 from "Images/logo.jpg";
//import image3 from "Images/MySQL.svg"
import { Images } from 'react-bootstrap-icons';

const Home = (props) => {
    return (
        <>

            <header>
                <h2>Help others in need. Life is about you being there for people</h2>
                {/* <p>Our full stack curriculum is supported by a passionate open source community.</p>
                <p>Remove your fresher's tag, join Industrial Training program now.</p> */}
                <Link to="/products" class="button">Let's Get Started</Link>
            </header>

            

            <main>
                <div id="section0">
                    {/* <img src="Images/background1.jpg" height="500px" width="1000px" alt="header"  /> */}
                    <Carousel interval={1500}>
        <Carousel.Item>
          <img className="d-block w-100" src="Images/slide.jpg" alt="First slide" style={{ height: "400px" }} />
          <Carousel.Caption>
       
        
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="Images/towing1.jpg" alt="Second slide" style={{ height: "400px" }} />
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="Images/emergency.jpg" alt="Third slide" style={{ height: "400px" }} />
          <Carousel.Caption>
            <h3>Subcription 3</h3>
            <p>Signature Salads</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
                    
                </div>
                <div id="section1">
                    <div class="section1-heading" id="products">
                        {/* <h2>Product Description</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut itaque
                            rem nulla quas incidunt sint Id quo sed iure iste ipsam, vitae accusantium
                            voluptates iusto libero doloribus perferendis.</p> */}
                            <div></div>
                    </div>
                    <div class="card-view">
                        {/* <div class="card">
                            <img src="Images/book.svg" alt="Learn" />
                            <h2>Learn</h2>
                            <p>Learn from a curriculum with the best curated online tutorials, blogs, and courses.</p>
                        </div> */}
                        <div class="card">
                            <img src="Images/pc.svg" alt="Build" />
                            <h2>Help</h2>
                            <p>A Little Help Is What They Need.
                                Smile And Serve Serve And Smile.</p>
                        </div>
                        <div class="card">
                            <img src="Images/connect.svg"  alt="Connect" />
                            <h2>Connect</h2>
                            <p>You're not alone. Just call us we are always there for you..</p>
                        </div>
                    </div>
                </div>
              
            </main>

        </>
    );
}
export default Home;
