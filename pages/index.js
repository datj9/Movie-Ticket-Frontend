import Head from 'next/head'
import { Container, Carousel, Card, Button, Row, CardColumns, Col } from 'react-bootstrap'

export default function Home() {
  return (
    <div className='homepage'>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="main-poster bg-primary">
        <Container>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://congngheviet.com/wp-content/uploads/2019/04/avengers-endgame.jpg"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Avengers: Endgame</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://scontent.fsgn5-1.fna.fbcdn.net/v/t1.0-9/93853504_2965018873564352_7241184989834903552_o.jpg?_nc_cat=104&_nc_sid=e3f864&_nc_ohc=g7uL6LChmPUAX_AVadc&_nc_ht=scontent.fsgn5-1.fna&oh=7743c55fa63edd312d896d6499359e08&oe=5EC5803C"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Blue Eyes</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.hdqwalls.com/wallpapers/aquaman-2018-movie-poster-1z.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Aquaman</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Container>
      </div>

      <div className="now-showing mt-5">
        <Container>
          <h2 className='list-title font-weight-bold pb-3 text-uppercase'>Now Showing</h2>
          <Row>
            <Col xs={6} sm={6} md={4} lg={3}>
              <Card>
                <Card.Img variant="top" src="https://resizing.flixster.com/IaXbRF4gIPh9jireK_4VCPNfdKc=/300x0/v2/https://flxt.tmsimg.com/assets/p17387519_p_v13_ad.jpg" />
                <Card.Body className='d-flex flex-column'>
                  <Card.Title>Swallow</Card.Title>
                  <Button className='p-1 mb-2' variant="info">More Detail</Button>
                  <Button className='p-1' variant="primary">Buy Ticket</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} sm={6} md={4} lg={3}>
              <Card>
                <Card.Img className='img-fluid' variant="top" src="https://resizing.flixster.com/IaXbRF4gIPh9jireK_4VCPNfdKc=/300x0/v2/https://flxt.tmsimg.com/assets/p16987523_p_v13_ab.jpg" />
                <Card.Body className='d-flex flex-column'>
                  <Card.Title>Resistance</Card.Title>
                  <Button className='p-1 mb-2' variant="info">More Detail</Button>
                  <Button className='p-1' variant="primary">Buy Ticket</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} sm={6} md={4} lg={3}>
              <Card>
                <Card.Img className='img-fluid' variant="top" src="https://resizing.flixster.com/IaXbRF4gIPh9jireK_4VCPNfdKc=/300x0/v2/https://flxt.tmsimg.com/assets/p17387953_p_v13_aa.jpg" />
                <Card.Body className='d-flex flex-column'>
                  <Card.Title>The Other Lamb</Card.Title>
                  <Button className='p-1 mb-2' variant="info">More Detail</Button>
                  <Button className='p-1' variant="primary">Buy Ticket</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="open-this-week mt-5">
        <Container>
          <h2 className='list-title font-weight-bold pb-3 text-uppercase'>Opening This Week</h2>
          <Row>
            <Col xs={6} sm={6} md={4} lg={3}>
              <Card>
                <Card.Img variant="top" src="https://resizing.flixster.com/IaXbRF4gIPh9jireK_4VCPNfdKc=/300x0/v2/https://flxt.tmsimg.com/assets/p18109226_p_v13_aa.jpg" />
                <Card.Body className='d-flex flex-column'>
                  <Card.Title>Survive The Night</Card.Title>
                  <Button className='p-1 mb-2' variant="info">More Detail</Button>
                  <Button className='p-1' variant="primary">Buy Ticket</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col xs={6} sm={6} md={4} lg={3}>
              <Card>
                <Card.Img className='img-fluid' variant="top" src="https://resizing.flixster.com/IaXbRF4gIPh9jireK_4VCPNfdKc=/300x0/v2/https://flxt.tmsimg.com/assets/p17382312_p_v13_aa.jpg" />
                <Card.Body className='d-flex flex-column'>
                  <Card.Title>Dream Horse</Card.Title>
                  <Button className='p-1 mb-2' variant="info">More Detail</Button>
                  <Button className='p-1' variant="primary">Buy Ticket</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="coming-soon mt-5">
        <Container>
          <h2 className='list-title font-weight-bold pb-3 text-uppercase'>Coming Soon</h2>
          <Carousel>
            <Carousel.Item>
              <Row>
                <Col>
                  <img
                    className="d-block w-100"
                    src="https://resizing.flixster.com/IaXbRF4gIPh9jireK_4VCPNfdKc=/300x0/v2/https://flxt.tmsimg.com/assets/p16970726_p_v13_aa.jpg"
                    alt="First slide"
                  />
                </Col>
                <Col>
                  <img
                    className="d-block w-100"
                    src="https://resizing.flixster.com/IaXbRF4gIPh9jireK_4VCPNfdKc=/300x0/v2/https://flxt.tmsimg.com/assets/p17813839_p_v13_ab.jpg"
                    alt="First slide"
                  />
                </Col>
                <Col>
                  <img
                    className="d-block w-100"
                    src="https://resizing.flixster.com/IaXbRF4gIPh9jireK_4VCPNfdKc=/300x0/v2/https://flxt.tmsimg.com/assets/p17760742_p_v13_ac.jpg"
                    alt="First slide"
                  />
                </Col>
                <Col>
                  <img
                    className="d-block w-100"
                    src="https://resizing.flixster.com/IaXbRF4gIPh9jireK_4VCPNfdKc=/300x0/v2/https://flxt.tmsimg.com/assets/p18137915_p_v13_ab.jpg"
                    alt="First slide"
                  />
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                <Col>
                  <img
                    className="d-block w-100"
                    src="https://resizing.flixster.com/IaXbRF4gIPh9jireK_4VCPNfdKc=/300x0/v2/https://flxt.tmsimg.com/assets/p18004375_p_v13_aa.jpg"
                    alt="Film"
                  />
                </Col>
                <Col>
                  <img
                    className="d-block w-100"
                    src="https://resizing.flixster.com/IaXbRF4gIPh9jireK_4VCPNfdKc=/300x0/v2/https://flxt.tmsimg.com/assets/p17633537_p_v13_aa.jpg"
                    alt="First slide"
                  />
                </Col>
                <Col>
                  <img
                    className="d-block w-100"
                    src="https://resizing.flixster.com/IaXbRF4gIPh9jireK_4VCPNfdKc=/300x0/v2/https://flxt.tmsimg.com/assets/p18180450_p_v13_aa.jpg"
                    alt="First slide"
                  />
                </Col>
                <Col>
                  <img
                    className="d-block w-100"
                    src="https://resizing.flixster.com/IaXbRF4gIPh9jireK_4VCPNfdKc=/300x0/v2/https://flxt.tmsimg.com/assets/p17871471_p_v10_aa.jpg"
                    alt="First slide"
                  />
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </Container>
      </div>

      <footer>

      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .carousel-image {
          width: 78%;
          margin: 0 auto;
        }

        .list-title {
          font-size: 24px;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
