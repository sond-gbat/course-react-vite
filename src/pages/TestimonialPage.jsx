import { Container, Row, Col } from "react-bootstrap"
import { testimonial } from "../data/index"

import FaqComponent from "../components/FaqComponent"

const TestimonialPage = () => {
  return (
    <div className="testimonial-page">
      <div className="testimonial">
        <Container>
          <Row>
            <Col>
              <h1 className="fw-bold text-center animate__animated animate__bounceInDown animate__delay-1s">Semua Testimonial</h1>
              <p className="text-center animate__animated animate__bounceInRight animate__delay-1s">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, ipsum vero nisi vitae impedit iste inventore iure quis, omnis fuga a eaque cum in esse cupiditate eveniet placeat, praesentium quod.</p>
            </Col>
          </Row>
          <Row className="row-cols-lg-3 row-cols-lg-1">
            {testimonial.map((data) => (

              <Col key={data.id} className=" mb-5">
                <p className="desc shadow-sm">{data.desc}</p>
                <div className="people d-flex align-items-center w-100">
                  <img src={data.image} alt="testimonial" />
                  <div>
                    <h5 className="mb-1">{data.name}</h5>
                    <p className="m-0 fw-bold">{data.skill}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <FaqComponent />
    </div>
  )
}

export default TestimonialPage
