import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.discordapp.net/attachments/1052299157047623713/1112762244976087131/The_wave.png?width=960&height=536"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Seja bem-vindo</h3>
          <p>Aqui na The Wave temos diversos produtos de extrema qualidade, que são ideais para você!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.discordapp.net/attachments/1052299157047623713/1112763510250803264/The_wave_1.png?width=960&height=536"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Nossos produtos</h3>
          <p>Produtos ideais para quem quer ter a melhor experiência no surf</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://media.discordapp.net/attachments/1052299157047623713/1112765865335718038/The_wave_2.png?width=960&height=536"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3></h3>
          <p>
            
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;