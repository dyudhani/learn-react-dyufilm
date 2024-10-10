import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import antmanImage from '../assets/images/superhero/antman.jpg'
import avengersImage from '../assets/images/superhero/avengers.jpg'
import batmanImage from '../assets/images/superhero/batman.webp'
import robinhoodImage from '../assets/images/superhero/robinhood.png'
import spidermanImage from '../assets/images/superhero/spiderman.jpg'
import supermanImage from '../assets/images/superhero/superman.jpg'

const SuperHero = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className='text-white'>SUPERHERO MOVIES</h1>
        <br />
        <Row>
          <Col md={4} className='movieWrapper' id="superhero">
            <Card className="movieImage">
              <Image src={antmanImage} alt="Dune Movies" className='images'/>
              <div className='bg-dark'>
                <div className='p-2 m-1 text-white'>
                  <Card.Title className='text-center p-2 m-1'>DUNE</Card.Title>
                  <Card.Text className='text-left'>
                    This is a wider card with natural lead-in
                    to additional content
                  </Card.Text>
                  <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4}  className='movieWrapper'>
            <Card className="movieImage">
              <Image src={avengersImage} alt="Dune Movies" className='images'/>
              <div className='bg-dark'>
                <div className='p-2 m-1 text-white'>
                  <Card.Title className='text-center p-2 m-1'>DUNE</Card.Title>
                  <Card.Text className='text-left'>
                    This is a wider card with natural lead-in
                    to additional content
                  </Card.Text>
                  <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className='movieWrapper'>
            <Card className="movieImage">
              <Image src={batmanImage} alt="Dune Movies" className='images'/>
              <div className='bg-dark'>
                <div className='p-2 m-1 text-white'>
                  <Card.Title className='text-center p-2 m-1'>DUNE</Card.Title>
                  <Card.Text className='text-left'>
                    This is a wider card with natural lead-in
                    to additional content
                  </Card.Text>
                  <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className='movieWrapper'>
            <Card className="movieImage">
              <Image src={robinhoodImage} alt="Dune Movies" className='images'/>
              <div className='bg-dark'>
                <div className='p-2 m-1 text-white'>
                  <Card.Title className='text-center p-2 m-1'>DUNE</Card.Title>
                  <Card.Text className='text-left'>
                    This is a wider card with natural lead-in
                    to additional content
                  </Card.Text>
                  <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className='movieWrapper'>
            <Card className="movieImage">
              <Image src={spidermanImage} alt="Dune Movies" className='images'/>
              <div className='bg-dark'>
                <div className='p-2 m-1 text-white'>
                  <Card.Title className='text-center p-2 m-1'>DUNE</Card.Title>
                  <Card.Text className='text-left'>
                    This is a wider card with natural lead-in
                    to additional content
                  </Card.Text>
                  <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className='movieWrapper'>
            <Card className="movieImage">
              <Image src={supermanImage} alt="Dune Movies" className='images'/>
              <div className='bg-dark'>
                <div className='p-2 m-1 text-white'>
                  <Card.Title className='text-center p-2 m-1'>DUNE</Card.Title>
                  <Card.Text className='text-left'>
                    This is a wider card with natural lead-in
                    to additional content
                  </Card.Text>
                  <Card.Text className='text-left'>Last updated 3 mins ago</Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SuperHero