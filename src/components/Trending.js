import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import duneImage from '../assets/images/trending/dune.jpg'
import everythingImage from '../assets/images/trending/everything.webp'
import jokerImage from '../assets/images/trending/joker.jpg'
import morbiusImage from '../assets/images/trending/morbius.jpg'
import spidermanImage from '../assets/images/trending/spiderman.jpg'
import toyStoryImage from '../assets/images/trending/toy story.jpg'

const Trending = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className='text-white'>TRENDING MOVIES</h1>
        <br />
        <Row>
          <Col md={4} className='movieWrapper' id="trending">
            <Card className="movieImage">
              <Image src={duneImage} alt="Dune Movies" className='images'/>
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
              <Image src={everythingImage} alt="Dune Movies" className='images'/>
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
              <Image src={jokerImage} alt="Dune Movies" className='images'/>
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
              <Image src={morbiusImage} alt="Dune Movies" className='images'/>
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
              <Image src={toyStoryImage} alt="Dune Movies" className='images'/>
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

export default Trending